# Clean Release Clone — AI / CLI / Desktop Handoff

Last updated: 2026-09-12 09:23 +09:00

Read this file before editing, synchronizing, committing, or publishing the portfolio.

## 2026-09-12 Homepage hierarchy V1 review

- Applied a low-risk homepage refinement without changing the Hero container, About/Method layout, 2×2 Selected Work grid, team-value section, Contact panel, navigation, responsive architecture, or global visual language.
- Reordered the reviewed V1 grid to lead with Insurance, followed by OneSleeve, Ferqo, and EdTech. Synchronized the visible 01–04 card indexes across all three locales; no case-study content changed.
- Replaced the AI-led Hero support line with a clearer positioning statement about finding the core problem across user, business, and technical constraints, making the product decision clear, and turning it into a reusable team system.
- Shortened the existing About/Method introduction and converted its three existing cards into a numbered working sequence: find the core problem, make the decision clear, and turn the decision into a system. The background line now concisely covers nine years, B2B SaaS/fintech/cybersecurity/IoT, Taiwan/Japan/Hong Kong, and work beyond interface delivery.
- Kept the existing four-card grid and project order. Removed the redundant homepage subtitle line from each rendered card, shortened each problem/decision summary, and added optional two-metric homepage data. Insurance now uses the approved `3+ months → ~1 month` and `9 → ~2.4 person-weeks` evidence instead of the obsolete development-cost wording. OneSleeve and Insurance receive only a restrained title/metric emphasis; all cards retain the same structure.
- Simplified the rendered team-value copy so it describes downstream team benefits rather than repeating the working method. Contact structure and wording remain unchanged.
- Updated the same homepage hierarchy and evidence meaning in English, Traditional Chinese, and Japanese. `content/portfolio.json` and the embedded `index.html` fallback remain synchronized.
- Visual QA used only local `file://` content, temporary profiles under `/private/tmp`, and headless Chrome screenshots written to `/private/tmp`. Desktop review confirmed the Hero, three-step Method, 2×2 work grid, shortened team-value block, and Contact panel retain the existing visual language. Chrome emitted non-fatal macOS compositor/updater logs after writing the screenshots.
- This V1 is intentionally uncommitted and unpushed pending user visual review. Next safe action: review the desktop screenshots, make any requested copy/spacing adjustments, then run the standard validation suite before a separately authorized commit or push.

## 2026-09-12 Insurance decision case production integration

- Promoted the user-approved Chinese Insurance decision case into the production SPA without changing the homepage, other case studies, global navigation, or shared case renderer. `app.js` now routes only the `insurance` slug through the scoped `insurance-case.js` renderer; all other cases retain the existing generic renderer.
- Added natural, claim-matched English and Japanese versions with the same Hero, Case at a Glance, Background, D1 delivery-model comparison, selected Template + controlled-modularity model, commercial extension, D2 configuration boundary, two interaction decisions, ongoing adoption, and outcomes.
- Preserved the approved ownership story across all locales: the team initially pursued a more standardized delivery approach; Timothy identified that standardization did not define the flexibility boundary, proposed the Template + modular direction, and defined the configuration boundary with Product and Engineering.
- Added `insurance-case.css`, fully scoped beneath `.case-page--insurance-approved`, by promoting the approved prototype-only visual rules. Shared typography, navigation, modal behavior, page width, base components, and the other project pages remain unchanged.
- Added localized V4 flow diagrams at `assets/Insurance/BeforeAfter_CHv4.svg`, `BeforeAfter_ENv4.svg`, and `BeforeAfter_JPv4.svg`. The older English/Japanese V2 images were not reused because they contain obsolete development-cost claims.
- Added `scripts/validate-insurance-case.mjs`. It renders and structurally checks all three locales, confirms anchors and key section cardinality, verifies the approved metrics and ownership wording, rejects known outdated claims, checks referenced asset paths, and writes disposable visual-QA files only to `/private/tmp`.
- Desktop and true 390px iframe QA confirmed the approved Hero hierarchy and responsive stacking. A production `file://` capture confirmed that the live SPA route loads the English approved renderer. Chrome's compositor emitted non-fatal macOS headless warnings after writing the screenshots; the output files were still produced successfully.
- Recovery points created before production integration: branch `backup/insurance-before-decision-rewrite` and tag `insurance-pre-decision-rewrite`, both at commit `ff1544d`, and both pushed to `origin`.

## 2026-09-09 Insurance case-at-a-glance structure concept

- Added `docs/insurance-case-at-a-glance-concept.svg` and a rendered PNG as discussion-only references for a potential PayPay-oriented Insurance case-study opening.
- Added five standalone prototypes: the initial editorial experiment at `prototypes/paypay-insurance-case/index.html`, the lower-change native-style version at `prototypes/paypay-insurance-case-native/index.html`, the GPT-6 Astra refinement at `prototypes/paypay-insurance-case-refined/index.html`, the chronology-corrected version at `prototypes/paypay-insurance-case-phased/index.html`, and the production-style structure test at `prototypes/paypay-insurance-case-live-structure/index.html`.
- The native-style version imports the production `styles.css` and reuses the existing header, case hero, snapshot, numbered case sections, system visuals, media cards, and outcomes components. Its inline styles are narrowly scoped to the new summary and P1–P3 problem labels.
- The Astra refinement retains the production stylesheet and brand language while improving the native prototype's visual hierarchy: restrained split Hero, continuous three-stage summary, dual-track flow comparison, varied editorial image rhythm across P1–P3, and quieter evidence notes. Its additional CSS is scoped beneath `#insurance-refined-prototype`; no JavaScript or external framework was added.
- The production-style prototype uses `assets/Insurance/BeforeAfter_CHv3.png` as its Case at a Glance visual. This non-destructive revision removes the ambiguous dashed-loop arrows and updates the result labels to `對齊時間／約降低 50%`, `開發成本／約降低 50%`, and `設計適配時間／約一週縮短至兩天`. The earlier V2 Traditional Chinese, English, and Japanese images remain available; the phased prototype still references the Traditional Chinese V2. The phased narrative preserves Template alignment and functional modularization as the original D1/D2 delivery intervention, places the supported delivery outcomes immediately afterward, and moves application-flow/UI work into a smaller, explicitly later D3 experience-refinement branch. The UX branch does not claim completion-rate or usability-test improvement.
- The production-style structure test imports the live `styles.css` and keeps the live Hero, snapshot cards, section markers, system visuals, media cards, and outcomes layout. After an initial version made the middle of the page too visually mixed, it was simplified so Section 02 contains only the two core delivery decisions and Section 03 separately contains the later UX refinement. Custom faux-UI and metric-banner components were removed in favor of the existing live component vocabulary. It uses `assets/Insurance/BeforeAfter_CHv3.png` and leaves all served content untouched.
- In the production-style prototype's disclosure decision, FAQ and accordion are one combined solution—not separate options. The section now compares only the actual in-page FAQ accordion against a new-page/modal direction and does not manufacture a third alternative.
- Removed the three text summary cards from the production-style prototype's Case at a Glance because they duplicated the localized Before/After artwork and pushed the primary design evidence down the page. The section now moves directly from its headline into `BeforeAfter_CHv3.png` and its caption; the long evidence disclaimer remains only in the Outcomes section.
- Added a wide-screen sticky left chapter index to the production-style prototype. It lists Case at a Glance, Background, Core Decisions, Later UX, Adoption, and Outcomes; a lightweight local scrollspy updates the active item with the project color and heavier weight. The original live-style section numbers and labels remain visible. At 1180px and above, the case content shifts right to reserve a separate rail for the index; below that width, the index is hidden and the original section markers remain unchanged.
- Removed the production-style prototype's standalone Research section because it repeated the three problems already established in Background. Its supporting method is now a compact `問題如何確認` note beneath the problem cards, allowing the case study to reach the design decisions sooner. Following sections and the sticky index were renumbered from 02 through 05.
- The concept visual summarizes Before → Design intervention → After, then follows with a user-flow Before/After comparison. It preserves the current evidence qualifiers for the estimated alignment-time and development-cost reductions.
- All HTML prototypes include the Hero, Case at a Glance, flow comparison, context, fixed/configurable principle, problem-led design stories, real-world adoption, and explicit evidence boundaries. All local stylesheet and image references resolve. macOS Quick Look captures confirmed the desktop first-screen hierarchy for all three directions; browser-based mobile visual QA remains unavailable in this environment.
- No served portfolio content, application code, stylesheet, project ordering, embedded fallback, or live page was changed. The SVG remains editable; the PNG was visually inspected at its full 1600×1050 output size.
- Next safe action: compare the four prototypes with the user, refine only the selected direction, and request the original source for the estimated outcome figures or real usability evidence if stronger claims are desired before any production integration.

