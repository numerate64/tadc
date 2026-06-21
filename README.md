# The Digital Circus Hub

A fast, responsive, browser-only fan experience inspired by the surreal energy of *The Amazing Digital Circus*. This is an unofficial fan project and is not affiliated with or endorsed by the show's creators or rights holders.

## Features

- 15-question weighted character personality quiz with seven outcomes
- Downloadable and shareable quiz result cards
- Combinatorial adventure generator with hundreds of thousands of scenarios
- Saved favorite adventures
- 31-scene branching escape game with five major endings
- Persistent achievement system with popups, confetti, and hidden achievements
- Expandable character guide with playful statistics
- Date-seeded daily fortune
- Responsive navigation, keyboard support, reduced-motion support, and semantic HTML
- Progress stored locally in the visitor's browser

## Project Structure

```text
/
├── index.html
├── quiz.html
├── adventure.html
├── escape.html
├── characters.html
├── achievements.html
├── fortune.html
├── css/
│   └── style.css
├── js/
│   ├── data.js
│   ├── achievements.js
│   ├── quiz.js
│   ├── adventure.js
│   ├── escape.js
│   └── fortune.js
└── assets/
    ├── images/
    └── sounds/
```

## Run Locally

No packages or build tools are required. Start any static file server from the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Deploy to GitHub Pages

1. Push the project to a GitHub repository.
2. Open **Settings → Pages** in the repository.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder.
5. Save. GitHub will publish the site at:

   ```text
   https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
   ```

All links are relative, so the site works from a GitHub Pages project subdirectory without modification.

## Local Storage

The site stores progress under the `digitalCircusHubState` key. It contains quiz results, favorite adventures, escape progress, scene history, endings, and achievements. No data is transmitted to a server.

To reset all progress, run this in the browser console:

```js
localStorage.removeItem("digitalCircusHubState");
location.reload();
```

## Artwork and Audio

The current build uses original CSS interface graphics, emoji, and abstract character placeholders. The `assets/images` and `assets/sounds` directories are ready for original or properly licensed assets if desired later.
