!function(){
  const e = new URLSearchParams(window.location.search);
  const n = document.createElement("a");
  n.href = "https://ratpi-studio.fr";
  n.target = "_blank";
  n.rel = "noopener noreferrer";
  n.className = "ratpi-badge";
  n.style.cssText = `
    margin: auto;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 12px;
    padding: 0.4rem 0.8rem;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: ${e.get("fontsize") || "0.75rem"};
    color: white;
    text-decoration: none;
    font-family: sans-serif;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.15);
    overflow: hidden;
  `;

  if ("light" === e.get("theme")) {
    n.style.background = "rgba(0, 0, 0, 0.15)";
    n.style.color = "white";
    n.style.border = "1px solid rgba(0, 0, 0, 0.3)";
  }

  n.innerHTML = `<span>Made with</span> <span class="mouse">🐭</span> <span>by Ratpi Studio!</span>`;
  document.currentScript.parentNode.insertBefore(n, document.currentScript);

  if ("loop" === e.get("animate")) {
    const mouseIcon = n.querySelector(".mouse");
    mouseIcon.style.animation = "wiggle 1.5s infinite ease-in-out";
    mouseIcon.style.display = "inline-block";
  }
}();