## 2026-09-11 Editable Figma prototype

- Rebuilt the current production-style Insurance prototype as editable native Figma layers in the existing `Timothy` page of file `m9njP27g2tPfn9jzCoWGUh`.
- The new top-level frame is `Insurance SaaS — PayPay Portfolio Prototype` (`304:9`), positioned at `x=16800` so no existing canvas work was overwritten.
- The 1280px auto-layout page includes the Hero, Case at a Glance, Background, Core Decisions, Later UX, Actual Adoption, Outcomes, and footer. Text, cards, spacing, section surfaces, boundary map, option comparison, flow comparison, and metric cards remain individually editable.
- Embedded the existing source visuals directly as Figma image fills. Because the runtime could not resolve the Figma upload host without external network escalation, locally downscaled reference copies were encoded through the Figma Plugin API instead; the original repository assets remain unchanged and can be dropped in manually for higher-resolution export.
- Validated the full 1280×8554 frame and inspected the Core Decisions, Later UX, and Outcomes sections via rendered Figma screenshots. Cleared accidental default white fills from structural auto-layout containers so the result follows the live page's cream, paper, and dark-blue section hierarchy.
- No production HTML, CSS, content data, publish state, or existing Figma nodes were modified.
- After visual comparison with the source HTML/CSS, added a second, non-destructive Figma frame named `Insurance SaaS — Live Structure Match v2` (`318:9`) at `x=18400`. This 1440px version follows the live prototype more literally: vertically stacked Hero, 1280px shell, reserved sticky-index rail, open editorial decision subsections, white 24px-padded media cards, continuous cream canvas, fine section dividers, and the pale blue-to-paper Outcomes treatment. The first editable reconstruction (`304:9`) remains intact for comparison.
- Refined the two explanatory diagrams in V2 to match the live prototype's information structure instead of simplified concept cards. `設計邊界` now shows shared-foundation chips, controlled brand variables, the configuration connector, and the reusable-delivery result bar. `Before / After` now shows individual task rows, the central transition arrow, differentiated panels, and the evidence note with its divider. Validated both diagram nodes through rendered Figma screenshots.

## 2026-09-11 Insurance V4.3 Chinese prototype

- Added a new, isolated prototype at `prototypes/paypay-insurance-case-v4-3/index.html`; the earlier live-structure prototype and all served portfolio files remain unchanged.
- Used `assets/portfolio-context/insurance-complete-v4.3.md` as the factual source while compressing it for scanability. Preserved the existing Hero, Glance, 01 Background, 02 Core Decision with D1/D2, 03 Later UX with UX-1/UX-2, 04 Adoption, and 05 Outcomes order, plus the current sticky chapter index and live stylesheet.
- Corrected the ownership narrative: Timothy proposed the upstream Template direction; reusable components were the team's existing downstream direction; Timothy's D2 contribution was defining which design structures and behaviors stay shared versus which brand and content properties can change.
- Added only three scoped comprehension patterns: a compact Glance shift, a two-bottleneck plus delivery-chain visual for the core decision, and a truthful task-based application-flow comparison. Existing UI screenshots were retained, and the Shin Kong Vietnam image was added to the three ongoing-engagement summary.
- Hero and Outcomes now use the supported `3+ months to about 1 month` cycle and approximately `73%` Engineering + Design effort comparison. D1 keeps the approximately `50%` Sales-feedback alignment result locally; D2 keeps the `about 1 week to 2 days` adaptation result locally. No cost estimate, launch, conversion, adoption, or user-behavior claim was added.
- Refined only this V4.3 prototype's visual rhythm after reviewing the Morpheus Chen BitMart and Emma Chen AI Plus case-study references. Reduced oversized Chinese headings, narrowed prose measures, increased section spacing, flattened Hero metrics and evidence notes, removed nested-card weight from Glance, softened system visuals and media frames, and gave UI evidence more visual priority. The portfolio's existing grid, palette, typography family, screenshots, section order, and responsive breakpoints remain the foundation.
- Replaced the temporary HTML-only Glance comparison with the user's preferred full visual-flow treatment from `assets/Insurance/BeforeAfter_CHv3.png`. The prototype crops the outdated Key Results strip from the embedded view while keeping the full image available through the click-through; this preserves the clearer diagram without reintroducing its obsolete approximately 50% development-cost claim into the V4.3 narrative.
- Rebalanced the V4.3 Hero without changing its content hierarchy: the existing `insuranceHero.png` cover is now a full-frame background layer instead of a separate block below the copy. A strong paper-colour wash protects the left-side text while allowing the real product image to remain visible on the right; the title measure is wider, the redundant empty column is removed, and the mobile wash becomes more opaque for legibility.
- Shortened only the visible V4.3 Hero headline from `端到端交付週期…` to `交付週期…` so it can hold a cleaner desktop line. The metric label and evidence language retain `端到端交付週期` to preserve the result's exact scope.
- Reconnected the V4.3 Hero copy into a human-readable sequence instead of repeating framework and metric language: the headline states the result, the subtitle names the human problem (`每個新客戶案…從空白開始`), the deck explains Timothy's Template and design-boundary contributions with the correct ownership distinction, and the two metrics now read as supporting evidence.
- Refined the V4.3 Hero hierarchy again to follow the selected editorial reference more closely: one prominent outcome sentence, a supporting subtitle, a muted first-person role/contribution paragraph, a lightweight date/team/scope line, and the two metrics anchored at the bottom of the frame. Added a one-time 1.2-second ease-out counter for the visible `3`, `1`, and `73` values; reduced-motion users see the final values immediately, and assistive labels retain the complete result wording.
- Corrected the first implementation after it became visually overextended. The Hero now uses one calm 700–920px left reading column, a smaller headline, quieter supporting copy, and a compact 700px metric strip rather than a full-width translucent dashboard band. The background image remains a right-side atmospheric layer, and the floating case-index badge is hidden inside this background treatment.
- Restored the V4.3 Hero metadata to the portfolio's original separated `case-meta` cells, now with four columns for role, date, team, and scope. The muted paragraph above explains Timothy's actual contribution while the role cell supports rapid scanning; the metadata row sits above the animated outcome strip.
- Corrected the Hero Achievement hierarchy: a broad descendant `span` rule had unintentionally styled nested counter fragments like labels. The rule now targets only direct labels; `3+`, `1`, and `73%` use a substantially larger display scale while units, approximation text, and the arrow remain compact. The existing count-up behavior and accessible full-value labels remain intact.
- Enlarged and widened the complete V4.3 Hero text hierarchy at the user's request. The headline now occupies up to 1050px; the supporting line, role/contribution copy, four-cell metadata row, and Achievement strip extend to 900px with proportionally larger type so the content fills the Hero's usable text area instead of clustering in a narrow column.
- Corrected the remaining apparent blank area on the V4.3 Hero's right side. The issue was the paper wash rather than the text measure: the overlay now fades rapidly after the content area, the product image has greater saturation and contrast, and a restrained 1.08 scale brings the tablet composition into the right side instead of exposing the source photo's grey edge.
- Applied a restrained dark-blue-to-brand-blue gradient only to the animated Hero Achievement numerals (`3+`, `1`, and `73%`). Units, approximation text, arrows, labels, and all non-Hero metrics remain solid colours so the accent does not spread across the page.
- Fixed the V4.3 Hero's wide-viewport alignment issue without redesigning it. The root cause was independent 820–900px `max-width` constraints on the metadata and Achievement rows, not an unused grid column or percentage-width layout. Added one full-width `case-hero__inner` inside the existing symmetrical Hero padding; structural rows now span that shared inner width, while title and body copy retain their own readable maximum measures. The absolute background layer remains independent.
- Applied the user-supplied final V4.3 Hero copy only. The headline now describes the move from every client behaving like a new project to a reusable insurance-delivery framework; the supporting sentence states the Template and shared/changeable-boundary contribution without repeating the role already present in Meta. Structural Meta and Achievement rows remain full-width within `case-hero__inner`; the headline and support use 820px and 760px readable measures, and the obsolete desktop no-wrap rule was removed so the headline can occupy up to two balanced lines. Metrics now read `端到端交付週期` and `工程＋設計投入`, with the requested downward indicator on approximately 73%.
- Replaced the V4.3 Hero supporting statement with the user-supplied two-bottleneck framing: upstream client decision-space convergence and downstream Design/Engineering reuse, closing on both faster execution and clearer scope. The headline remains unchanged.
- Re-ran the standard syntax/content checks successfully. Attempted non-interactive desktop/mobile capture with local WebKit and installed Chrome, but both renderer processes were blocked by the workspace sandbox before producing PNGs. No macOS or broader filesystem permission was requested. The standalone file remains the verified source for manual visual review.
- Validation passed for JavaScript syntax, tracked whitespace, new-file whitespace, local asset references, required section order, evidence qualifiers, and unsupported-claim keyword checks. Apple Tidy reported no remaining document issues after excluding its obsolete HTML5-element warnings. Desktop/mobile rendered QA could not run because local socket binding is restricted and the available browser surface failed to start; open the standalone file locally for the next visual check.

