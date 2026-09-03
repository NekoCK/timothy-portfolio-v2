# Clean release repository instructions

- Before changing this repository, read `docs/AI_HANDOFF.md` completely.
- This directory is the clean release-integration clone. Use `../publish-repo` only as the source of earlier work and `../backups/publish-repo-snapshot-2026-09-02-pre-release` only as read-only recovery material.
- The goal is a reviewed, production-ready GitHub Pages release. Do not push, publish, force-push, rebase, merge, or discard work unless the user explicitly requests that action.
- Carry changes from the old working copy selectively after reviewing their content and evidence. Do not copy the old repository wholesale or replace this `.git` directory.
- `content/portfolio.json` is the served content source. Keep the embedded `[data-portfolio-content]` JSON in `index.html` synchronized because it is the offline/fetch-failure fallback.
- Keep English, Traditional Chinese, and Japanese portfolio content aligned in meaning. Do not invent unsupported launch, adoption, conversion, retention, A/B-test, or sample-size claims.
- After JavaScript or content changes, run `git diff --check`, `node --check app.js`, `node --check admin/app.js`, and `jq empty content/portfolio.json`.
- Before release, visually check `#case/ferqo` at desktop and mobile widths, including all three locales and the impact/investment matrix.
- After material work, update `docs/AI_HANDOFF.md` with what changed, validation performed, remaining risks, and the next safe action.
