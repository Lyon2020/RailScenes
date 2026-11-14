# RailScenes project website

RailScenes: A Multi-Task Dataset and Benchmark for Railway Scene Understanding

Project URL: https://Lyon2020.github.io/RailScenes/

The opening displays three examples for each of semantic segmentation, 3D object detection, and semantic occupancy. The gallery directly embeds nine looping GIF images. It does not use MP4 players or depend on video autoplay permission. GIFs load as visitors approach them. There are no pause controls or enlargement links. All camera insets are at the upper left. Examples across task columns are independently selected, not synchronized multi-task comparisons.

## Files

- `index.html`, `style.css`, `showcase.css`, `app.js`: page, styling and playback.
- `assets/`: videos, GIFs, posters and manuscript figures.
- `data/showcase.json`: neutral display identifiers, titles and public media paths only.
- `data/benchmarks.json`: manuscript benchmark results.

Actual recording names, dataset scene indices, source paths and processing provenance are retained separately in the local source register and are not distributed with this website.

## Preview

Run `python -m http.server 8816 --bind 127.0.0.1` in this directory and open http://127.0.0.1:8816/.

## Deployment

Upload the contents of this folder to the root of the project repository. Include all assets and `.nojekyll`. Do not upload the private workbench, source registers or backups. The deployment ZIP contains website files only.

The dataset is planned for release after acceptance. The citation is a placeholder.