## 2026-09-12 Insurance V4.3 D2 visual decision refinement

- Refined only D2 in the isolated Chinese Insurance V4.3 prototype. Its title now asks how the Template configuration boundary was defined, and the intro states the concrete trade-off between repeated case-by-case design and insufficient support for necessary brand or business differences.
- Preserved the existing three-column visual framework while making its decision logic explicit: brand expression is configurable, content and flow modules are configurable only within predefined options, and the core experience remains locked. Localized the diagram and item labels to reduce documentation-like English terminology.
- Gave the controlled-modularity middle column a restrained project-accent selection treatment and replaced the longer conclusion with one compact editorial principle. D1, evidence screenshots, results, later sections, and served portfolio files remain unchanged.
- Corrected the hierarchy after review: removed the middle column's selection treatment because all three configuration levels coexist within the chosen D1 model. The columns now carry equal visual weight; only the spectrum communicates the progression from higher flexibility to greater restriction.
- Reworked only D2's lower reading sequence into Design principle, first-person Ownership, decision evidence, and Outcome. The paired evidence cards now use natural media heights instead of stretching to the tallest grid item, and their captions explicitly map the images back to configurable brand expression and locked core experience.
- Simplified that lower hierarchy again after review: ownership is now muted supporting copy beneath the design principle, the evidence uses only the heading `實際落地`, and the outcome relies on the `1 週 → 2 天` metric without another eyebrow label.
- Removed the duplicate media-caption arrow in the isolated prototype. The shared stylesheet generated one arrow through `figcaption::after` while each prototype caption already contained `原尺寸 ↗`; a prototype-scoped override now preserves only the explicit caption link cue.
- Enlarged the D2 design-principle and ownership copy, removed their authored line breaks, and kept each sentence on one desktop line. Narrow viewports retain natural wrapping to prevent overflow.
- Replaced only the three D2 configuration-level names and supporting copy with action-oriented wording: integrating the client brand, selecting predefined modules, and fixing the core architecture. Layout, diagrams, spectrum, equal visual weight, principle, evidence, and outcome remain unchanged.
- Increased only the D2 three-column heading, level, decision-statement, and item text sizes for easier scanning while preserving the existing column widths, diagrams, and layout.
- Matched the D2 `1 週 → 2 天` result metric to D1's project-blue result colour while leaving its supporting copy neutral.
- Increased the D2 design-principle statement to a compact H3-like scale and raised its ownership line to a full body-text scale, retaining their desktop single-line behavior.
- Restored a small `RESULT` eyebrow above the D2 `1 週 → 2 天` metric to match D1 while keeping the number as the primary hierarchy.
- Localized the matching D1 and D2 result eyebrows from `RESULT` to `結果`; styling and structure are unchanged.
- Simplified only Section 03 by removing the duplicate process bars from UX-1 and UX-2. UX-1 now uses a CSS crop of the existing `insuranceModular.png` to foreground the FAQ/Accordion while retaining the full page as secondary context; UX-2 keeps three lighter editorial evidence blocks before the After flow and existing UI screenshots. No factual claims or source assets changed.
- Localized all visible English interface and explanatory copy in the isolated Chinese prototype, excluding personal and company proper names. Added a desktop-only no-wrap rule to the UX-1 regulatory-disclosure question so it stays on one line; narrow viewports still wrap naturally.
- Removed the duplicated full-page FAQ evidence card because it reused the same source image as the crop. The single primary crop now links to the complete original image for context.
- Removed the redundant standalone UX-1 decision sentence; the selected alternative and final UI evidence now carry the rationale without repeating it.
- Kept the Section 04 adoption heading on one desktop line; tablet and mobile widths retain natural wrapping.
- Made the three final outcome cards concrete without adding metrics: they now identify the comparison as per-client staffing, requirement-to-delivery cycle time, and new-client design adaptation, with direct before/after values and short human-readable implications.
- Moved the Outcomes evidence qualifier directly beneath the main heading in the same left-aligned text column instead of positioning it on the right.

## Directory roles

- Clean release-integration clone: `/Users/timothy/Documents/Codex/2026-07-18/d/publish-repo-clean`
- Old working copy containing previous AI and user work: `/Users/timothy/Documents/Codex/2026-07-18/d/publish-repo`
- Frozen recovery snapshot: `/Users/timothy/Documents/Codex/2026-07-18/d/backups/publish-repo-snapshot-2026-09-02-pre-release`
- Repository: `NekoCK/timothy-portfolio-v2`
- Live URL: https://nekock.github.io/timothy-portfolio-v2/

Use this clean clone for release integration. Keep the old working copy as source material and the snapshot as read-only recovery material.

## Clean baseline

- Cloned directly from GitHub `main` on 2026-09-02.
- Baseline HEAD: `45394b14c7ecc570eaf51cc124f0cb9a6e9ad46e` (`Refresh CSS cache version`).
- At clone time, local `main`, `origin/main`, and HEAD all matched that commit.
- The working tree was clean before `AGENTS.md` and this handoff file were added.
- No portfolio content, CSS, images, or application code has been carried over yet.
- No commit, merge, push, deployment, or publication was performed during clone setup.

The two handoff files are intentionally the first local additions. Keep them available for Codex CLI/Desktop and consider committing them with the release-integration work.

## 2026-09-02 Traditional Chinese homepage copy integration

- Updated only the Traditional Chinese homepage copy in `content/portfolio.json` and the synchronized embedded fallback in `index.html`: Hero, About, Work, Strengths, homepage case-card titles/summaries, and CTA.
- Kept the existing Hero → About → Work → Strengths → teamValue → CTA layout, images, case-card order, English, Japanese, and all case-study copy unchanged. `teamValue` remains in its existing Traditional Chinese wording because no replacement copy was supplied.
- Added the supplied background-facts line to the About data and rendered it below the existing three About cards. Added an optional `cardTitle` field so the new homepage-only card titles do not change the case-page titles.
- Updated both content timestamps to `2026-09-02T07:24:00.000Z`.
- Validation performed: `git diff --check`, `node --check app.js`, `node --check admin/app.js`, and `jq empty content/portfolio.json` all passed; the embedded fallback parsed successfully and matches `content/portfolio.json` exactly.
- Remaining risk: visual QA is still required at desktop and mobile widths for the three locales; the longer Traditional Chinese card titles and summaries may need typography review. Next safe action: run the required checks, then review the homepage visually before any commit or publication.

## 2026-09-02 Traditional Chinese homepage heading line breaks

- Added explicit line breaks immediately after the relevant punctuation in the Traditional Chinese Hero, About, and Work headings, preventing the small text fragments after punctuation from wrapping by themselves.
- Updated heading rendering to safely convert content line breaks into `<br>` elements. Other locales and headings without supplied line breaks continue rendering unchanged.
- Synchronized `content/portfolio.json` and the embedded fallback in `index.html`; updated both timestamps to `2026-09-02T08:05:51.000Z`.
- Validation performed: `git diff --check`, `node --check app.js`, `node --check admin/app.js`, `jq empty content/portfolio.json`, embedded JSON parsing, and exact embedded/served-content comparison all passed. Remaining risk and next safe action: verify the explicit breaks visually at desktop and mobile widths before committing or publishing.

