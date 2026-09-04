(() => {
  "use strict";

  const contentNode = document.querySelector("[data-portfolio-content]");
  let DATA = JSON.parse(contentNode.textContent);
  const APP = document.querySelector("#app");
  const PROGRESS = document.querySelector("[data-reading-progress]");
  const MENU_BUTTON = document.querySelector("[data-menu-button]");
  const HEADER_ACTIONS = document.querySelector("[data-header-actions]");
  const MODAL = document.querySelector("[data-image-modal]");
  const MODAL_IMAGE = document.querySelector("[data-modal-image]");
  const MODAL_CAPTION = document.querySelector("[data-modal-caption]");
  const MODAL_CLOSE = document.querySelector("[data-modal-close]");

  const STORAGE_KEY = "timothy-portfolio-locale";
  const state = {
    locale: readStoredLocale(),
    pendingHomeTarget: null,
    lastModalFocus: null,
    observer: null,
  };

  async function loadPortfolioData() {
    try {
      const response = await fetch("content/portfolio.json", { cache: "no-store" });
      if (!response.ok) throw new Error(`Portfolio content request failed (${response.status})`);
      const remoteData = await response.json();
      if (!remoteData?.content || !Array.isArray(remoteData?.projectOrder)) {
        throw new Error("Portfolio content has an invalid structure");
      }
      DATA = remoteData;
      if (!DATA.locales.includes(state.locale)) state.locale = DATA.defaultLocale;
    } catch (error) {
      console.warn("Using embedded portfolio content fallback.", error);
    }
  }

  function readStoredLocale() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return DATA.locales.includes(stored) ? stored : DATA.defaultLocale;
    } catch (_) {
      return DATA.defaultLocale;
    }
  }

  function storeLocale(locale) {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch (_) {
      // File previews may restrict storage; rendering still works for the session.
    }
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, character => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
    })[character]);
  }

  function formatHeading(value) {
    return escapeHtml(value).replace(/\n/g, "<br>");
  }

  function localeContent() {
    return DATA.content[state.locale] || DATA.content[DATA.defaultLocale];
  }

  function projectOrder() {
    return DATA.projectOrder;
  }

  function currentRoute() {
    const value = (location.hash || "#home").slice(1);
    const caseMatch = value.match(/^case\/([a-z0-9-]+)$/i);
    if (caseMatch && localeContent().projects[caseMatch[1]]) {
      return { type: "case", slug: caseMatch[1] };
    }
    return { type: "home" };
  }

  function projectHref(slug) {
    return `#case/${slug}`;
  }

  function updateHeader() {
    const { site } = localeContent();
    document.documentElement.lang = state.locale;
    document.documentElement.dataset.locale = state.locale;
    document.querySelector("[data-header-skip]").textContent = site.skip;
    document.querySelector("[data-nav-work]").textContent = site.nav.work;
    document.querySelector("[data-nav-about]").textContent = site.nav.about;
    document.querySelector("[data-nav-contact]").textContent = site.nav.contact;
    document.querySelector("[data-menu-label]").textContent = site.nav.menu;
    document.querySelector("[data-locale-switcher]").setAttribute("aria-label", site.localeLabel);
    document.querySelectorAll("button[data-locale]").forEach(button => {
      const active = button.dataset.locale === state.locale;
      button.setAttribute("aria-current", active ? "true" : "false");
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function projectCard(project) {
    const ui = localeContent().ui;
    const cardTitle = project.cardTitle || project.name;
    return `
      <a class="project-card reveal" style="--card-accent:${escapeHtml(project.accent)}" href="${projectHref(project.slug)}" data-project-link="${escapeHtml(project.slug)}">
        <div class="project-card__media">
          <img src="${escapeHtml(project.cover)}" alt="${escapeHtml(`${cardTitle} — ${project.subtitle}`)}" loading="lazy">
          <span class="project-card__index">${escapeHtml(project.index)}</span>
        </div>
        <div class="project-card__body">
          <div class="project-card__meta"><span>${escapeHtml(project.category)}</span><span>${escapeHtml(project.year)}</span></div>
          <h3 class="project-card__title">${escapeHtml(cardTitle)}</h3>
          <p class="project-card__subtitle">${escapeHtml(project.subtitle)}</p>
          <p class="project-card__description">${escapeHtml(project.cardDescription)}</p>
          <div class="project-card__achievement">
            <span>${escapeHtml(ui.keyAchievement)}</span>
            <strong>${escapeHtml(project.keyAchievement)}</strong>
          </div>
          <span class="project-card__cta">${escapeHtml(ui.viewCase)}</span>
        </div>
      </a>`;
  }

  function contactPanel() {
    const { home } = localeContent();
    return `
      <section class="section section-tight" id="contact" data-section="contact">
        <div class="shell contact-panel reveal">
          <div>
            <span class="eyebrow">${escapeHtml(home.contact.eyebrow)}</span>
            <h2>${escapeHtml(home.contact.title)}</h2>
            <p>${escapeHtml(home.contact.body)}</p>
            <a class="button button-primary" href="mailto:nekoking2010@gmail.com">${escapeHtml(home.contact.button)} ↗</a>
          </div>
          <div class="contact-details">
            <a class="contact-detail text-link" href="mailto:nekoking2010@gmail.com"><span aria-hidden="true">✉</span><span>nekoking2010@gmail.com</span></a>
            <div class="contact-detail"><span aria-hidden="true">◎</span><span>${escapeHtml(home.contact.availability)}</span></div>
          </div>
        </div>
      </section>`;
  }

  function footer() {
    const { site } = localeContent();
    return `
      <footer class="site-footer">
        <div class="shell footer-inner">
          <span>© ${new Date().getFullYear()} Timothy Lau. ${escapeHtml(site.footer)}</span>
          <a class="text-link" href="#home" data-home-target="hero">↑ ${escapeHtml(site.nav.about)}</a>
        </div>
      </footer>`;
  }

  function renderHome() {
    const { home, projects } = localeContent();
    document.title = localeContent().site.browserTitle;
    document.body.classList.remove("case-view");
    PROGRESS.style.transform = "scaleX(0)";

    APP.innerHTML = `
      <div data-page="home">
        <section class="hero-section" id="hero" data-section="hero">
          <div class="shell hero-shell">
            <div class="hero-copy">
              <span class="eyebrow reveal">${escapeHtml(home.hero.eyebrow)}</span>
              <h1 class="reveal">${formatHeading(home.hero.titleBefore)} <span class="accent">${formatHeading(home.hero.titleAccent)}</span></h1>
              <p class="reveal">${escapeHtml(home.hero.body)}</p>
              <div class="hero-actions reveal">
                <a class="button button-primary" href="#home" data-home-target="work">${escapeHtml(home.hero.primary)}</a>
              </div>
            </div>
          </div>
        </section>

        <section class="section section-divider" id="about" data-section="about">
          <div class="shell about-layout">
            <figure class="about-media reveal"><img src="${escapeHtml(DATA.sharedAssets.workshop)}" alt="${escapeHtml(home.about.imageAlt)}" loading="lazy"></figure>
            <div class="about-copy">
              <span class="eyebrow reveal">${escapeHtml(home.about.eyebrow)}</span>
              <h2 class="reveal">${formatHeading(home.about.titleBefore)} <span class="accent">${formatHeading(home.about.titleAccent)}</span></h2>
              <p class="reveal">${escapeHtml(home.about.body)}</p>
              <div class="principle-grid reveal">
                ${home.about.principles.map((item, index) => `
                  <article class="principle-card"><span class="principle-icon">${["◉", "⇄", "⌘"][index]}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></article>`).join("")}
              </div>
              ${home.about.backgroundFacts ? `<p class="reveal">${escapeHtml(home.about.backgroundFacts)}</p>` : ""}
            </div>
          </div>
        </section>

        <section class="section section-divider" id="work" data-section="work">
          <div class="shell">
            <header class="section-header reveal"><div><span class="eyebrow">${escapeHtml(home.work.eyebrow)}</span><h2>${formatHeading(home.work.title)}</h2></div><p>${escapeHtml(home.work.body)}</p></header>
            <div class="project-grid">${projectOrder().map(slug => projectCard(projects[slug])).join("")}</div>
          </div>
        </section>

        <section class="section section-divider" data-section="team-value">
          <div class="shell">
            <header class="section-header reveal"><div><span class="eyebrow">${escapeHtml(home.teamValue.eyebrow)}</span><h2>${escapeHtml(home.teamValue.title)}</h2></div></header>
            <div class="team-value-grid">${home.teamValue.items.map(item => `<article class="team-value-card reveal"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></article>`).join("")}</div>
          </div>
        </section>

        ${contactPanel()}
        ${footer()}
      </div>`;
  }

  function renderMedia(media, location = "section") {
    if (!media || !media.length) return "";
    return `<div class="media-gallery" data-media-location="${escapeHtml(location)}">${media.map(item => `
      <figure class="media-card reveal" data-layout="${escapeHtml(item.layout || "wide")}" data-frame-ratio="${escapeHtml(item.frameRatio || "auto")}" data-zoom-src="${escapeHtml(item.asset)}" data-zoom-caption="${escapeHtml(item.caption)}" tabindex="0" role="button" aria-label="${escapeHtml(localeContent().ui.openImage)}">
        <div class="media-card__visual"><img src="${escapeHtml(item.asset)}" alt="${escapeHtml(item.alt || item.caption)}" loading="lazy"></div>
        <figcaption>${escapeHtml(item.caption)}</figcaption>
      </figure>`).join("")}</div>`;
  }

  function renderSystemVisualHeader(visual) {
    return `
      <figcaption class="system-visual__header">
        ${visual.eyebrow ? `<span>${escapeHtml(visual.eyebrow)}</span>` : ""}
        <strong>${escapeHtml(visual.title || "")}</strong>
        ${visual.description ? `<p>${escapeHtml(visual.description)}</p>` : ""}
      </figcaption>`;
  }

  function renderSystemVisual(visual, inlineMarkup = "") {
    if (!visual?.type) return "";

    if (visual.type === "research-synthesis") {
      const icons = ["↗", "◇", "⌘"];
      return `
        <figure class="system-visual system-visual--research reveal" data-visual-type="research-synthesis">
          ${renderSystemVisualHeader(visual)}
          <div class="research-map">
            <div class="research-map__sources">
              ${(visual.sources || []).map((source, index) => `
                <article class="research-source">
                  <span class="research-source__icon" aria-hidden="true">${icons[index % icons.length]}</span>
                  <strong>${escapeHtml(source.title)}</strong>
                  <span>${escapeHtml(source.meta)}</span>
                </article>`).join("")}
            </div>
            <div class="system-visual__connector"><span>${escapeHtml(visual.method || "")}</span><i aria-hidden="true">↓</i></div>
            ${inlineMarkup ? `<div class="research-map__findings">${inlineMarkup}</div>` : `
              <article class="research-map__result">
                <span>${escapeHtml(visual.resultLabel || "")}</span>
                <strong>${escapeHtml(visual.resultTitle || "")}</strong>
                <p>${escapeHtml(visual.resultText || "")}</p>
              </article>`}
          </div>
          ${visual.note ? `<p class="system-visual__note">${escapeHtml(visual.note)}</p>` : ""}
        </figure>`;
    }

    if (visual.type === "boundary-map") {
      return `
        <figure class="system-visual system-visual--boundary reveal" data-visual-type="boundary-map">
          ${renderSystemVisualHeader(visual)}
          <div class="boundary-map">
            ${(visual.columns || []).map((column, index) => `
              <article class="boundary-column" data-tone="${index === 0 ? "fixed" : "flexible"}">
                <span>${escapeHtml(column.eyebrow || "")}</span>
                <h4>${escapeHtml(column.title || "")}</h4>
                <ul>${(column.items || []).map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
              </article>`).join("")}
          </div>
          <div class="system-visual__connector"><span>${escapeHtml(visual.connector || "")}</span><i aria-hidden="true">↓</i></div>
          <article class="boundary-result">
            <strong>${escapeHtml(visual.resultTitle || "")}</strong>
            <span>${escapeHtml(visual.resultText || "")}</span>
          </article>
        </figure>`;
    }

    if (visual.type === "architecture-map") {
      return `
        <figure class="system-visual system-visual--architecture reveal" data-visual-type="architecture-map">
          ${renderSystemVisualHeader(visual)}
          <div class="architecture-map">
            ${(visual.layers || []).map((layer, index) => `
              ${index ? `<span class="architecture-map__arrow" aria-hidden="true">→</span>` : ""}
              <article class="architecture-layer">
                <span>${escapeHtml(layer.eyebrow || String(index + 1).padStart(2, "0"))}</span>
                <h4>${escapeHtml(layer.title || "")}</h4>
                ${layer.description ? `<p>${escapeHtml(layer.description)}</p>` : ""}
                <ul>${(layer.items || []).map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
              </article>`).join("")}
          </div>
          ${visual.focus ? `
            <article class="architecture-focus">
              <span>${escapeHtml(visual.focus.label || "")}</span>
              <strong>${escapeHtml(visual.focus.title || "")}</strong>
              <p>${escapeHtml(visual.focus.text || "")}</p>
            </article>` : ""}
          ${visual.note ? `<p class="system-visual__note">${escapeHtml(visual.note)}</p>` : ""}
        </figure>`;
    }

    if (visual.type === "impact-effort") {
      return `
        <figure class="system-visual system-visual--impact reveal" data-visual-type="impact-effort">
          ${renderSystemVisualHeader(visual)}
          <div class="impact-effort">
            <div class="impact-effort__y-axis" aria-hidden="true">
              <span>${escapeHtml(visual.yHighLabel || "")}</span>
              <strong>${escapeHtml(visual.yLabel || "")}</strong>
              <span>${escapeHtml(visual.yLowLabel || "")}</span>
            </div>
            <div class="impact-effort__grid">
              ${(visual.quadrants || []).map(quadrant => `
                <article class="impact-quadrant" data-position="${escapeHtml(quadrant.position || "")}" data-tone="${escapeHtml(quadrant.tone || "neutral")}">
                  <span>${escapeHtml(quadrant.kicker || "")}</span>
                  <h4>${escapeHtml(quadrant.title || "")}</h4>
                  ${quadrant.text ? `<p>${escapeHtml(quadrant.text)}</p>` : ""}
                  ${(quadrant.items || []).length ? `<ul>${quadrant.items.map(item => `
                    <li>
                      <strong>${escapeHtml(item.title || "")}</strong>
                      ${item.text ? `<span>${escapeHtml(item.text)}</span>` : ""}
                    </li>`).join("")}</ul>` : ""}
                </article>`).join("")}
            </div>
            <div class="impact-effort__x-axis">
              <span>${escapeHtml(visual.xLowLabel || "")}</span>
              <strong>${escapeHtml(visual.xLabel || "")}</strong>
              <span>${escapeHtml(visual.xHighLabel || "")}</span>
            </div>
          </div>
          ${visual.note ? `<p class="system-visual__note">${escapeHtml(visual.note)}</p>` : ""}
        </figure>`;
    }

    if (visual.type === "flow-comparison") {
      const panels = [visual.before, visual.after].filter(Boolean);
      return `
        <figure class="system-visual system-visual--flow reveal" data-visual-type="flow-comparison">
          ${renderSystemVisualHeader(visual)}
          <div class="flow-comparison">
            ${panels.map((panel, panelIndex) => `
              ${panelIndex ? `<span class="flow-comparison__bridge" aria-hidden="true">→</span>` : ""}
              <article class="flow-panel" data-state="${panelIndex ? "after" : "before"}">
                <span>${escapeHtml(panel.label || "")}</span>
                <h4>${escapeHtml(panel.title || "")}</h4>
                <ol>${(panel.steps || []).map((step, index) => `<li><b>${String(index + 1).padStart(2, "0")}</b><span>${escapeHtml(step)}</span></li>`).join("")}</ol>
              </article>`).join("")}
          </div>
          ${visual.note ? `<p class="system-visual__note">${escapeHtml(visual.note)}</p>` : ""}
        </figure>`;
    }

    if (visual.type === "outcome-shift") {
      return `
        <figure class="system-visual system-visual--outcomes reveal" data-visual-type="outcome-shift">
          ${renderSystemVisualHeader(visual)}
          <div class="outcome-shift">
            <div class="outcome-shift__labels"><span>${escapeHtml(visual.beforeLabel || "")}</span><span>${escapeHtml(visual.afterLabel || "")}</span></div>
            ${(visual.rows || []).map(row => `
              <article class="outcome-row">
                <strong>${escapeHtml(row.label || "")}</strong>
                <span>${escapeHtml(row.before || "")}</span>
                <i aria-hidden="true">→</i>
                <b>${escapeHtml(row.after || "")}</b>
              </article>`).join("")}
          </div>
          ${visual.result ? `<div class="outcome-shift__result">${escapeHtml(visual.result)}</div>` : ""}
          ${visual.note ? `<p class="system-visual__note">${escapeHtml(visual.note)}</p>` : ""}
        </figure>`;
    }

    return "";
  }

  function renderSubsections(subsections) {
    if (!subsections?.length) return "";
    return `<div class="case-subsections">${subsections.map(subsection => `
      <section class="case-subsection reveal">
        <h3>${escapeHtml(subsection.title || "")}</h3>
        ${(subsection.body || []).map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        ${renderSystemVisual(subsection.visual)}
        ${renderMedia(subsection.media, "subsection")}
      </section>`).join("")}</div>`;
  }

  function renderSection(section) {
    const sectionOrder = section.order ?? section.number ?? "";
    const pointsMarkup = section.points?.length ? `
      <div class="case-points">
        ${section.pointsEyebrow || section.pointsTitle ? `
          <header class="case-points__intro reveal">
            ${section.pointsEyebrow ? `<span>${escapeHtml(section.pointsEyebrow)}</span>` : ""}
            ${section.pointsTitle ? `<h3>${escapeHtml(section.pointsTitle)}</h3>` : ""}
            ${section.pointsDescription ? `<p>${escapeHtml(section.pointsDescription)}</p>` : ""}
          </header>` : ""}
        <div class="insight-grid">${section.points.map(point => `<article class="insight-card reveal"><h3>${escapeHtml(point.title)}</h3><p>${escapeHtml(point.text)}</p></article>`).join("")}</div>
      </div>` : "";
    const mergeResearchPoints = Boolean(
      section.pointsFirst &&
      section.points?.length &&
      section.visual?.type === "research-synthesis"
    );
    return `
      <section class="case-section" data-section-order="${escapeHtml(sectionOrder)}">
        <div class="shell case-section__inner">
          <aside class="case-section__marker"><strong>${String(sectionOrder).padStart(2, "0")}</strong><span>${escapeHtml(section.label)}</span></aside>
          <div class="case-section__content">
            <div class="case-prose reveal">
              <h2>${escapeHtml(section.title)}</h2>
              ${(section.body || []).map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join("")}
              ${renderSystemVisual(section.visual, mergeResearchPoints ? pointsMarkup : "")}
              ${section.pointsFirst && !mergeResearchPoints ? pointsMarkup : ""}
              ${renderSubsections(section.subsections)}
            </div>
            ${section.pointsFirst || mergeResearchPoints ? "" : pointsMarkup}
            ${section.afterPoints?.length ? `<div class="case-closing reveal">${section.afterPoints.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join("")}</div>` : ""}
            ${section.quote ? `<blockquote class="case-quote reveal">${escapeHtml(section.quote)}</blockquote>` : ""}
            ${renderMedia(section.media)}
          </div>
        </div>
      </section>`;
  }

  function renderRelated(currentSlug) {
    const { projects, ui } = localeContent();
    return `
      <section class="related-section">
        <div class="shell">
          <header class="section-header reveal"><div><span class="eyebrow">${escapeHtml(ui.related)}</span><h2>${escapeHtml(ui.relatedTitle)}</h2></div><a class="button button-secondary" href="#home" data-home-target="work">${escapeHtml(ui.viewAll)}</a></header>
          <div class="related-grid">
            ${projectOrder().filter(slug => slug !== currentSlug).map(slug => {
              const project = projects[slug];
              return `<a class="related-card reveal" href="${projectHref(slug)}" data-project-link="${escapeHtml(slug)}"><img src="${escapeHtml(project.cover)}" alt="${escapeHtml(`${project.name} — ${project.subtitle}`)}" loading="lazy"><div class="related-card__body"><span>${escapeHtml(project.category)} · ${escapeHtml(project.year)}</span><h3>${escapeHtml(project.name)}</h3><p>${escapeHtml(project.subtitle)}</p></div></a>`;
            }).join("")}
          </div>
        </div>
      </section>`;
  }

  function renderCase(slug) {
    const { projects, ui, site } = localeContent();
    const project = projects[slug];
    if (!project) {
      location.hash = "#home";
      return;
    }
    document.body.classList.add("case-view");
    document.title = state.locale === "en"
      ? `${project.name} — ${project.canonicalSubtitle} | Timothy Lau`
      : `${project.name} — ${project.subtitle} | Timothy Lau`;

    const meta = [
      [ui.role, project.role],
      [ui.timeline, project.timeline],
      [ui.team, project.team],
      [ui.scope, project.scope],
    ];
    const summary = [
      ["◎", ui.goal, project.summary.goal],
      ["△", ui.challenge, project.summary.challenge],
      ["☆", ui.outcome, project.summary.outcome],
    ];

    APP.innerHTML = `
      <div class="case-page" data-page="case" data-project="${escapeHtml(slug)}" style="--project-accent:${escapeHtml(project.accent)};--project-soft:${escapeHtml(project.soft)};--project-dark:${escapeHtml(project.dark)}">
        <section class="case-hero">
          <div class="shell">
            <a class="case-back text-link" href="#home" data-home-target="work">← ${escapeHtml(ui.backToWork)}</a>
            <div class="case-hero__frame">
              <div class="case-hero__copy">
                <span class="eyebrow">${escapeHtml(ui.caseStudy)} · ${escapeHtml(project.category)} · ${escapeHtml(project.year)}</span>
                <h1 class="case-title"><span class="case-title__name">${escapeHtml(project.name)}</span><span class="case-title__subtitle">${escapeHtml(project.subtitle)}</span></h1>
                <p class="case-deck">${escapeHtml(project.description)}</p>
                <div class="case-meta">${meta.map(([label, value]) => `<div class="case-meta__item"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("")}</div>
              </div>
              <figure class="case-cover" data-zoom-src="${escapeHtml(project.cover)}" data-zoom-caption="${escapeHtml(`${project.name} — ${project.subtitle}`)}" tabindex="0" role="button" aria-label="${escapeHtml(ui.openImage)}">
                <img src="${escapeHtml(project.cover)}" alt="${escapeHtml(`${project.name} — ${project.subtitle}`)}">
                <span class="case-cover__index">${escapeHtml(project.index)}</span>
              </figure>
            </div>
          </div>
        </section>

        <section class="snapshot-section">
          <div class="shell">
            <header class="snapshot-header reveal"><span class="eyebrow">${escapeHtml(ui.snapshot)}</span><h2>${escapeHtml(project.name)} · ${escapeHtml(project.subtitle)}</h2></header>
            <div class="snapshot-grid">${summary.map(([icon, title, text]) => `<article class="snapshot-card reveal"><span class="snapshot-card__icon">${icon}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join("")}</div>
          </div>
        </section>

        ${project.sections.map(renderSection).join("")}

        <section class="outcomes-section">
          <div class="shell">
            <header class="outcomes-header reveal"><h2>${escapeHtml(ui.outcomes)}</h2><p>${escapeHtml(ui.outcomesBody)}</p></header>
            <div class="metric-grid">${project.outcomes.map(item => `<article class="metric-card reveal"><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span></article>`).join("")}</div>
          </div>
        </section>

        ${renderRelated(slug)}

        <section class="section section-tight">
          <div class="shell contact-panel reveal">
            <div><span class="eyebrow">${escapeHtml(ui.contactEyebrow)}</span><h2>${escapeHtml(ui.contactTitle)}</h2><p>${escapeHtml(ui.contactBody)}</p><a class="button button-primary" href="mailto:nekoking2010@gmail.com">${escapeHtml(ui.contactButton)} ↗</a></div>
            <div class="contact-details"><a class="contact-detail text-link" href="mailto:nekoking2010@gmail.com"><span aria-hidden="true">✉</span><span>nekoking2010@gmail.com</span></a><a class="contact-detail text-link" href="#home" data-home-target="work"><span aria-hidden="true">⌂</span><span>${escapeHtml(ui.returnHome)}</span></a></div>
          </div>
        </section>
        ${footer()}
      </div>`;
  }

  function setupReveal() {
    if (state.observer) state.observer.disconnect();
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = APP.querySelectorAll(".reveal");
    if (reducedMotion || !("IntersectionObserver" in window)) {
      nodes.forEach(node => node.classList.add("is-visible"));
      return;
    }
    state.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          state.observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -7% 0px", threshold: .08 });
    nodes.forEach(node => state.observer.observe(node));
  }

  function updateProgress() {
    if (currentRoute().type !== "case") {
      PROGRESS.style.transform = "scaleX(0)";
      return;
    }
    const max = document.documentElement.scrollHeight - innerHeight;
    const value = max <= 0 ? 0 : Math.min(1, Math.max(0, scrollY / max));
    PROGRESS.style.transform = `scaleX(${value})`;
  }

  function closeMenu() {
    HEADER_ACTIONS.classList.remove("is-open");
    MENU_BUTTON.setAttribute("aria-expanded", "false");
  }

  function scrollToHomeTarget(target) {
    const element = document.getElementById(target);
    if (element) element.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  }

  function render({ preserveScroll = false } = {}) {
    updateHeader();
    const route = currentRoute();
    if (route.type === "case") renderCase(route.slug);
    else renderHome();
    setupReveal();
    APP.dataset.renderComplete = "true";
    closeMenu();
    requestAnimationFrame(() => {
      updateProgress();
      if (state.pendingHomeTarget && route.type === "home") {
        const target = state.pendingHomeTarget;
        state.pendingHomeTarget = null;
        scrollToHomeTarget(target);
      } else if (!preserveScroll) {
        scrollTo({ top: 0, behavior: "auto" });
      }
    });
  }

  function setLocale(locale) {
    if (!DATA.locales.includes(locale) || locale === state.locale) return;
    state.locale = locale;
    storeLocale(locale);
    render();
  }

  function openModal(source, caption, trigger) {
    state.lastModalFocus = trigger || document.activeElement;
    MODAL_IMAGE.src = source;
    MODAL_IMAGE.alt = caption || "";
    MODAL_CAPTION.textContent = caption || "";
    MODAL.hidden = false;
    document.body.classList.add("modal-open");
    MODAL_CLOSE.setAttribute("aria-label", localeContent().ui.close);
    MODAL_CLOSE.focus();
  }

  function closeModal() {
    if (MODAL.hidden) return;
    MODAL.hidden = true;
    MODAL_IMAGE.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    document.body.classList.remove("modal-open");
    state.lastModalFocus?.focus?.();
  }

  document.addEventListener("click", event => {
    const localeButton = event.target.closest("button[data-locale]");
    if (localeButton) {
      setLocale(localeButton.dataset.locale);
      return;
    }

    const homeLink = event.target.closest("[data-home-target]");
    if (homeLink) {
      event.preventDefault();
      const target = homeLink.dataset.homeTarget;
      if (currentRoute().type === "home") scrollToHomeTarget(target);
      else {
        state.pendingHomeTarget = target;
        location.hash = "#home";
      }
      closeMenu();
      return;
    }

    const zoom = event.target.closest("[data-zoom-src]");
    if (zoom) {
      event.preventDefault();
      openModal(zoom.dataset.zoomSrc, zoom.dataset.zoomCaption || zoom.querySelector("figcaption")?.textContent || zoom.querySelector("img")?.alt || "", zoom);
      return;
    }

    if (event.target === MODAL || event.target.closest("[data-modal-close]")) closeModal();
  });

  document.addEventListener("keydown", event => {
    const zoom = event.target.closest?.("[data-zoom-src]");
    if (zoom && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openModal(zoom.dataset.zoomSrc, zoom.dataset.zoomCaption || zoom.querySelector("figcaption")?.textContent || zoom.querySelector("img")?.alt || "", zoom);
    }
    if (event.key === "Escape") {
      closeModal();
      closeMenu();
    }
  });

  MENU_BUTTON.addEventListener("click", () => {
    const open = HEADER_ACTIONS.classList.toggle("is-open");
    MENU_BUTTON.setAttribute("aria-expanded", open ? "true" : "false");
  });

  window.addEventListener("hashchange", () => render());
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress, { passive: true });

  async function boot() {
    await loadPortfolioData();
    if (!location.hash) history.replaceState(null, "", "#home");
    render();
  }

  boot();
})();
