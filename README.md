# Yongzhuo Chen — academic homepage

A responsive, dependency-free, static academic website, inspired by a traditional GitHub Pages academic homepage. Original layout and styling. All main pages are plain HTML.

## Preview locally

Open `index.html` in a browser. For the embedded PDF on the CV page, a local server is recommended:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Publish at https://yongzhuo-chen.github.io

1. Log into GitHub as **Yongzhuo-Chen**.
2. Create a **new public repository** with the exact name `yongzhuo-chen.github.io`.
3. Upload **the contents of this folder** (not the enclosing folder) to the repository root. Keep the `assets/` folder and `.nojekyll`.
4. Go to **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, select `main` and `/(root)`, then **Save**.
5. Once published, open https://yongzhuo-chen.github.io.

GitHub Pages may take a little time to publish. Do not claim the website is live before checking the URL.

## Edit the content

- `index.html`: intro, news, homepage research teasers.
- `research.html`: research projects and interests.
- `publications.html`: publications and status.
- `cv.html`: PDF preview and credentials.
- `assets/style.css`: colors, typography and responsive layout.
- `assets/Yongzhuo_Chen_CV.pdf`: replace whenever the academic CV changes.

## Privacy and accuracy

- This ready-to-publish sample contains a work email address and public scholarly profiles.
- Some research is ongoing and is described accordingly, not as published work.
- No analytics, trackers, external libraries, or paid hosting are required.