## 2026-09-02 Traditional Chinese homepage typography and team-value copy

- Reduced the Traditional Chinese Hero and About heading scales by two visual steps. The Hero's supplied line break remains immediately after its comma.
- Restored the Work heading to one content line and set the Traditional Chinese Work, Strengths, and team-value headings to remain on one line at desktop widths; they resume natural wrapping at 920px and below.
- Updated the three Traditional Chinese team-value cards to describe fewer direction corrections, faster decision-making, and a delivery that can keep operating. The third card body reuses the previously supplied Token/governance/naming/modular-framework value proposition.
- Synchronized `content/portfolio.json` and `index.html` fallback and set both timestamps to `2026-09-02T08:14:19.000Z`. `git diff --check`, `node --check app.js`, `node --check admin/app.js`, `jq empty content/portfolio.json`, embedded JSON parsing, and exact embedded/served-content comparison passed. Visually inspect desktop and mobile typography before committing or publishing.

## 2026-09-02 Traditional Chinese Work and About heading refinements

- Increased only the Traditional Chinese Work heading by one visual step while preserving its desktop single-line behavior.
- Added a supplied explicit line break between `系` and `統` in the Traditional Chinese About heading, so those characters never share a line.
- Synchronized the served and fallback content and set both timestamps to `2026-09-02T08:19:37.000Z`. `git diff --check`, `node --check app.js`, `node --check admin/app.js`, `jq empty content/portfolio.json`, embedded JSON parsing, and exact embedded/served-content comparison passed; visually review the intentional final-character break before committing or publishing.

## 2026-09-02 Traditional Chinese Work and About heading correction

- Increased the Traditional Chinese Work heading one additional visual step and removed its desktop width cap, allowing the larger heading to remain on one line on sufficiently wide screens. It resumes natural wrapping below 1120px.
- Removed the erroneous forced line break between `系` and `統` in the About heading; `系統` now stays together on its final line.
- Synchronized the served and fallback content and set both timestamps to `2026-09-02T08:29:59.000Z`. `git diff --check`, `node --check app.js`, `node --check admin/app.js`, `jq empty content/portfolio.json`, embedded JSON parsing, and exact embedded/served-content comparison passed; visually review the larger Work heading before committing or publishing.

## 2026-09-02 Traditional Chinese About heading wording

- Removed `可` from the final line of the Traditional Chinese About heading: it now reads `最後落地成持續運作的系統。` while preserving the three supplied line breaks.
- Synchronized the served and fallback content and set both timestamps to `2026-09-02T08:34:54.000Z`. `git diff --check`, `node --check app.js`, `node --check admin/app.js`, `jq empty content/portfolio.json`, embedded JSON parsing, and exact embedded/served-content comparison passed; visually confirm the resulting line length before committing or publishing.

## 2026-09-02 Traditional Chinese Work heading scale

- Increased the Traditional Chinese Work heading from `clamp(2rem, 2.4vw, 2.3rem)` to `clamp(2.2rem, 3vw, 2.6rem)` while retaining the single-line behavior on sufficiently wide screens and natural wrapping below 1120px.
- `git diff --check` passed; visually review the new scale before committing or publishing.

## 2026-09-02 English and Japanese homepage copy integration

- Updated the English and Japanese homepage Hero, About, Work, Strengths, CTA, homepage case-card titles, summaries, and supplied background-facts line from the user-approved three-language copy.
- Kept the existing `teamValue` sections, images, case-card order, and all case-study titles and copy intact. Added homepage-only `cardTitle` values when the supplied card heading differs from the case-study title.
- `git diff --check`, `node --check app.js`, `node --check admin/app.js`, `jq empty content/portfolio.json`, embedded JSON parsing, and exact embedded/served-content comparison all passed. Next safe action is to visually inspect both locales' longer homepage headings and card summaries before committing or publishing.

## 2026-09-02 English and Japanese Hero typography repair

- Added English- and Japanese-only Hero heading scales sized for the substantially longer supplied headlines, with `text-wrap: pretty` for more natural line distribution. Traditional Chinese typography remains unchanged.
- An automated visual check could not run because no browser session was available. `git diff --check` passed; the next safe action is a desktop and mobile visual review of both repaired Hero sections before committing or publishing.

## 2026-09-02 English and Japanese non-Hero heading scale

- Reduced only the English and Japanese homepage main headings outside the Hero: About, Work, Strengths, team-value, and CTA. Traditional Chinese and all case-study headings are unchanged.
- `git diff --check` passed; visually review the adjusted scales before committing or publishing.

## 2026-09-02 Three-language CTA headline copy

- Replaced the Traditional Chinese, English, and Japanese homepage CTA headings with the user-supplied invitation to discuss teams still determining the right problem to solve. CTA body copy, buttons, and layout remain unchanged.
- `git diff --check`, `node --check app.js`, `node --check admin/app.js`, `jq empty content/portfolio.json`, embedded JSON parsing, and exact embedded/served-content comparison all passed; visually review the longer CTA headings before committing or publishing.

## 2026-09-02 Traditional Chinese CTA heading scale

- Reduced only the Traditional Chinese CTA heading scale to accommodate the longer user-supplied headline. Other Traditional Chinese homepage headings and all English/Japanese styles remain unchanged.
- `git diff --check` passed; visually review the CTA heading before committing or publishing.

## 2026-09-02 Canonical Ferqo case-page integration

- The user identified the embedded `[data-portfolio-content]` Ferqo data in `../publish-repo/index.html#case/ferqo` as the canonical version. Replaced the English, Traditional Chinese, and Japanese Ferqo project objects in this clean repository with that source, including its five case-page sections and corresponding outcomes.
- Preserved the current clean repository's homepage-only Ferqo `cardTitle` and `cardDescription` values, which were supplied and approved separately for the new homepage; the source project title and all case-page content now come from the canonical embedded version.
- Synchronized `content/portfolio.json` and the clean `index.html` fallback; set both timestamps to `2026-09-02T15:22:19.000Z`. `git diff --check`, `node --check app.js`, `node --check admin/app.js`, `jq empty content/portfolio.json`, embedded JSON parsing, exact embedded/served-content comparison, and a three-locale canonical-Ferqo comparison all passed. Visual review of `#case/ferqo` at desktop and mobile widths in all locales remains required before committing or publishing.

## 2026-09-03 Contact email update

- Replaced the contact email with `nekoking2010@gmail.com` in the homepage Hero, homepage CTA, case-study CTA, and header contact link.
- `git diff --check`, `node --check app.js`, `node --check admin/app.js`, and `jq empty content/portfolio.json` passed; visually verify the updated email links before committing or publishing.

## 2026-09-04 English typography trial

- Added Instrument Serif for English display headings and Instrument Sans for English body and interface text, loaded from Google Fonts with local fallbacks. Traditional Chinese and Japanese font stacks are unchanged.
- Updated the stylesheet cache version to `20260904a`. `git diff --check`, `node --check app.js`, `node --check admin/app.js`, `jq empty content/portfolio.json`, embedded JSON parsing, and exact embedded/served-content comparison passed; visually review the English typography at desktop and mobile widths before committing or publishing.

## 2026-09-04 English typography trial — Plus Jakarta Sans

- Replaced the experimental Instrument Serif / Instrument Sans pairing with Plus Jakarta Sans for all English display, body, and interface text. Traditional Chinese and Japanese font stacks remain unchanged.
- Updated the stylesheet cache version to `20260904b`. Validate the final English rendering at desktop and mobile widths before committing or publishing.

## 2026-09-04 Ferqo section-number compatibility

- Corrected the case-section renderer to use `number` when present and retain `order` for older project data. The canonical Ferqo data uses `number` for its five section markers, whereas the renderer previously assumed only `order`, causing `undefined` to render in the page.
- No case-study copy, images, or ordering changed. Validate `#case/ferqo` in all locales at desktop and mobile widths before committing or publishing.

## 2026-09-04 Interactive homepage Hero canvas

