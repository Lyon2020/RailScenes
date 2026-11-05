# RailScenes project website

A static, bilingual project preview for **RailScenes: A Multi-Task Dataset and Benchmark for Railway Scene Understanding**.

The current page includes completed 2D semantic segmentation and 3D object detection results. **3D semantic occupancy prediction is in progress.** Dataset release is planned following paper acceptance. No dataset download or data license is announced by this preview.

## Preview

Open `index.html` in a current browser. For an HTTP preview, run this command from this directory and open <http://127.0.0.1:8814>:

```sh
python -m http.server 8814 --bind 127.0.0.1
```

No npm installation or build is needed. All images, videos, scripts and styles are local. Visitors do not need Python; it is only an optional local preview server.

## GitHub Pages

Upload **the contents of this directory** to the root of a public `RailScenes` repository owned by `Lyon2020`. Keep `index.html` at the repository root. In **Settings → Pages**, select **Deploy from a branch**, **main**, **/(root)** and save. Keep `.nojekyll` in the publishing root.

Expected address after successful deployment: `https://Lyon2020.github.io/RailScenes/`. This is a deployment target, not a claim that the site is already online.

GitHub’s browser uploader accepts at most 100 files per upload and 25 MiB per file. Upload the assets in batches if using the browser. The supplied clips are below that per-file limit. GitHub Desktop or Git can upload the whole directory while preserving paths.

## Content

- 12 selected, timestamp-removed scene photographs, with automatic slideshow.
- 36 segmentation comparison images: six scenes, GT and five baselines.
- 36 detection comparison images: camera, fusion and LiDAR; three scenes per input, GT and three baselines.
- Four additional images for the manuscript’s 97.87 m DistancePlate example, retaining the TransFusion miss.
- Three complete result tables, manuscript-table renders, and CSV exports.
- Eight H.264 video excerpts; default muted, looping playback at 3× source-clip speed.
- English / Chinese switching, image lightbox, task and modality filters, keyboard navigation, responsive layout and reduced-motion support.

The table snapshot follows the supplied manuscript of November 5, 2026. Older local visualization folders can contain different metric versions; the website does not combine them. UniTR’s missing values remain unreported. Detection AP uses planar center-distance matching, not IoU matching. Illustrative selections do not replace aggregate test-set evaluation.

## Editing

|File|Purpose|
|---|---|
|`index.html`|Page structure, English static text and availability status|
|`style.css`|Layout, palette and mobile styles|
|`app.js`|Chinese text, filters, tables, slideshow, lightbox and video playback|
|`content.js`|Scene/gallery metadata and reported table values|
|`videos.js`|Selected video metadata and local paths|
|`data/*.csv`|Downloadable reported tables|
|`assets/`|Web media copies only|

When adding occupancy results, update both languages and replace the “in progress” status only after the experiments and protocol are ready. Add paper, author, affiliation, citation and dataset-download information when ready for publication. Do not invent publication details or use a placeholder download link.

## Media and licensing

All scientific visuals originate from the supplied RailScenes project. The favicon is a small original SVG rail symbol. Source annotations and predictions are not edited to hide errors. Web copies can be resized or compressed; the raw source files remain unchanged. Threefold video playback is applied in the browser, not baked into the encoded media. It does not represent inference throughput or real-time train motion.

This preview does not grant a license to the underlying dataset, paper assets or model code. Final release terms will be announced separately. No analytics, forms, external fonts or third-party runtime libraries are used.

## Official hosting references

- [Create a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configure the publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [File uploads and limits](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)

Instructions checked on November 5, 2026.
