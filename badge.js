(async function () {
    const params = new URLSearchParams(window.location.search);
    const requestedVersion = params.get("version");
    const repo = "ratpi-studio/ratpi-badge";
    const theme = params.get("theme");
    const fontsize = params.get("fontsize") || "0.75rem";
    const animate = params.get("animate");
  
    // Fonction pour créer et injecter le badge
    function renderBadge() {
      const badge = document.createElement("a");
      badge.href = "https://ratpi-studio.fr";
      badge.target = "_blank";
      badge.rel = "noopener noreferrer";
      badge.className = "ratpi-badge";
      badge.style.cssText = `
        margin: auto;
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border-radius: 12px;
        padding: 0.4rem 0.8rem;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        font-size: ${fontsize};
        color: white;
        text-decoration: none;
        font-family: sans-serif;
        border: 1px solid rgba(255, 255, 255, 0.3);
        background: rgba(255, 255, 255, 0.15);
        overflow: hidden;
      `;
  
      if (theme === "light") {
        badge.style.background = "rgba(0, 0, 0, 0.15)";
        badge.style.color = "white";
        badge.style.border = "1px solid rgba(0, 0, 0, 0.3)";
      }
  
      badge.innerHTML = `<span>Made with</span> <span class="mouse">🐭</span> <span>by Ratpi Studio!</span>`;
      document.currentScript.parentNode.insertBefore(badge, document.currentScript);
  
      if (animate === "loop") {
        badge.querySelector(".mouse").style.animation = "wiggle 1.5s infinite ease-in-out";
      }
    }
  
    // Fonction pour injecter dynamiquement la vraie logique JS selon la version
    function loadBadgeScript(version) {
      const script = document.createElement("script");
      script.src = `https://ratpi-studio.github.io/ratpi-badge/minified/badge.min.js?version=${version}`;
      document.body.appendChild(script);
    }
  
    try {
      const res = await fetch(`https://api.github.com/repos/${repo}/tags`);
      const tags = await res.json();
      const latest = tags[0]?.name;
  
      if (requestedVersion && tags.some(t => t.name === requestedVersion)) {
        loadBadgeScript(requestedVersion);
      } else {
        const url = new URL(window.location.href);
        url.searchParams.set("version", latest);
        window.location.href = url.toString(); // Redirige avec la bonne version
        return;
      }
    } catch (err) {
      console.warn("Échec du chargement des tags GitHub, chargement fallback.");
      loadBadgeScript("main");
    }
  
    renderBadge();
  })();