- Replaced the homepage Hero's left-side portrait presentation with a decorative, language-independent product-thinking canvas: four abstract nodes, sparse relationship lines, and two paper/card outlines. The original portrait asset was deliberately preserved on disk and no image asset was deleted.
- On desktop fine-pointer devices, pointer movement produces a restrained 2–8px parallax; hovering a node raises its opacity and scale slightly while its related connections fade in over 420ms. Pointer leave restores the quiet baseline. Mobile and reduced-motion experiences remain static.
- Updated stylesheet and app cache versions to `20260904c` and `20260904a`. Validate the Hero canvas visually at desktop and mobile widths before committing or publishing.

## 2026-09-04 Homepage Hero artwork replacement

- Replaced the interactive Hero canvas with the user-supplied `assets/images/original/Hero_image.png` watercolour illustration. It fills the same left-side Hero frame with a restrained bottom gradient; the original portrait image and all other assets remain preserved.
- Removed the no-longer-rendered canvas interaction code and styles. Updated stylesheet and app cache versions to `20260904d` and `20260904b`. Visually verify the illustration crop at desktop and mobile widths before committing or publishing.

## 2026-09-04 Text-led homepage Hero

- Removed the Hero's left-side image frame and changed the Hero to one text-led column, so its copy begins from the left edge of the card. The `Hero_image.png` and prior portrait asset remain on disk for possible future use.
- Kept the Hero card's border, height at desktop, internal spacing, and restrained thread decoration. Updated stylesheet and app cache versions to `20260904e` and `20260904c`. Visually verify all locale Hero line breaks at desktop and mobile widths before committing or publishing.

## 2026-09-04 Hero right-side connection network

- Added a desktop-only, language-independent interaction in the open right side of the text-led Hero: four abstract nodes, sparse links, and two paper/card outlines. It stays visually quiet by default; hovering a node increases its opacity/scale slightly and fades in associated links.
- Fine-pointer movement applies only a 2–8px parallax to the network. It resets smoothly on pointer exit. The network is hidden on mobile and disabled when reduced motion is requested, leaving the Hero text undisturbed.
- Updated stylesheet and app cache versions to `20260904f` and `20260904d`. Visually verify desktop overlap with the longest three-locale headings before committing or publishing.

## 2026-09-04 Hero connection current

- Added a one-time, staggered connection-current animation to the Hero network. Each link uses normalized SVG path length so a short illuminated segment scans across it over 1.6 seconds before returning to the baseline line; it does not loop.
- Existing hover-related link fades remain intact. Reduced-motion settings suppress the visible sweep. Updated stylesheet and app cache versions to `20260904g` and `20260904e`; visually verify the sweep feels restrained rather than like a loading indicator before committing or publishing.

## 2026-09-04 Hero blurred-colour background

- Applied the user-supplied `vivid-blurred-colorful-wallpaper-background_58702-3897.avif` as a low-opacity Hero-card backdrop. A warm paper gradient is layered over it, strongest behind the left-side copy and lighter toward the right-side interaction, preserving text contrast and the portfolio's restrained tone.
- Updated the stylesheet cache version to `20260904h`. Visually verify the background's perceived saturation and copy contrast at desktop and mobile widths before committing or publishing.

## 2026-09-04 Traditional Chinese Hero two-line lock

- The Traditional Chinese Hero heading already has an explicit break after the comma. Removed its desktop width cap and prevented intra-line wrapping, keeping the headline to the supplied two lines. Narrow screens at 820px and below resume natural wrapping to prevent overflow.
- Updated the stylesheet cache version to `20260904i`. Visually verify the Chinese Hero at the desktop-to-tablet breakpoint before committing or publishing.

## 2026-09-04 Animated Hero smooth-gradient background

- Replaced the prior Hero backdrop with the user-supplied blue/pink/purple smooth-gradient reference image `pngtree-an-elegant-and-modern-abstract-background-design-featuring-smooth-gradients-soft-image_17174062.jpg`. A warm readability overlay remains strongest behind left-side copy.
- The oversized background layer now drifts and scales slowly over 22 seconds with an ease-in-out alternate loop, creating ambient motion rather than a loading effect. Reduced-motion settings suppress the perceived movement. Updated the stylesheet cache version to `20260904j`; visually verify saturation and text contrast before committing or publishing.

## 2026-09-04 Hero connection current loop

- Changed the Hero connection-current from a one-time sequence to a continuous, staggered loop. Each line uses a 3.6-second cycle: approximately 1.4 seconds of an illuminated sweep, followed by a quiet baseline interval; the five delays prevent synchronized loading-style movement.
- Reduced-motion behavior remains protected. Updated the stylesheet cache version to `20260904k`; visually verify the cyclical effect remains subtle before committing or publishing.

## 2026-09-04 Hero palette-aligned gradient

- Replaced the blue/pink/purple reference-image backdrop with an animated CSS gradient derived from the existing portfolio palette: warm paper, sage, muted blue, and a restrained terracotta accent. The referenced background image remains preserved in assets but is no longer rendered.
- Retained the 22-second ambient drift and left-side readability wash, so the Hero background belongs to the site's visual system rather than competing with it. Updated the stylesheet cache version to `20260904l`; visually verify the new tone balance before committing or publishing.

## 2026-09-04 Hero gradient proportion refinement

- Corrected the Hero background's perceived scale by returning the gradient layer to the card bounds, replacing oversized elliptical colour fields with three smaller circular glows, and reducing their opacity. This avoids the cropped, enlarged-background appearance.
- Reduced the 22-second drift from 1.5% / 7.5% scale travel to 0.6% / 2.5% scale travel. Updated the stylesheet cache version to `20260904m`; visually verify the proportion and calmness before committing or publishing.

## 2026-09-04 Full Hero network background

- Removed the Hero gradient layer and the separate bottom wave. Expanded the Hero network to the full card width and added an ambient layer of low-contrast node paths behind the text, while retaining the stronger right-side nodes, cards, hover/parallax, and looping current interaction.
- The Hero background is now entirely the network diagram against the existing warm paper surface. Mobile continues to hide the decorative network for readability. Updated stylesheet and app cache versions to `20260904n` and `20260904f`; visually verify text/network balance at desktop widths before committing or publishing.

## 2026-09-04 Hero composition-paper grid

- Corrected the Hero-background interpretation: the full Hero card now uses an evenly spaced, low-contrast warm green square grid, inspired by composition paper.
- Returned the interactive node network to a compact right-side ornament. Its looping current, hover reveal, and mobile hiding behavior remain unchanged.
- Updated the stylesheet and application cache versions to `20260904o` and `20260904g`. Visual browser verification remains unavailable in this environment.

## 2026-09-04 English and Japanese Hero two-line headings

- Added explicit Hero heading breaks for English after `solve,` and Japanese after `見極め、`, matching the established Chinese two-line composition while retaining the supplied wording.
- Synchronized `content/portfolio.json` and the embedded fallback in `index.html`; updated both timestamps to `2026-09-04T20:10:00.000Z`. Validate desktop and narrow responsive layouts visually before committing or publishing.

## 2026-09-04 Editorial Hero composition trial

- Rebalanced the Hero into an editorial technical-note composition: reduced desktop height, copy padding, headline scale, CTA spacing, and the contrast/density of the composition-paper grid.
- Simplified the right-side interaction to one paper-outline card, three nodes, and three connections. It now occupies a compact lower-right area, rather than reading as a separate full-height illustration. The remaining node hover, parallax, and looping-current interactions are unchanged.
- Reduced English and Japanese Hero title scales slightly while retaining their explicit two-line breaks. Updated stylesheet and app cache versions to `20260904p` and `20260904h`; visual review remains required at desktop and mobile widths in all three locales.

## 2026-09-04 Hero first-screen proportion correction

- Restored the desktop Hero to a near full-viewport composition (`min(680px, available viewport height)`, minimum 580px). This keeps the About section from appearing prematurely in the initial viewport while preserving the compact internal typography and lower-right network composition.
- Updated the stylesheet cache version to `20260904q`. Visual review remains required at desktop and mobile widths before committing or publishing.

## 2026-09-04 Hero network aspect-ratio correction

