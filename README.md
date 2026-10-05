# DataVerse Webinar Landing Page

Static landing page for the DataVerse DPO webinar.

## Deploy to Vercel

1. Import `teamdataverse01/WEBINAR_DASHBOARD` at [vercel.com/new](https://vercel.com/new).
2. Select **Other** as the framework preset.
3. Leave the build command and output directory empty.
4. Click **Deploy**.

Vercel serves `index.html` from the repository root. `vercel.json` enables clean URLs and long-lived caching for the static assets.

## Local preview

```powershell
python -m http.server 4173
```

Open `http://localhost:4173` in a browser.