# 🐭 Ratpi Studio Badge

![Version](https://img.shields.io/github/v/tag/ratpi-studio/ratpi-badge?style=flat)
![Build](https://img.shields.io/github/actions/workflow/status/ratpi-studio/ratpi-badge/minify.yml?style=flat)
![License](https://img.shields.io/github/license/ratpi-studio/ratpi-badge?style=flat)

Petit badge animé à intégrer facilement sur vos sites et apps !

---

## 🚀 Intégration

### 1. Par iframe (simple)
```html
<iframe 
  src="https://ratpi-studio.github.io/ratpi-badge/?animate=loop&theme=auto" 
  style="border: none; background: transparent; width: 250px; height: 60px;" 
  loading="lazy">
</iframe>
```

### 2. Par script JS (plus propre)
```html
<div id="ratpi-badge"></div>
<script src="https://ratpi-studio.github.io/ratpi-badge/minified/badge.min.js"></script>
```

---

## ⚙️ Options disponibles

| Paramètre      | Effet                                       | Exemple                          |
|:----------------|:--------------------------------------------|:---------------------------------|
| `animate=loop`  | Anime la souris en boucle                   | `?animate=loop`                  |
| `theme=auto`    | Détecte automatiquement le thème clair/sombre | `?theme=auto`                    |
| `theme=light`   | Force le thème clair                         | `?theme=light`                   |
| `fontsize=1rem` | Définit la taille du texte                  | `?fontsize=1rem`                 |

---

## 🌟 Démo interactive

🔗 [Voir la preview](https://ratpi-studio.github.io/ratpi-badge/preview.html)

---

## 📦 Dossier Minifié

- Tous les fichiers optimisés sont accessibles dans [`/minified`](https://ratpi-studio.github.io/ratpi-badge/minified/)
- Chargement ultra-rapide pour la production 🚀
- **Utilisation d'une version spécifique** :
  ```html
  <script src="https://ratpi-studio.github.io/ratpi-badge/minified/badge.min.1.0.0.js"></script>
  ```
  Remplacez `1.0.0` par la version souhaitée.

---

## 🛠️ À propos

Créé avec ❤️ par [Ratpi Studio](https://ratpi-studio.fr)