- Reframed the right-side network SVG from an unused square canvas to a tight horizontal viewBox around its card, nodes, and links. This removes the disproportionate empty space that made the graphic appear to float in the lower-right corner.
- Sized the network as a horizontal annotation and positioned it in the same vertical reading band as the Hero heading, body, and CTA. Updated stylesheet and application cache versions to `20260904r` and `20260904i`; visual review remains required before committing or publishing.

## 2026-09-04 Hero architecture-diagram trial

- Replaced the generic right-side node network with a language-independent architecture diagram that moves diagonally from distributed input signals, through a decision frame, into a modular system. It supports the Hero promise of turning answers into sustainable architecture without embedding fixed locale-specific text.
- The visual uses three paper-outline cards, three interactive nodes, and two relationship lines. Fine-pointer parallax, node hover reveals, the restrained looping current, mobile hiding, and reduced-motion behavior remain in place.
- Updated stylesheet and application cache versions to `20260904s` and `20260904j`; visual review remains required before committing or publishing.

## 2026-09-04 Hero building-construction animation trial

- Replaced the right-side architecture diagram with a minimal, language-independent line building. It draws in stages: ground, foundation, frame, floors, roof, and modules, then holds as a completed structure with a subtle completion mark.
- The construction sequence plays once over about three seconds when the homepage renders; it deliberately does not loop like a loading indicator. Mobile hides the decoration, and reduced-motion settings resolve the drawing immediately.
- Removed the now-unused node-network pointer interaction code and styles. Updated stylesheet and application cache versions to `20260904t` and `20260904k`; visual review remains required before committing or publishing.

## 2026-09-04 Hero mosaic-glass product trial

- Replaced the line-building with a right-edge mosaic-glass treatment that erodes irregularly toward the copy area. Behind the translucent glass sits a language-neutral square product card with abstract interface modules; no fixed Chinese, English, or Japanese text is embedded in the visual.
- Added only a very slow, low-contrast glass shimmer. It avoids parallax, 3D tilt, particle effects, and aggressive motion. Mobile hides the entire ornament and reduced-motion settings resolve animations immediately.
- Updated stylesheet and application cache versions to `20260904u` and `20260904l`; visual review remains required before committing or publishing.

## 2026-09-04 Hero mosaic-glass reference refinement

- Used the user-supplied `photo-1783626749533-69a9baf328be.avif` as a visual reference only. Its dense, rounded, reflective modular tiles informed a new deep-sage and warm-paper mosaic display window; the source image itself is not rendered or altered.
- Replaced the scattered erosion tiles with a regular 7×9 tiled field. A translucent central 3×3 window leaves the abstract square product visible behind the mosaic, creating a product-display rather than a generic glass effect.
- Updated stylesheet and application cache versions to `20260904v` and `20260904m`; visual review remains required before committing or publishing.

## 2026-09-04 Hero mosaic-glass scale correction

- Corrected the over-dominant reference refinement, which rendered as an excessively dark full-height panel. The right visual is now a compact 5×6 display window with lighter deep-sage, paper, and glass tones, rather than a full-width black mosaic wall.
- Kept the central translucent product window but reduced its visual weight and the ornament’s overall width. Updated stylesheet and application cache versions to `20260904w` and `20260904n`; visual review remains required before committing or publishing.

## 2026-09-04 Text-only Hero direction

- Removed the entire right-side Hero ornament, including the compact mosaic-glass product display and all related CSS. The Hero is now intentionally text-led: the two-line heading, supporting sentence, CTA, and low-contrast composition-paper grid are its only visual hierarchy.
- Updated stylesheet and application cache versions to `20260904x` and `20260904o`; visual review remains required before committing or publishing.

## 2026-09-04 Centered text-only Hero

- Centered the Hero copy column, heading, supporting text, and CTA buttons horizontally within the text-only card. Existing explicit two-line Hero breaks for Traditional Chinese, English, and Japanese remain unchanged.
- Updated the stylesheet cache version to `20260904y`; visual review remains required before committing or publishing.

## 2026-09-04 Hero contact-button removal

- Removed only the Hero’s secondary contact button in all locales. The primary selected-work button remains centered; the header contact link, homepage contact CTA, case-study CTA, and email links are unchanged.
- Updated the application cache version to `20260904p`; visual review remains required before committing or publishing.

## 2026-09-04 Three-language Hero two-line desktop lock

- Locked the desktop English and Japanese Hero headings to their existing explicit two-line content breaks by widening their available heading measure and reducing their display scales. Traditional Chinese already uses the same two-line lock.
- At 820px and below, all locales resume natural wrapping so the long English and Japanese second lines remain readable on narrow screens. Updated the stylesheet cache version to `20260904z`; visual review remains required before committing or publishing.

## 2026-09-04 Text-only Hero scale refinement

- Increased the centered Hero headline and supporting subtitle scales to give the text-only composition more presence. Each locale’s title scale was raised within its available two-line desktop measure; English and Japanese retain their no-wrap desktop line lock.
- Updated the stylesheet cache version to `20260904aa`; visual review remains required before committing or publishing.

## 2026-09-04 English and Japanese Hero scale increase

- Increased only the English and Japanese Hero headline scales by a small additional step, while retaining their desktop two-line no-wrap behavior. Traditional Chinese Hero typography is unchanged.
- Updated the stylesheet cache version to `20260904ab`; visual review remains required before committing or publishing.

## 2026-09-04 Grid language extension trial

- Extended the Hero’s composition-paper grid as a restrained system detail rather than a site-wide background: a very low-contrast 36px grid now sits in the homepage contact panel, and existing case-study system visuals use a project-accent-tinted 28px grid.
- Added a tiny 8px grid texture inside project-card index circles only; project images, card order, and About remain unchanged. Updated the stylesheet cache version to `20260904ac`; visual review remains required before committing or publishing.

## 2026-09-04 People-free About workshop image

- Created a non-destructive image edit from `assets/images/original/workshop.jpg` using the built-in image generation edit flow. The new `assets/images/original/workshop-no-people.png` preserves the warm workshop, Post-it wall, and organic image frame while removing the person, arms, hands, and clothing.
- Updated the shared About image reference and the English, Traditional Chinese, and Japanese About image alternative text in both `content/portfolio.json` and the embedded `index.html` fallback. The original `workshop.jpg` is preserved unchanged. Both content timestamps are `2026-09-04T20:40:00.000Z`.
- Validation and visual review remain required before committing or publishing.

## 2026-09-04 Traditional Chinese About opening refinement

- Removed the opening clause `不管面對什麼產品，我的做法都一樣：` from the Traditional Chinese About body, so the paragraph begins directly with the research-led approach. English and Japanese copy are unchanged.
- Synchronized `content/portfolio.json` and the embedded fallback in `index.html`; both content timestamps are `2026-09-04T21:00:00.000Z`. Validation and visual review remain required before committing or publishing.

## 2026-09-04 Ferqo decision and architecture visual restoration

- Restored the `impact-effort` and `architecture-map` visual renderers and their responsive styles from the user-designated canonical `../publish-repo` source. The Ferqo 3-1 MVP decision matrix and 3-2 four-layer system-boundary diagram were present in content but invisible because this clean repo renderer had no support for their visual types.
- Kept the current clean repo’s homepage, contact email, and Ferqo copy intact; only missing renderer support and matching styles were ported. Updated stylesheet and application cache versions to `20260904ad` and `20260904q`.

## 2026-09-05 Traditional Chinese homepage v3 integration

- Reframed the homepage sequence as Method → Selected work → What teams get → Contact. Removed the duplicate Strengths section from the rendered homepage, primary navigation, and homepage structure contract; legacy Strengths copy remains in data only and is not rendered.
- Updated Traditional Chinese Hero, Method, Selected Work, team-value, and CTA copy. The Method conclusion now credits the team’s ongoing ability to progress, maintain, and evolve the work without implying the designer’s absence. Preserved the Hero’s existing two-line headline.
- Reordered homepage work chronologically from newest to oldest: OneSleeve, Insurance SaaS, EdTech, Ferqo. Synchronized the visible 01–04 project indexes across English, Traditional Chinese, and Japanese; English and Japanese copy itself was not rewritten.
- Updated Traditional Chinese project-card copy for the approved editorial direction, while retaining evidence boundaries: Insurance outcomes remain qualified as business feedback and internal comparisons; Ferqo remains clearly described as directional usability evidence rather than market performance.
- Synchronized `content/portfolio.json` and the embedded `index.html` fallback. Updated both content timestamps to `2026-09-05T00:00:00.000Z` and the application cache version to `20260905a`.
- Validation passed: `git diff --check`, `node --check app.js`, `node --check admin/app.js`, `jq empty content/portfolio.json`, exact served/fallback JSON comparison, and project-order/index assertions for every locale. Visual desktop and mobile review remains the next safe action before commit or publication.

