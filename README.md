# The Internet Is Broken™ 🫠

> A chaotic, interactive parody dashboard for the state of being online. Fake diagnostics, real internet feelings.

**Live site:** https://shreebalaji767.github.io/internet-is-broken/  
**Repository:** https://github.com/shreebalaji767/internet-is-broken

## What is this?

The Internet Is Broken™ is a deliberately unhelpful, meme-powered internet panic room. Click the button that promises to fix the internet; watch fictional metrics spiral; summon early-2000s desktop pop-ups; make reaction memes; grow virtual grass; and share your entirely fictional status report.

This is satire, not a real internet monitoring service.

## Features

### Chaos dashboard
- **Fix the Internet / Make It Worse:** trigger random incidents, worsen fictional metrics, add fake diagnostic terminal logs, and occasionally summon pop-ups.
- **Fictional live-ish metrics:** vibes, open tabs, attention span, and grass-touch probability react to your chaos.
- **Panic protocol + Popup Hell:** summon retro desktop pop-ups and dismiss them individually; press **Esc** to clear the popup layer.
- **Fake terminal:** timestamped, rotating diagnostics with intentionally unhelpful results.

### Meme factory and shareable report
- **Meme Factory™:** customize top and bottom captions, choose a background theme, randomize meme templates, copy caption text, and export a shareable PNG image directly in your browser.
- **Daily Doom Scroll:** cycle through fake breaking-news stories.
- **Copy Status:** create a text report containing your current fictional metrics, incident count, grass score, headline, and site URL.
- **Share the Chaos:** use your device's native share sheet when available, with a clipboard fallback.
- **Social preview metadata:** Open Graph tags provide a title and description in supported link previews.

### Touch Grass mini-game
- Click the grass button or illustrated field to grow a tiny virtual garden.
- Watch your fictional inner-peace score and grass-touch stats increase.
- The field is keyboard-accessible with **Enter** or **Space**.

### Secrets and achievements
- Type **?** for a secret message.
- Enter the **Konami code**: ↑ ↑ ↓ ↓ ← → ← → B A.
- Unlock nonsense achievements for chaos, pop-ups, virtual gardening, and sharing. Achievement progress is stored in this browser with `localStorage`.

### Design and accessibility
- Responsive desktop, tablet, and mobile layouts.
- Acid-lime, hot-pink, electric-violet, and near-black visual system.
- Keyboard focus indicators, accessible status messages, and reduced-motion support.
- No framework, package manager, build step, or third-party runtime dependency. Google Fonts are optional external typography; system font fallbacks are included.


### Branding and installable app
- Custom SVG favicon and standalone logo in `assets/`.
- Web app manifest defines the app name, theme colors, standalone display mode, and icons.
- The **INSTALL APP** button uses the browser's install prompt when available and gives device-specific guidance otherwise.
- A service worker caches the static app shell for repeat visits and basic offline loading.
- Progressive Web App installation requires HTTPS (GitHub Pages provides HTTPS). Some browsers require a qualifying icon format and may show their own install UI instead of the custom prompt.

## Run locally

No installation is needed. Open `index.html` in a modern browser.

For a more realistic local preview, run a static server from the repository root:

```sh
python -m http.server 8000
```

Then open http://localhost:8000.

## Publish with GitHub Pages

The workflow at `.github/workflows/pages.yml` deploys the repository root when code is pushed to `main`.

1. Open [Repository Settings → Pages](https://github.com/shreebalaji767/internet-is-broken/settings/pages).
2. If prompted, select **GitHub Actions** as the build and deployment source.
3. Open the [Actions tab](https://github.com/shreebalaji767/internet-is-broken/actions) and check the latest **Deploy static site to GitHub Pages** run.
4. Once deployment succeeds, visit https://shreebalaji767.github.io/internet-is-broken/.

If Pages has never been enabled, a repository administrator may need to enable it or approve the first deployment in Settings. A committed workflow alone does not guarantee that Pages is already live.

## Project structure

```text
.
├── .github/
│   └── workflows/
│       └── pages.yml       # GitHub Actions Pages deployment
├── assets/
│   └── favicon.svg         # Custom site icon
├── css/
│   └── style.css           # Responsive styles and animations
├── js/
│   └── app.js              # Chaos, pop-ups, memes, game, sharing, secrets
├── .nojekyll
├── index.html
└── README.md
```

## Privacy and fictional data

- All metrics, diagnostics, headlines, and status indicators are fabricated for entertainment.
- The website does not send metrics to a backend or call an internet-status API.
- Achievement names are stored in local browser storage on the current device.
- Sharing and copy controls only pass text to your browser/device's share or clipboard feature when you activate them.

## License

No license has been specified yet. Add a `LICENSE` file if you want to explicitly grant reuse permissions.

---

Made with 0% useful diagnostics and 100% internet feelings. 🫠
