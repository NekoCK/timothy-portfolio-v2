import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptPath = fileURLToPath(import.meta.url);
const repo = path.resolve(path.dirname(scriptPath), "..");
const source = fs.readFileSync(path.join(repo, "insurance-case.js"), "utf8");
const context = { window: {} };
vm.runInNewContext(source, context, { filename: "insurance-case.js" });

const page = context.window.INSURANCE_CASE_PAGE;
if (!page) throw new Error("Insurance case module did not initialize.");

const locales = ["zh-Hant", "en", "ja"];
const expectedIds = ["glance", "background", "decisions", "decision-template", "decision-boundaries", "experience", "decision-disclosure", "decision-flow", "adoption", "outcomes"];
const requiredMetrics = {
  "zh-Hant": ["9 → 約 2.4 人週", "3+ 月 → 約 1 月", "1 週 → 2 天"],
  en: ["9 → ~2.4 person-weeks", "3+ months → ~1 month", "1 week → 2 days"],
  ja: ["9 → 約2.4人週", "3か月超 → 約1か月", "1週間 → 2日"]
};
const forbidden = [
  "development costs were each reduced",
  "開發成本各降低約 50%",
  "開発コスト50%",
  "client self-service",
  "launched",
  "deployed"
];

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

for (const locale of locales) {
  const content = page.getContent(locale);
  assert(content.decisions.d1.models.length === 3, `${locale}: expected three delivery-model alternatives.`);
  assert(content.decisions.d1.models[2].state === "chosen", `${locale}: Option C must be the selected model.`);
  assert(content.decisions.d1.chosen.commercial.length === 3, `${locale}: commercial extension must contain three tiers.`);
  assert(content.decisions.d2.levels.length === 3, `${locale}: expected three configuration levels.`);
  assert(content.interactions.ux1.options.length === 2, `${locale}: UX-1 must contain two supported alternatives.`);
  assert(content.interactions.ux2.steps.length === 4, `${locale}: UX-2 must contain four task steps.`);
  assert(content.adoption.cards.length === 3, `${locale}: expected three ongoing enterprise engagements.`);
  assert(content.outcomes.cards.length === 3, `${locale}: expected three outcome metrics.`);
  assert(/主導範本|I led the Template|方向性を主導/.test(content.decisions.d2.ownership), `${locale}: ownership wording does not reflect the approved story.`);
}

for (const locale of locales) {
  const content = page.getContent(locale);
  const html = page.render({
    locale,
    project: { accent: "#426f9d", soft: "#dfeaf3", dark: "#234867", cover: "assets/images/original/insuranceHero.png", index: "02" },
    ui: { backToWork: locale === "zh-Hant" ? "回到作品" : locale === "ja" ? "作品一覧へ" : "Back to work" },
    tail: ""
  });

  for (const id of expectedIds) {
    if (!html.includes(`id="${id}"`)) throw new Error(`${locale}: missing #${id}`);
  }
  for (const [, , id] of content.toc) {
    if (!html.includes(`href="#${id}"`) || !html.includes(`data-section="${id}" data-insurance-section-link`)) throw new Error(`${locale}: TOC is not wired to #${id}`);
  }
  if ((html.match(/class="decision-model reveal"/g) || []).length !== 3) throw new Error(`${locale}: D1 must contain 3 alternatives.`);
  if ((html.match(/class="configuration-group reveal"/g) || []).length !== 3) throw new Error(`${locale}: D2 must contain 3 configuration levels.`);
  if ((html.match(/class="adoption-card reveal"/g) || []).length !== 3) throw new Error(`${locale}: Adoption must contain 3 ongoing engagements.`);
  for (const metric of requiredMetrics[locale]) {
    if (!html.includes(metric)) throw new Error(`${locale}: missing metric ${metric}`);
  }
  for (const phrase of forbidden) {
    if (html.toLowerCase().includes(phrase.toLowerCase())) throw new Error(`${locale}: forbidden or outdated claim: ${phrase}`);
  }

  const assets = [...html.matchAll(/(?:src|data-zoom-src)="(assets\/[^"]+)"/g)].map(match => match[1]);
  for (const asset of new Set(assets)) {
    if (!fs.existsSync(path.join(repo, asset))) throw new Error(`${locale}: missing asset ${asset}`);
  }

  const fileBase = pathToFileURL(repo).href.replace(/\/$/, "");
  const staticMarkup = html
    .replaceAll('src="assets/', `src="${fileBase}/assets/`)
    .replaceAll('data-zoom-src="assets/', `data-zoom-src="${fileBase}/assets/`);
  const qaHtml = `<!doctype html><html lang="${locale}" data-locale="${locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="${fileBase}/styles.css"><link rel="stylesheet" href="${fileBase}/insurance-case.css"><style>.reveal{opacity:1!important;transform:none!important}</style><title>${content.pageTitle}</title></head><body>${staticMarkup}</body></html>`;
  fs.writeFileSync(`/private/tmp/insurance-qa-${locale}.html`, qaHtml);
}

const board = `<!doctype html><html><head><meta charset="utf-8"><style>
  *{box-sizing:border-box}body{margin:0;padding:24px;background:#e9e6df;font:14px system-ui;color:#243142}.board{display:grid;grid-template-columns:minmax(0,1fr) 420px;gap:24px}.panel{padding:12px;border-radius:16px;background:#fff;box-shadow:0 8px 28px rgba(23,35,48,.12)}h2{margin:0 0 10px;font-size:15px}.desktop{width:100%;height:820px;border:0}.mobile{display:block;width:390px;height:820px;margin:auto;border:1px solid #d5d3ce}.diagrams{grid-column:1/-1;display:grid;grid-template-columns:1fr 1fr;gap:20px}.diagrams img{display:block;width:100%;height:auto;border:1px solid #e1ddd6}
</style></head><body><div class="board"><section class="panel"><h2>Chinese · desktop</h2><iframe class="desktop" src="file:///private/tmp/insurance-qa-zh-Hant.html"></iframe></section><section class="panel"><h2>Chinese · 390px mobile iframe</h2><iframe class="mobile" src="file:///private/tmp/insurance-qa-zh-Hant.html"></iframe></section><section class="panel diagrams"><div><h2>English · localized flow evidence</h2><img src="${pathToFileURL(path.join(repo, "assets/Insurance/BeforeAfter_ENv4.svg")).href}"></div><div><h2>Japanese · localized flow evidence</h2><img src="${pathToFileURL(path.join(repo, "assets/Insurance/BeforeAfter_JPv4.svg")).href}"></div></section></div></body></html>`;
fs.writeFileSync("/private/tmp/insurance-qa-board.html", board);

console.log("Insurance case validation passed for zh-Hant, en, and ja.");