## 2026-09-05 Homepage copy v3 locale alignment

- Recorded the user-approved Traditional Chinese homepage copy as `docs/homepage-copy-v3-zh-Hant.md`. It is the editorial source of truth for the current homepage direction.
- Rewrote the English and Japanese Homepage Hero, Method, Selected Work, team-value, and CTA content from that source, maintaining the same Method → Work → Team value → Contact structure. The translations are editorial rather than literal, while retaining the same claims and tone.
- Aligned English and Japanese homepage card summaries and key achievements with the revised Traditional Chinese wording. Insurance remains qualified as sales feedback and internal project comparison; Ferqo remains directional usability evidence rather than market performance. Corrected the Traditional Chinese Ferqo card to retain the source-qualified approximately 40-to-80 SUS range.
- Synchronized `content/portfolio.json` and the embedded fallback; both timestamps are `2026-09-05T01:00:00.000Z`. Validation passed: `git diff --check`, `node --check app.js`, `node --check admin/app.js`, `jq empty content/portfolio.json`, and exact served/fallback JSON comparison. Desktop and mobile visual review remains required before committing or publishing.

## 2026-09-06 Traditional Chinese homepage v4 refinements

- Applied the approved Traditional Chinese v4 editorial refinements only: clarified OneSleeve’s specific PM-and-design iteration outcome, changed the EdTech card to the supplied UXR wording and `8+` notation, and adjusted the team-value decision-speed sentence. The revised Chinese copy contains no em dash.
- Kept the Insurance outcome’s sales-feedback and internal-comparison qualifier, and Ferqo’s directional-usability rather than market-performance qualifier. English and Japanese copy remain unchanged in this pass.
- Synchronized `content/portfolio.json`, the embedded fallback, and the Traditional Chinese copy reference. Both content timestamps are `2026-09-06T00:00:00.000Z`. Run standard validation and visual review before committing or publishing.

## 2026-09-07 English and Japanese homepage v4 integration

- Applied the approved English v4 homepage copy: My Process label, revised Method and team-value language, updated CTA, and precise OneSleeve iteration wording. Insurance retains its sales-feedback and internal-project-comparison qualifier; Ferqo retains approximate figures and its directional-usability evidence boundary.
- Applied the approved Japanese v4 homepage copy across Hero, Method, Work, team value, CTA, and project cards. Japanese case-card narration uses a consistent plain style; CTA remains politely phrased. Refined the Ferqo boundary to state that its evidence does not establish market results.
- Synchronized `content/portfolio.json` and the embedded fallback. Both content timestamps are `2026-09-07T00:00:00.000Z`. Run standard validation and visual review before committing or publishing.

## 2026-09-07 OneSleeve outcome wording

- Replaced the opaque OneSleeve outcome value `替換變數` with the user-approved benefit `不用從零開始`. Its accompanying label explains the mechanism: new product lines can swap brand variables and build directly on the existing system. English and Japanese outcome copy was aligned to the same meaning.
- Synchronized `content/portfolio.json` and the embedded fallback; both timestamps are `2026-09-07T02:00:00.000Z`. Run standard validation and visual review before committing or publishing.

## 2026-09-07 Ferqo outcome wording

- Replaced the ambiguous Ferqo outcome value `已驗證` with `方向性驗證`. The label now clearly states that the room- and scenario-centric experience direction was validated, while the product did not launch. English and Japanese outcome wording was aligned to the same evidence boundary.
- Synchronized `content/portfolio.json` and the embedded fallback; both timestamps are `2026-09-07T03:00:00.000Z`. Run standard validation and visual review before committing or publishing.

## 2026-09-08 Traditional Chinese OneSleeve case-study restructuring

- Reworked the Traditional Chinese OneSleeve case narrative around problem reframing, team needs, option-based strategy selection, architecture, production workflow, adoption, and results. Added a four-criterion decision frame and restrained rejected/selected states with trade-off tags for the three strategy options.
- Moved `onesleeveResult1.png` from the final result gallery to the Pattern Sync subsection, immediately after `onesleeveCooperation.png`, where it documents the shared Workspace, components, states, and Patterns.
- Replaced the third Traditional Chinese OneSleeve outcome with the user-supplied approximately 80% shared component-and-Pattern coverage result. The section now records that iteration and build-time figures are internal measurements and coverage is a post-system inventory result.
- Added generic, data-driven case-point status and tag rendering in `app.js` plus restrained matching styles. The Traditional Chinese content and embedded fallback are synchronized at `2026-09-08T00:00:00.000Z`; stylesheet and application cache versions are both `20260908a`.
- Validation passed: `git diff --check`, `node --check app.js`, `node --check admin/app.js`, `jq empty content/portfolio.json`, exact served/fallback JSON comparison, option-status assertions, and Workspace-placement assertions. English and Japanese OneSleeve narrative copy intentionally remains pending translation and editorial review; do not publish this as a fully aligned three-locale release until that work is complete.

## 2026-09-08 English OneSleeve case-study integration

- Applied the English OneSleeve narrative to match the new Chinese case-study structure: problem reframing, team needs, four decision criteria, three marked strategy options, architecture, production workflow, adoption, and results.
- Kept the dual Standard/Contextual naming logic in the technical subsections. Reworded the PM adoption claim to supported selected screen adjustments rather than unsupported full prototyping autonomy, and softened the naming-system result into a shared implementation and maintenance basis.
- Replaced the English third outcome with approximately 80% of existing screen needs supported by shared components and Patterns. Removed em dashes from the English OneSleeve content updated in this pass.
- Synchronized `content/portfolio.json` and the embedded fallback at `2026-09-08T01:00:00.000Z`. Japanese OneSleeve content remains pending translation and editorial review; do not publish as a fully aligned three-locale release until it is updated.

## 2026-09-08 Japanese OneSleeve case-study integration

- Applied the Japanese OneSleeve narrative to the same seven-section structure now used by Traditional Chinese and English. Replaced direct-translation phrasing with natural product-design Japanese, including `プロダクトをつくり、届ける仕組み`, `開発・提供の効率`, and `統合と整理`.
- Preserved the dual Standard/Contextual naming rule, kept stakeholder claims aligned with the evidence-qualified English version, and moved the shared Workspace image into the Pattern Sync subsection. The third outcome is now the approximately 80% existing-screen-needs coverage result.
- Removed em dashes from the updated Japanese OneSleeve content. Synchronized `content/portfolio.json` and the embedded fallback at `2026-09-08T02:00:00.000Z`; three locale narratives now share the same section and outcome structure.

## 2026-09-08 OneSleeve heading-wrap refinement

- Disabled balanced heading wrapping only inside the OneSleeve case page. Its longer Chinese, English, and Japanese section, subsection, and option-card headings now follow natural reading order with `text-wrap: pretty`, preventing semantically awkward balanced fragments.
- Updated the stylesheet cache version to `20260908b`. A visual review across desktop and mobile widths remains the next safe action before publishing this CSS-only refinement.

## 2026-09-08 Strategy-card tag alignment

- Made insight cards flex columns and anchored their tag groups to the bottom edge. The three OneSleeve strategy options now keep equal tag placement and spacing even when their titles and explanations have different lengths.
- Updated the stylesheet cache version to `20260908c`. Run a desktop and mobile visual review before publishing this CSS-only refinement.

## 2026-09-08 OneSleeve comparison visual

- Added the user-supplied `assets/images/original/Compare.png` as the wide, zoomable example visual in OneSleeve subsection 4-3 for all three locales. It documents how shared components and Token mappings connect the dark and light product interfaces.
- Preserved the original 6320×1528 asset without generative editing, so interface text and component mappings remain accurate. The asset is intentionally wide and should be visually reviewed at desktop and mobile widths before release.
- Synchronized `content/portfolio.json` and the embedded fallback at `2026-09-08T03:00:00.000Z`.

