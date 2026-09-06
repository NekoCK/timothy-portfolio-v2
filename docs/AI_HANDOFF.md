# Clean Release Clone — AI / CLI / Desktop Handoff

Last updated: 2026-09-04 07:10 +08:00

Read this file before editing, synchronizing, committing, or publishing the portfolio.

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
