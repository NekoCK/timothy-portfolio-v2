(() => {
  "use strict";

  const OWNER = "NekoCK";
  const REPO = "timothy-portfolio-v2";
  const BRANCH = "main";
  const CONTENT_PATH = "content/portfolio.json";
  const API_ROOT = `https://api.github.com/repos/${OWNER}/${REPO}`;
  const SESSION_KEY = "portfolioGithubToken";
  const DEVICE_KEY = "portfolioGithubTokenDevice";
  const LOCALE_LABELS = { en: "English", "zh-Hant": "繁體中文", ja: "日本語" };

  const state = {
    token: "",
    data: null,
    sha: "",
    locale: "en",
    projectSlug: "ferqo",
    dirty: false,
    busy: false,
    pending: new Map(),
  };

  const $ = selector => document.querySelector(selector);
  const auth = $("[data-auth]");
  const cms = $("[data-cms]");
  const tokenInput = $("[data-token]");
  const rememberDevice = $("[data-remember-device]");
  const editor = $("[data-editor]");
  const projectTabs = $("[data-project-tabs]");
  const localeSelect = $("[data-locale]");
  const notice = $("[data-notice]");
  const status = $("[data-status]");
  const statusText = $("[data-status-text]");
  const publishButton = $("[data-publish]");
  const publishLabel = $("[data-publish-label]");
  const pendingTitle = $("[data-pending-title]");
  const pendingDetail = $("[data-pending-detail]");

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
  }

  function showNotice(message, type = "success") {
    notice.textContent = message;
    notice.className = `notice is-visible ${type}`;
    notice.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function clearNotice() {
    notice.className = "notice";
    notice.textContent = "";
  }

  function setConnected(connected) {
    status.classList.toggle("is-online", connected);
    statusText.textContent = connected ? "已連接 GitHub" : "尚未連線";
    auth.hidden = connected;
    cms.hidden = !connected;
  }

  function decodeBase64Utf8(value) {
    const binary = atob(value.replace(/\s/g, ""));
    return new TextDecoder().decode(Uint8Array.from(binary, char => char.charCodeAt(0)));
  }

  function bytesToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    for (let offset = 0; offset < bytes.length; offset += 0x8000) binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
    return btoa(binary);
  }

  function textToBase64(value) {
    return bytesToBase64(new TextEncoder().encode(value));
  }

  async function github(path, options = {}) {
    const response = await fetch(`${API_ROOT}${path}`, {
      ...options,
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${state.token}`,
        "X-GitHub-Api-Version": "2022-11-28",
        ...(options.headers || {}),
      },
    });
    if (!response.ok) {
      let detail = "";
      try { detail = (await response.json()).message || ""; } catch (_) {}
      const error = new Error(detail || `GitHub request failed (${response.status})`);
      error.status = response.status;
      throw error;
    }
    return response.status === 204 ? null : response.json();
  }

  async function loadData() {
    const result = await github(`/contents/${CONTENT_PATH}?ref=${encodeURIComponent(BRANCH)}`);
    state.data = JSON.parse(decodeBase64Utf8(result.content));
    state.sha = result.sha;
    state.locale = state.data.defaultLocale || "en";
    state.projectSlug = state.data.projectOrder[0];
  }

  function currentProject(locale = state.locale) {
    return state.data.content[locale].projects[state.projectSlug];
  }

  function previewUrl(source) {
    if (!source) return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect width='100%25' height='100%25' fill='%23e8e7e2'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23686b65' font-family='sans-serif'%3E尚未選擇圖片%3C/text%3E%3C/svg%3E";
    if (/^(https?:|blob:|data:)/.test(source)) return source;
    return `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${source.replace(/^\//, "")}`;
  }

  function formatBytes(bytes) {
    return bytes < 1024 * 1024 ? `${Math.round(bytes / 1024)} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  }

  function uploadKey(kind, sectionIndex = "", mediaIndex = "") {
    return `${state.projectSlug}:${kind}:${sectionIndex}:${mediaIndex}`;
  }

  function pendingFor(kind, sectionIndex = "", mediaIndex = "") {
    return state.pending.get(uploadKey(kind, sectionIndex, mediaIndex));
  }

  function assetCard(kind, title, help, source) {
    const pending = pendingFor(kind);
    const imageSource = pending ? pending.objectUrl : previewUrl(source);
    return `<article class="asset-card">
      <div class="asset-card__preview"><img src="${escapeHtml(imageSource)}" alt="${escapeHtml(title)}"></div>
      <div class="asset-card__body"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(help)}</p>
        <label class="file-button">選擇圖片<input type="file" accept="image/jpeg,image/png,image/webp" data-upload-kind="${kind}"></label>
        <div class="pending-file">${pending ? `${escapeHtml(pending.file.name)} · ${formatBytes(pending.file.size)}` : ""}</div>
      </div></article>`;
  }

  function field(label, path, value, options = {}) {
    const full = options.full ? " field--full" : "";
    const help = options.help ? `<small>${escapeHtml(options.help)}</small>` : "";
    if (options.textarea) return `<label class="field${full}"><span>${escapeHtml(label)}</span><textarea data-bind="${escapeHtml(path)}" data-value-type="${options.type || "string"}">${escapeHtml(value)}</textarea>${help}</label>`;
    return `<label class="field${full}"><span>${escapeHtml(label)}</span><input type="text" value="${escapeHtml(value)}" data-bind="${escapeHtml(path)}">${help}</label>`;
  }

  function pointMarkup(point, sectionIndex, pointIndex) {
    return `<article class="point-item">
      ${field("重點標題", `sections.${sectionIndex}.points.${pointIndex}.title`, point.title)}
      ${field("說明", `sections.${sectionIndex}.points.${pointIndex}.text`, point.text, { textarea: true })}
      <div class="point-actions"><button class="button button--danger" type="button" data-remove-point="${pointIndex}" data-section-index="${sectionIndex}">移除重點</button></div>
    </article>`;
  }

  function mediaMarkup(item, sectionIndex, mediaIndex) {
    const pending = pendingFor("media", sectionIndex, mediaIndex);
    const source = pending ? pending.objectUrl : previewUrl(item.asset);
    return `<article class="media-item" data-layout="${escapeHtml(item.layout || "wide")}">
      <div class="media-item__preview"><img src="${escapeHtml(source)}" alt="${escapeHtml(item.alt || item.caption || "Section image")}"></div>
      <div class="media-item__body">
        <div class="media-item__toolbar"><strong>圖片 ${mediaIndex + 1}</strong><select data-bind="sections.${sectionIndex}.media.${mediaIndex}.layout"><option value="wide"${(item.layout || "wide") === "wide" ? " selected" : ""}>全寬</option><option value="compact"${item.layout === "compact" ? " selected" : ""}>內縮寬</option><option value="half"${item.layout === "half" ? " selected" : ""}>半寬（連續兩張並排）</option><option value="portrait"${item.layout === "portrait" ? " selected" : ""}>直式置中</option></select></div>
        <div class="media-fields">
          ${field("圖片說明", `sections.${sectionIndex}.media.${mediaIndex}.caption`, item.caption || "", { textarea: true })}
          ${field("替代文字（無障礙）", `sections.${sectionIndex}.media.${mediaIndex}.alt`, item.alt || "")}
        </div>
        <div class="media-actions">
          <label class="file-button">${pending ? "重新選擇" : "更換圖片"}<input type="file" accept="image/jpeg,image/png,image/webp" data-upload-kind="media" data-section-index="${sectionIndex}" data-media-index="${mediaIndex}"></label>
          <button class="button button--danger" type="button" data-remove-media="${mediaIndex}" data-section-index="${sectionIndex}">刪除</button>
        </div>
        <div class="pending-file">${pending ? `${escapeHtml(pending.file.name)} · ${formatBytes(pending.file.size)}` : ""}</div>
      </div>
    </article>`;
  }

  function sectionMarkup(section, sectionIndex) {
    const paragraphs = (section.body || []).join("\n\n");
    const points = section.points || [];
    const media = section.media || [];
    return `<section class="case-section-editor panel">
      <header class="section-editor__head">
        <div class="section-editor__title"><span class="section-editor__number">${String(section.order || sectionIndex + 1).padStart(2, "0")}</span><div><span>Section ${sectionIndex + 1}</span><h2>${escapeHtml(section.label || "未命名 Section")}</h2></div></div>
        <a class="button button--secondary" href="../#case/${escapeHtml(state.projectSlug)}" target="_blank">預覽這個案例 ↗</a>
      </header>
      <div class="section-editor__body">
        <div class="section-copy-grid">
          <div class="section-copy-main">
            ${field("Section 標籤", `sections.${sectionIndex}.label`, section.label || "")}
            ${field("Section 主標題", `sections.${sectionIndex}.title`, section.title || "", { textarea: true })}
            ${field("內文段落", `sections.${sectionIndex}.body`, paragraphs, { textarea: true, type: "paragraphs", help: "段落之間空一行；前台會自動套用一致的閱讀寬度。" })}
          </div>
          <div class="section-copy-side">${field("引言／Quote（可留空）", `sections.${sectionIndex}.quote`, section.quote || "", { textarea: true })}</div>
        </div>
        <div class="subheading"><h3>重點卡片</h3><button class="button button--secondary" type="button" data-add-point data-section-index="${sectionIndex}">＋ 新增重點</button></div>
        <div class="point-list">${points.map((point, index) => pointMarkup(point, sectionIndex, index)).join("")}</div>
        <div class="subheading"><div><h3>Section 圖片</h3><span>${media.length} 張；可用全寬、內縮、半寬成對或直式置中建立案例敘事節奏。</span></div><button class="button button--primary" type="button" data-add-media data-section-index="${sectionIndex}">＋ 新增圖片</button></div>
        <div class="media-list">${media.length ? media.map((item, index) => mediaMarkup(item, sectionIndex, index)).join("") : `<div class="empty-media">這個 section 還沒有圖片，可以從右上方新增。</div>`}</div>
      </div>
    </section>`;
  }

  function renderTabs() {
    projectTabs.innerHTML = state.data.projectOrder.map(slug => {
      const project = state.data.content[state.locale].projects[slug];
      return `<button class="project-tab${slug === state.projectSlug ? " is-active" : ""}" type="button" data-project="${escapeHtml(slug)}"><span>${escapeHtml(project.category || slug)}</span><strong>${escapeHtml(project.name || project.title)}</strong></button>`;
    }).join("");
  }

  function renderEditor() {
    const project = currentProject();
    renderTabs();
    editor.innerHTML = `<section class="editor-panel panel">
      <header class="editor-panel__head"><div><span class="eyebrow">Project overview</span><h2>${escapeHtml(project.name || project.title)}</h2></div><p>案例頁的所有文字、重點與圖片都從這裡統一發布。</p></header>
      <div class="field-grid">
        ${field("案例名稱", "name", project.name || "")}
        ${field("案例副標題", "subtitle", project.subtitle || project.title || "")}
        ${field("卡片說明", "cardDescription", project.cardDescription || "", { textarea: true, full: true })}
        ${field("案例介紹", "description", project.description || "", { textarea: true, full: true })}
        ${field("角色", "role", project.role || "")}${field("時程", "timeline", project.timeline || "")}${field("團隊", "team", project.team || "")}${field("範圍", "scope", project.scope || "")}
      </div>
      <div class="summary-grid">
        <div class="summary-card">${field("Goal", "summary.goal", project.summary?.goal || "", { textarea: true })}</div>
        <div class="summary-card">${field("Challenge", "summary.challenge", project.summary?.challenge || "", { textarea: true })}</div>
        <div class="summary-card">${field("Outcome", "summary.outcome", project.summary?.outcome || "", { textarea: true })}</div>
      </div>
      <div class="asset-grid">
        ${assetCard("cover", "案例首圖", "同時用於首頁卡片與案例頁 Hero。", project.cover)}
        ${assetCard("source", "原始專案總覽", "案例尾端可放大查看的完整 project board。", project.sourceBoard)}
      </div>
    </section>
    ${(project.sections || []).map(sectionMarkup).join("")}`;
    updatePendingUI();
  }

  function renderLocaleOptions() {
    localeSelect.innerHTML = state.data.locales.map(locale => `<option value="${escapeHtml(locale)}"${locale === state.locale ? " selected" : ""}>${escapeHtml(LOCALE_LABELS[locale] || locale)}</option>`).join("");
  }

  function getAt(object, path) {
    return path.split(".").reduce((value, key) => value?.[key], object);
  }

  function setAt(object, path, value) {
    const keys = path.split(".");
    const last = keys.pop();
    const target = keys.reduce((current, key) => current[key], object);
    target[last] = value;
  }

  function markDirty() {
    state.dirty = true;
    updatePendingUI();
  }

  function updatePendingUI() {
    const uploads = state.pending.size;
    const changed = state.dirty || uploads;
    pendingTitle.textContent = changed ? `${uploads ? `${uploads} 張圖片與` : ""}內容等待發布` : "沒有待發布的變更";
    pendingDetail.textContent = changed ? "發布後約需 1–3 分鐘更新公開網站。" : "修改文字或圖片後可一次發布。";
    publishButton.disabled = !changed || state.busy;
    publishLabel.textContent = state.busy ? "發布中…" : "發布變更";
    publishButton.classList.toggle("is-busy", state.busy);
  }

  function syncMediaAddition(sectionIndex, media) {
    state.data.locales.forEach(locale => {
      if (locale === state.locale) return;
      const section = state.data.content[locale].projects[state.projectSlug]?.sections?.[sectionIndex];
      if (section) {
        section.media ||= [];
        section.media.push({ asset: media.asset, layout: media.layout, caption: media.caption, alt: media.alt });
      }
    });
  }

  function syncMediaRemoval(sectionIndex, mediaIndex) {
    state.data.locales.forEach(locale => {
      if (locale === state.locale) return;
      const media = state.data.content[locale].projects[state.projectSlug]?.sections?.[sectionIndex]?.media;
      if (media?.[mediaIndex]) media.splice(mediaIndex, 1);
    });
  }

  function reindexPendingAfterMediaRemoval(sectionIndex, mediaIndex) {
    const updates = [];
    for (const [key, item] of state.pending) {
      if (item.projectSlug !== state.projectSlug || item.kind !== "media" || Number(item.sectionIndex) !== sectionIndex) continue;
      const index = Number(item.mediaIndex);
      if (index === mediaIndex) {
        URL.revokeObjectURL(item.objectUrl);
        state.pending.delete(key);
      } else if (index > mediaIndex) {
        state.pending.delete(key);
        item.mediaIndex = String(index - 1);
        updates.push(item);
      }
    }
    updates.forEach(item => state.pending.set(`${item.projectSlug}:media:${item.sectionIndex}:${item.mediaIndex}`, item));
  }

  async function handleUpload(input) {
    const file = input.files?.[0];
    if (!file) return;
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) return showNotice("只支援 JPG、PNG 或 WebP 圖片。", "error");
    if (file.size > 20 * 1024 * 1024) return showNotice("單張圖片請控制在 20 MB 以內。", "error");
    const kind = input.dataset.uploadKind;
    const sectionIndex = input.dataset.sectionIndex ?? "";
    const mediaIndex = input.dataset.mediaIndex ?? "";
    const key = uploadKey(kind, sectionIndex, mediaIndex);
    const previous = state.pending.get(key);
    if (previous) URL.revokeObjectURL(previous.objectUrl);
    state.pending.set(key, { file, objectUrl: URL.createObjectURL(file), kind, sectionIndex, mediaIndex, projectSlug: state.projectSlug });
    markDirty();
    renderEditor();
  }

  function fileExtension(file) {
    const extension = (file.name.split(".").pop() || "").toLowerCase();
    if (["jpg", "jpeg", "png", "webp"].includes(extension)) return extension === "jpeg" ? "jpg" : extension;
    return { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" }[file.type] || "jpg";
  }

  function uploadPath(item) {
    const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z").replace("T", "-");
    const nonce = Math.random().toString(36).slice(2, 7);
    const location = item.kind === "media" ? `section-${Number(item.sectionIndex) + 1}-image-${Number(item.mediaIndex) + 1}` : item.kind;
    return `assets/uploads/${item.projectSlug}-${location}-${stamp}-${nonce}.${fileExtension(item.file)}`;
  }

  function applyUploadedPath(item, path) {
    state.data.locales.forEach(locale => {
      const project = state.data.content[locale].projects[item.projectSlug];
      if (!project) return;
      if (item.kind === "cover") project.cover = path;
      else if (item.kind === "source") project.sourceBoard = path;
      else {
        const media = project.sections?.[Number(item.sectionIndex)]?.media?.[Number(item.mediaIndex)];
        if (media) media.asset = path;
      }
    });
  }

  async function publish() {
    if ((!state.dirty && !state.pending.size) || state.busy) return;
    clearNotice();
    state.busy = true;
    updatePendingUI();
    try {
      for (const item of state.pending.values()) {
        const path = uploadPath(item);
        await github(`/contents/${path}`, {
          method: "PUT",
          body: JSON.stringify({ message: `Upload ${item.projectSlug} case study image`, content: bytesToBase64(await item.file.arrayBuffer()), branch: BRANCH }),
        });
        applyUploadedPath(item, path);
      }
      state.data.version = Math.max(4, Number(state.data.version) || 0);
      state.data.updatedAt = new Date().toISOString();
      const result = await github(`/contents/${CONTENT_PATH}`, {
        method: "PUT",
        body: JSON.stringify({ message: "Update portfolio case study content", content: textToBase64(`${JSON.stringify(state.data, null, 2)}\n`), sha: state.sha, branch: BRANCH }),
      });
      state.sha = result.content.sha;
      state.pending.forEach(item => URL.revokeObjectURL(item.objectUrl));
      state.pending.clear();
      state.dirty = false;
      renderEditor();
      showNotice("案例內容已發布。GitHub Pages 通常會在 1–3 分鐘內完成更新。");
    } catch (error) {
      showNotice(`發布失敗：${error.message}。若儲存庫剛被其他地方更新，請重新載入後再試。`, "error");
    } finally {
      state.busy = false;
      updatePendingUI();
    }
  }

  async function connect() {
    clearNotice();
    const token = tokenInput.value.trim();
    if (!token) return showNotice("請先輸入 GitHub Fine-grained token。", "error");
    state.token = token;
    $("[data-connect]").disabled = true;
    try {
      await loadData();
      if (rememberDevice.checked) {
        localStorage.setItem(DEVICE_KEY, token);
        sessionStorage.removeItem(SESSION_KEY);
      } else {
        sessionStorage.setItem(SESSION_KEY, token);
        localStorage.removeItem(DEVICE_KEY);
      }
      tokenInput.value = "";
      setConnected(true);
      renderLocaleOptions();
      renderEditor();
      showNotice("已連接內容後台。你現在可以編輯案例與新增圖片。");
    } catch (error) {
      state.token = "";
      sessionStorage.removeItem(SESSION_KEY);
      if (error.status === 401 || error.status === 403) localStorage.removeItem(DEVICE_KEY);
      showNotice(error.status === 401 || error.status === 403 ? "Token 無效、已過期，或缺少 Contents 讀寫權限。" : `無法連接 GitHub：${error.message}`, "error");
    } finally {
      $("[data-connect]").disabled = false;
    }
  }

  function logout() {
    state.pending.forEach(item => URL.revokeObjectURL(item.objectUrl));
    state.pending.clear();
    state.token = "";
    state.data = null;
    state.sha = "";
    state.dirty = false;
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(DEVICE_KEY);
    rememberDevice.checked = false;
    setConnected(false);
    clearNotice();
  }

  editor.addEventListener("input", event => {
    const input = event.target.closest("[data-bind]");
    if (!input) return;
    const project = currentProject();
    const value = input.dataset.valueType === "paragraphs" ? input.value.split(/\n\s*\n/).map(item => item.trim()).filter(Boolean) : input.value;
    setAt(project, input.dataset.bind, value);
    markDirty();
  });

  editor.addEventListener("change", event => {
    const upload = event.target.closest("input[type=file][data-upload-kind]");
    if (upload) handleUpload(upload);
  });

  editor.addEventListener("click", event => {
    const addMedia = event.target.closest("[data-add-media]");
    if (addMedia) {
      const sectionIndex = Number(addMedia.dataset.sectionIndex);
      const media = { asset: "", layout: "wide", caption: "", alt: "" };
      currentProject().sections[sectionIndex].media ||= [];
      currentProject().sections[sectionIndex].media.push(media);
      syncMediaAddition(sectionIndex, media);
      markDirty();
      renderEditor();
      return;
    }
    const removeMedia = event.target.closest("[data-remove-media]");
    if (removeMedia) {
      const sectionIndex = Number(removeMedia.dataset.sectionIndex);
      const mediaIndex = Number(removeMedia.dataset.removeMedia);
      reindexPendingAfterMediaRemoval(sectionIndex, mediaIndex);
      currentProject().sections[sectionIndex].media.splice(mediaIndex, 1);
      syncMediaRemoval(sectionIndex, mediaIndex);
      markDirty();
      renderEditor();
      return;
    }
    const addPoint = event.target.closest("[data-add-point]");
    if (addPoint) {
      const section = currentProject().sections[Number(addPoint.dataset.sectionIndex)];
      section.points ||= [];
      section.points.push({ title: "New insight", text: "" });
      markDirty();
      renderEditor();
      return;
    }
    const removePoint = event.target.closest("[data-remove-point]");
    if (removePoint) {
      currentProject().sections[Number(removePoint.dataset.sectionIndex)].points.splice(Number(removePoint.dataset.removePoint), 1);
      markDirty();
      renderEditor();
    }
  });

  projectTabs.addEventListener("click", event => {
    const button = event.target.closest("[data-project]");
    if (!button) return;
    state.projectSlug = button.dataset.project;
    renderEditor();
    scrollTo({ top: 0, behavior: "smooth" });
  });

  localeSelect.addEventListener("change", () => {
    state.locale = localeSelect.value;
    renderEditor();
  });

  $("[data-connect]").addEventListener("click", connect);
  tokenInput.addEventListener("keydown", event => { if (event.key === "Enter") connect(); });
  $("[data-logout]").addEventListener("click", logout);
  $("[data-publish]").addEventListener("click", publish);
  $("[data-reload]").addEventListener("click", async () => {
    if ((state.dirty || state.pending.size) && !confirm("要放棄尚未發布的變更並重新載入嗎？")) return;
    state.pending.forEach(item => URL.revokeObjectURL(item.objectUrl));
    state.pending.clear();
    state.dirty = false;
    try { await loadData(); renderLocaleOptions(); renderEditor(); showNotice("已重新載入 GitHub 上的最新內容。"); }
    catch (error) { showNotice(`重新載入失敗：${error.message}`, "error"); }
  });

  const savedDeviceToken = localStorage.getItem(DEVICE_KEY);
  const savedSessionToken = sessionStorage.getItem(SESSION_KEY);
  if (savedDeviceToken || savedSessionToken) {
    tokenInput.value = savedDeviceToken || savedSessionToken;
    rememberDevice.checked = Boolean(savedDeviceToken);
    connect();
  } else setConnected(false);
})();