## 2026-09-08 OneSleeve RTL visual and subsection numbering

- Corrected the component-workflow subsection titles from 4-1 through 4-3 to 5-1 through 5-3 in all three OneSleeve locales.
- Added the user-supplied `assets/images/original/RTL.png` as the wide, zoomable visual under 5-3 in each locale, documenting bidirectional behavior within the shared component structure.
- Synchronized `content/portfolio.json` and the embedded fallback at `2026-09-08T04:00:00.000Z`. The new user-supplied asset remains untracked until an explicitly requested release commit.

## 2026-09-08 Insurance SaaS decision framing

- Reframed section 4 of the Insurance SaaS case study in English, Traditional Chinese, and Japanese from implementation language to decision language. The updated labels are `Design Decisions`, `設計決策`, and `設計判断`; each heading now makes the compliance and experience trade-offs explicit.
- Updated the adjacent cross-reference note in each locale to match the renamed section. All section body copy, media, figures, and evidence claims remain unchanged.
- Synchronized `content/portfolio.json` and the embedded fallback at `2026-09-08T05:00:00.000Z`. Next safe action: run content and JavaScript validation, then review the longer three-language titles at desktop and mobile widths before release.

## 2026-09-08 Case snapshot heading hierarchy

- Replaced the inline middle-dot separator between every case-study project name and subtitle in the snapshot heading with two deliberate type levels. This fixes the awkward Insurance SaaS title/subtitle punctuation and prevents the browser from balancing both phrases as one line.
- Snapshot headings now use `text-wrap: pretty`; project names remain intact while subtitles wrap naturally only when the viewport requires it. Updated the stylesheet and application cache versions to `20260908d` and `20260908b`.

## 2026-09-08 Ferqo Widget visual scale

- Changed the Ferqo Widget visual in subsection 4-3 from a half-column layout to the centered compact layout in all three locales. Its 16:10 source had no paired image, which left a misleading empty half-column and made the lock-screen UI too small to inspect.
- The source image, caption, and all copy are unchanged. Synchronized `content/portfolio.json` and the embedded fallback at `2026-09-08T06:00:00.000Z`; review the compact image size on desktop and mobile before release.

## 2026-09-08 Ferqo 4-3 media width alignment

- Changed the Ferqo Widget visual from centered compact to full-width so both visuals in subsection 4-3 now use the same width. The asset, captions, and copy remain unchanged in all three locales.
- Synchronized `content/portfolio.json` and the embedded fallback at `2026-09-08T07:00:00.000Z`; verify the two full-width visuals' vertical rhythm before release.

## 2026-09-08 Homepage Hero subtitle wrapping

- Changed only the homepage Hero subtitle from the global `pretty` wrapping behavior to `balance`, so desktop subtitle lines distribute more evenly across Traditional Chinese, English, and Japanese. Copy, size, and responsive width remain unchanged; mobile can still wrap naturally.
- Updated the stylesheet cache version to `20260908e`. Review all three homepage Hero subtitles at desktop and mobile widths before release.

## 2026-09-08 Traditional Chinese Hero subtitle punctuation break

- Added one explicit desktop-only line break after `問題，` in the Traditional Chinese Hero subtitle, keeping the punctuation at the end of the first semantic line rather than leaving following text on that line. The mobile breakpoint suppresses this forced break and preserves natural responsive wrapping.
- Added the narrowly scoped `formatHeroBody` renderer for safe line-break handling, synchronized `content/portfolio.json` with the embedded fallback at `2026-09-08T08:00:00.000Z`, and updated stylesheet/application cache versions to `20260908f` and `20260908c`.

## 2026-09-08 Case-page transition trial

- Added an intentionally restrained View Transitions API treatment for selected project cards and case pages. The selected card cover and matching case cover share a per-project transition name, while the route root uses a 220–360ms soft fade. The same path applies when a related case is selected or when returning to the work section.
- Case routes now use `history.pushState` plus the existing renderer when a supported browser initiates the navigation, preserving URLs and browser history. Hash navigation, unsupported browsers, and reduced-motion preferences retain the existing immediate behavior.
- Updated stylesheet/application cache versions to `20260908g` and `20260908d`. Visual QA remains required in a View Transitions-capable desktop browser, including all project links, back-to-work, and browser back/forward behavior.

## State of the old working copy

At backup time, the old working copy was on `codex/insurance-heading-unification` at `25817e8d6c0419c0c6f964a5bcd6bc05c78a98ec`. Relative to the locally recorded `origin/main`, it was ahead 4 and behind 8.

Tracked changes in the old working copy before handoff documentation was added:

- `content/portfolio.json`
- `index.html`
- `styles.css`

Untracked files at that time:

- `.DS_Store`
- `docs/ferqo-copy-for-claude.md`

The pre-handoff tracked diff contained 397 insertions and 349 deletions. Do not overwrite this clean clone with the entire old directory; review and port intended changes selectively.

## What previous AI work did

### Committed on the divergent old branch

Old-branch commit `25817e8` updated the Ferqo case study and created the first handoff log. It:

- Reworked the English, Traditional Chinese, and Japanese business narrative around protocol/vendor-roadmap dependency, the universal-app competitive trap, and a research-led direction.
- Restored all four impact/effort quadrants, including an explicit low-impact/low-effort “not prioritized” state.
- Preserved existing interview materials, source images, captions, image-card styling, and spacing.
- Avoided unsupported A/B-test, conversion, adoption, retention, and launch claims.

### Later uncommitted editorial pass

The old working copy also contains later Ferqo refinements from 2026-08-28 through 2026-08-31:

- Revised titles, role wording, business framing, research narrative, product strategy, system layers, interaction decisions, validation language, and outcomes across all three locales.
- Clarified that interview participants and task-comparison participants were separate groups.
- Changed SUS presentation from an approximate `+30` improvement to approximately `40→80` where present.
- Added or refined the Premium Total-Solution positioning and executive-alignment narrative.
- Adjusted the impact/investment matrix axis styling, including a Traditional Chinese layout treatment.
- Added `docs/ferqo-copy-for-claude.md`, a 627-line analysis snapshot that may be stale because the source JSON changed later.

Do not assume every old-branch or uncommitted wording change is approved for release. Review claims, translations, and source support with the user.

## Known content synchronization risk

In the old working copy:

- `app.js` first parses JSON embedded in `index.html` under `[data-portfolio-content]`.
- It then fetches `content/portfolio.json` and uses it when the fetch succeeds.
- Hosted use normally sees the external JSON; direct-file previews or fetch failures see the embedded fallback.
- On 2026-09-02, the two old-copy datasets differed in 277 leaf fields, including all three Ferqo locales.
- Both still reported `updatedAt: 2026-08-24T00:00:00.000Z` despite later edits.

Before porting content, identify the user-approved canonical Ferqo wording. After porting, synchronize the external and embedded datasets and update the timestamp.

## Validation already performed on the old working copy

The old pre-handoff work passed:

- `git diff --check`
- `node --check app.js`
- `node --check admin/app.js`
- `jq empty content/portfolio.json`

These checks establish syntax and whitespace validity only. Repeat them in this clean clone after integration.

## Safe integration sequence

1. Keep the old working copy and frozen snapshot untouched while integrating.
2. Compare the clean baseline with the old branch and uncommitted diff.
3. Review Ferqo claims and three-locale wording with the user; decide which version is canonical.
4. Port only approved content and layout changes into this clone.
5. Synchronize `content/portfolio.json` and the embedded JSON in `index.html`.
6. Update `updatedAt`, relevant cache versions, and this handoff.
7. Run syntax checks and desktop/mobile visual QA for English, Traditional Chinese, and Japanese.
8. Review the final diff with the user.
9. Commit and publish only after explicit approval.

## Release constraints

- Preserve user-supplied images and captions unless replacement is explicitly requested.
- Keep all three locale versions aligned in meaning.
- Keep all four matrix quadrants and the explicit “not prioritized” state visible.
- Keep case-study image cards on white backgrounds with the established 24px outer padding and consistent spacing.
- Treat outcome figures as estimates unless the measurement source is documented.
- Avoid changing unrelated case studies or broad layout behavior when editing a single project.
- Do not add a CMS, authentication, image-upload backend, or other architecture expansion without explicit user approval.
