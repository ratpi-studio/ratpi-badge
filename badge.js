!function(){
  const params = new URLSearchParams(window.location.search);
  const requestedVersion = params.get("version");
  const repo = "ratpi-studio/ratpi-badge"; // Nom du dépôt GitHub

  fetch(`https://api.github.com/repos/${repo}/tags`)
    .then(response => response.json())
    .then(tags => {
      const fallbackVersion = tags[0]?.name; // Dernier tag disponible (le plus récent)
      if (requestedVersion) {
        const tagExists = tags.some(tag => tag.name === requestedVersion);
        if (tagExists) {
          // Charger le fichier correspondant à la version demandée
          const script = document.createElement("script");
          script.src = `hhttps://github.com/ratpi-studio/ratpi-badge/blob/v${requestedVersion}/minified/badge.min.${requestedVersion}.js`;
          document.body.appendChild(script);
        } else {
          // Rediriger vers le dernier tag disponible
          const currentUrl = new URL(window.location.href);
          currentUrl.searchParams.set("version", fallbackVersion);
          window.location.href = currentUrl.toString();
        }
      } else {
        // Si aucune version n'est demandée, charger le dernier tag disponible
        const script = document.createElement("script");
          script.src = `hhttps://github.com/ratpi-studio/ratpi-badge/blob/v${requestedVersion}/minified/badge.min.${fallbackVersion}.js`;
        document.body.appendChild(script);
      }
    })
    .catch(() => {
      // En cas d'erreur, afficher un message dans la console
      console.error("Impossible de récupérer les tags depuis GitHub.");
    });
}();