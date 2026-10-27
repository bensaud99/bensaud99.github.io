document.addEventListener("DOMContentLoaded", () => {
    let currentLang = localStorage.getItem("site_lang") || "ar";
    let currentTheme = localStorage.getItem("site_theme") || "dark";
    let currentFilter = "all";

    const htmlEl = document.documentElement;
    const langToggleBtn = document.getElementById("lang-toggle");
    const langLabel = document.getElementById("lang-label");
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const projectsGrid = document.getElementById("projects-grid");
    const searchInput = document.getElementById("search-input");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const copyRepoBtn = document.getElementById("copy-repo-btn");
    const modal = document.getElementById("project-modal");
    const closeModalBtn = document.getElementById("close-modal");
    const modalBody = document.getElementById("modal-body");

    function applyTheme(theme) {
        htmlEl.setAttribute("data-theme", theme);
        localStorage.setItem("site_theme", theme);
        themeIcon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }

    themeToggleBtn.addEventListener("click", () => {
        currentTheme = currentTheme === "dark" ? "light" : "dark";
        applyTheme(currentTheme);
    });

    function applyLanguage(lang) {
        htmlEl.setAttribute("lang", lang);
        htmlEl.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
        localStorage.setItem("site_lang", lang);
        langLabel.textContent = lang === "ar" ? "EN" : "عربي";

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        searchInput.placeholder = translations[lang].search_placeholder;
        renderProjects();
    }

    langToggleBtn.addEventListener("click", () => {
        currentLang = currentLang === "ar" ? "en" : "ar";
        applyLanguage(currentLang);
    });

    function renderProjects() {
        const query = searchInput.value.toLowerCase().trim();
        projectsGrid.innerHTML = "";

        const filtered = projectsData.filter(item => {
            const matchesCategory = currentFilter === "all" || item.category === currentFilter;
            const titleText = item.title[currentLang].toLowerCase();
            const descText = item.desc[currentLang].toLowerCase();
            const matchesSearch = titleText.includes(query) || descText.includes(query);
            return matchesCategory && matchesSearch;
        });

        filtered.forEach(item => {
            const card = document.createElement("div");
            card.className = "project-card";

            const isIpa = item.category === "ipa" && item.trollstoreUrl;
            const available = Boolean(item.trollstoreUrl || item.downloadUrl);
            const primaryActionText = !available
                ? translations[currentLang].btn_soon
                : isIpa
                    ? translations[currentLang].btn_trollstore
                    : translations[currentLang].btn_download_now;
            const primaryActionHref = isIpa ? item.trollstoreUrl : item.downloadUrl;
            const primaryIcon = !available
                ? "fa-solid fa-hourglass-half"
                : isIpa
                    ? "fa-solid fa-bolt"
                    : "fa-solid fa-download";
            const primaryAction = available
                ? `<a href="${primaryActionHref}" class="btn-download">`
                : `<span class="btn-download is-unavailable" aria-disabled="true">`;
            const primaryActionEnd = available ? "</a>" : "</span>";

            card.innerHTML = `
                <div class="card-banner">
                    <img src="${item.image}" alt="${item.title[currentLang]}">
                    <span class="card-badge">${item.badge}</span>
                </div>
                <div class="card-body">
                    <div class="card-title-row">
                        <h3>${item.title[currentLang]}</h3>
                        <span class="version-pill">${item.version}</span>
                    </div>
                    <p class="card-desc">${item.desc[currentLang]}</p>
                    <div class="card-meta">
                        <span><i class="fa-solid fa-hard-drive"></i> ${item.size}</span>
                        <span><i class="fa-solid fa-mobile-screen"></i> ${item.compat}</span>
                    </div>
                    <div class="card-actions">
                        ${primaryAction}
                            <i class="${primaryIcon}"></i>
                            <span>${primaryActionText}</span>
                        ${primaryActionEnd}
                        <button class="btn-details" data-id="${item.id}">
                            <i class="fa-solid fa-circle-info"></i>
                            <span>${translations[currentLang].btn_details}</span>
                        </button>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(card);
        });

        document.querySelectorAll(".btn-details").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = parseInt(btn.getAttribute("data-id"));
                openModal(id);
            });
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.getAttribute("data-filter");
            renderProjects();
        });
    });

    searchInput.addEventListener("input", renderProjects);

    function openModal(id) {
        const item = projectsData.find(p => p.id === id);
        if (!item) return;

        const featuresList = item.features[currentLang]
            .map(f => `<li style="margin-bottom:8px;"><i class="fa-solid fa-check" style="color:var(--accent-secondary);margin-inline-end:8px;"></i>${f}</li>`)
            .join("");

        modalBody.innerHTML = `
            <img src="${item.image}" alt="${item.title[currentLang]}" style="width:100%;height:220px;object-fit:cover;border-radius:16px;margin-bottom:20px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                <h2 style="font-size:1.6rem;">${item.title[currentLang]}</h2>
                <span class="version-pill">${item.version}</span>
            </div>
            <p style="color:var(--text-secondary);margin-bottom:20px;">${item.desc[currentLang]}</p>
            <div style="background:var(--bg-main);padding:16px;border-radius:14px;border:1px solid var(--border-color);margin-bottom:20px;">
                <h4 style="margin-bottom:10px;color:var(--accent-primary);">${translations[currentLang].modal_changelog}</h4>
                <ul style="list-style:none;">${featuresList}</ul>
            </div>
            <div style="display:flex;gap:20px;margin-bottom:22px;font-size:0.9rem;color:var(--text-secondary);">
                <span><strong>${translations[currentLang].modal_compatibility}</strong> ${item.compat}</span>
                <span><strong>${translations[currentLang].modal_size}</strong> ${item.size}</span>
            </div>
            <div style="display:flex;gap:12px;flex-wrap:wrap;">
                ${item.downloadUrl || item.trollstoreUrl
                    ? `<a href="${item.trollstoreUrl || item.downloadUrl}" class="btn btn-primary" style="flex:1;justify-content:center;">
                    <i class="fa-solid fa-download"></i>
                    <span>${translations[currentLang].btn_download_now} (${item.category.toUpperCase()})</span>
                </a>`
                    : `<span class="btn btn-primary is-unavailable" style="flex:1;justify-content:center;" aria-disabled="true">
                    <i class="fa-solid fa-hourglass-half"></i>
                    <span>${translations[currentLang].btn_soon}</span>
                </span>`}
            </div>
        `;
        modal.classList.add("active");
    }

    closeModalBtn.addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
    });

    copyRepoBtn.addEventListener("click", () => {
        const repoUrl = document.getElementById("repo-url").textContent.trim();
        const done = () => {
            const span = copyRepoBtn.querySelector("span");
            span.textContent = translations[currentLang].btn_copied;
            setTimeout(() => {
                span.textContent = translations[currentLang].btn_copy;
            }, 2000);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(repoUrl).then(done).catch(done);
            return;
        }
        // Older iOS Safari: no async clipboard, select and copy by hand.
        const field = document.createElement("textarea");
        field.value = repoUrl;
        document.body.appendChild(field);
        field.select();
        try { document.execCommand("copy"); } catch (error) { /* nothing to do */ }
        document.body.removeChild(field);
        done();
    });

    // The headline number is the packages actually downloadable from this page,
    // not a made-up total.
    const statPublished = document.getElementById("stat-published");
    if (statPublished) {
        statPublished.textContent = String(
            projectsData.filter(item => item.downloadUrl || item.trollstoreUrl).length
        );
    }

    applyTheme(currentTheme);
    applyLanguage(currentLang);
});
