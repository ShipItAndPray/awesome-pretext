# awesome-pretext

[![Live site](https://img.shields.io/badge/site-live-0f766e)](https://shipitandpray.github.io/awesome-pretext/)
[![Upstream](https://img.shields.io/badge/upstream-chenglou%2Fpretext-111827)](https://github.com/chenglou/pretext)

A curated list of projects, packages, demos, and experiments built with [Pretext](https://github.com/chenglou/pretext), Cheng Lou's text layout engine for measuring and laying out multiline text without DOM reflow.

This list is meant to be useful to the broader Pretext community:

- official resources first
- ecosystem packages with live demos
- selected community experiments and integrations

## Live Site

- [awesome-pretext landing page](https://shipitandpray.github.io/awesome-pretext/)

## Why Pretext matters

Pretext lets you answer layout questions before paint:

- measure multiline text without `getBoundingClientRect()`
- predict height for virtualization and zero-CLS UI
- drive canvas, SVG, WebGL, and server-side rendering paths
- build shrinkwrapped, width-aware text interfaces in plain arithmetic

## Official Pretext Resources

- [Pretext repository](https://github.com/chenglou/pretext)
- [Live demos by Cheng Lou](https://chenglou.me/pretext/)
- [Additional community demos](https://somnai-dreams.github.io/pretext-demos/)
- [Development notes](https://github.com/chenglou/pretext/blob/main/DEVELOPMENT.md)

## Flagship Ecosystem Packages

These are the strongest package-shaped projects in the current ecosystem.

| Project | What it does | Links |
| --- | --- | --- |
| [`pretext-react`](https://github.com/ShipItAndPray/pretext-react) | React hooks and UI primitives for stable text sizing, bubbles, streaming text, and virtualization. | [demo](https://shipitandpray.github.io/pretext-react/) |
| [`pretext-chat`](https://github.com/ShipItAndPray/pretext-chat) | Chat UI components with precomputed message sizing and streaming-friendly layout. | [demo](https://shipitandpray.github.io/pretext-chat/) |
| [`pretext-terminal`](https://github.com/ShipItAndPray/pretext-terminal) | Canvas-first terminal and log UI for large scrollback and ANSI-rich output. | [demo](https://shipitandpray.github.io/pretext-terminal/) |
| [`pretext-editor`](https://github.com/ShipItAndPray/pretext-editor) | Canvas text editor using Pretext for line measurement instead of DOM text nodes. | [demo](https://shipitandpray.github.io/pretext-editor/) |
| [`pretext-pdf`](https://github.com/ShipItAndPray/pretext-pdf) | PDF generation with correct wrapping and pagination powered by Pretext + pdf-lib. | [demo](https://shipitandpray.github.io/pretext-pdf/) |

## Ecosystem Catalog

All demo links below were verified live on March 30, 2026.

### Foundations and UI Primitives

| Project | Description | Demo |
| --- | --- | --- |
| [`pretext-react`](https://github.com/ShipItAndPray/pretext-react) | React hooks and components for stable text measurement and streaming layout. | [live](https://shipitandpray.github.io/pretext-react/) |
| [`pretext-accordion`](https://github.com/ShipItAndPray/pretext-accordion) | Zero-CLS accordion with predictive height measurement. | [live](https://shipitandpray.github.io/pretext-accordion/) |
| [`pretext-forms`](https://github.com/ShipItAndPray/pretext-forms) | Auto-sizing form controls without DOM reflow. | [live](https://shipitandpray.github.io/pretext-forms/) |
| [`pretext-tooltip`](https://github.com/ShipItAndPray/pretext-tooltip) | Tooltips that know their size before render. | [live](https://shipitandpray.github.io/pretext-tooltip/) |
| [`pretext-truncate`](https://github.com/ShipItAndPray/pretext-truncate) | Multiline truncation without content flash. | [live](https://shipitandpray.github.io/pretext-truncate/) |
| [`pretext-ssr`](https://github.com/ShipItAndPray/pretext-ssr) | SSR-first font loading and fallback prediction for zero layout shift. | [live](https://shipitandpray.github.io/pretext-ssr/) |
| [`pretext-typewriter`](https://github.com/ShipItAndPray/pretext-typewriter) | Streaming text animation with stable final-height measurement. | [live](https://shipitandpray.github.io/pretext-typewriter/) |
| [`pretext-masonry`](https://github.com/ShipItAndPray/pretext-masonry) | Masonry grid layout driven by predicted card heights. | [live](https://shipitandpray.github.io/pretext-masonry/) |
| [`pretext-overflow-menu`](https://github.com/ShipItAndPray/pretext-overflow-menu) | Nav bar that collapses items into "+N more" dropdown correctly on frame 1. | [live](https://shipitandpray.github.io/pretext-overflow-menu/) |
| [`pretext-animate`](https://github.com/ShipItAndPray/pretext-animate) | Physics-based text animations with zero layout reflows. 120fps on mid-range devices. | [live](https://shipitandpray.github.io/pretext-animate/) |

### Chat, Terminal, and Log Interfaces

| Project | Description | Demo |
| --- | --- | --- |
| [`pretext-chat`](https://github.com/ShipItAndPray/pretext-chat) | React chat surfaces for message streaming and virtualized history. | [live](https://shipitandpray.github.io/pretext-chat/) |
| [`pretext-terminal`](https://github.com/ShipItAndPray/pretext-terminal) | Canvas terminal for large scrollback and ANSI rendering. | [live](https://shipitandpray.github.io/pretext-terminal/) |
| [`pretext-logviewer`](https://github.com/ShipItAndPray/pretext-logviewer) | Virtualized log viewer for very large ANSI-heavy outputs. | [live](https://shipitandpray.github.io/pretext-logviewer/) |
| [`pretext-repl`](https://github.com/ShipItAndPray/pretext-repl) | REPL/notebook UI where output cells expand without shifting other cells. | [live](https://shipitandpray.github.io/pretext-repl/) |

### Editors, Documents, and Reading Systems

| Project | Description | Demo |
| --- | --- | --- |
| [`pretext-editor`](https://github.com/ShipItAndPray/pretext-editor) | Canvas editor with hidden textarea input and Pretext line layout. | [live](https://shipitandpray.github.io/pretext-editor/) |
| [`pretext-blocks`](https://github.com/ShipItAndPray/pretext-blocks) | Notion-style block editor virtualization. | [live](https://shipitandpray.github.io/pretext-blocks/) |
| [`pretext-markdown`](https://github.com/ShipItAndPray/pretext-markdown) | Streaming markdown rendering with stable block heights. | [live](https://shipitandpray.github.io/pretext-markdown/) |
| [`pretext-diff`](https://github.com/ShipItAndPray/pretext-diff) | Large side-by-side diff viewer with virtualized rendering. | [live](https://shipitandpray.github.io/pretext-diff/) |
| [`pretext-pdf`](https://github.com/ShipItAndPray/pretext-pdf) | PDF generation with wrapped text and pagination. | [live](https://shipitandpray.github.io/pretext-pdf/) |
| [`pretext-docgen`](https://github.com/ShipItAndPray/pretext-docgen) | JS-first document generation without a headless browser. | [live](https://shipitandpray.github.io/pretext-docgen/) |
| [`pretext-epub`](https://github.com/ShipItAndPray/pretext-epub) | EPUB pagination with direct page access. | [live](https://shipitandpray.github.io/pretext-epub/) |
| [`pretext-slides`](https://github.com/ShipItAndPray/pretext-slides) | Markdown-to-canvas presentation system. | [live](https://shipitandpray.github.io/pretext-slides/) |
| [`pretext-captions`](https://github.com/ShipItAndPray/pretext-captions) | Subtitle editor and renderer with WCAG-aware layout. | [live](https://shipitandpray.github.io/pretext-captions/) |
| [`pretext-diff-navigator`](https://github.com/ShipItAndPray/pretext-diff-navigator) | Side-by-side diff viewer with drift-free synchronized scrolling. | [live](https://shipitandpray.github.io/pretext-diff-navigator/) |

### Graphics, Media, and Canvas Rendering

| Project | Description | Demo |
| --- | --- | --- |
| [`pretext-canvas`](https://github.com/ShipItAndPray/pretext-canvas) | Canvas and WebGL text rendering helpers powered by Pretext. | [live](https://shipitandpray.github.io/pretext-canvas/) |
| [`pretext-comic`](https://github.com/ShipItAndPray/pretext-comic) | Speech bubbles and shape-aware text fitting for comics. | [live](https://shipitandpray.github.io/pretext-comic/) |
| [`pretext-og`](https://github.com/ShipItAndPray/pretext-og) | Open Graph image generation that fixes wrapping issues in Satori-style flows. | [live](https://shipitandpray.github.io/pretext-og/) |
| [`pretext-tts-highlight`](https://github.com/ShipItAndPray/pretext-tts-highlight) | Karaoke-style word highlighting synced to audio or TTS. | [live](https://shipitandpray.github.io/pretext-tts-highlight/) |
| [`pretext-webxr`](https://github.com/ShipItAndPray/pretext-webxr) | 3D and XR-oriented text layout surfaces. | [live](https://shipitandpray.github.io/pretext-webxr/) |
| [`pretext-sparkline`](https://github.com/ShipItAndPray/pretext-sparkline) | Inline sparklines with collision-free value labels computed before render. | [live](https://shipitandpray.github.io/pretext-sparkline/) |
| [`pretext-word-cloud`](https://github.com/ShipItAndPray/pretext-word-cloud) | Deterministic word cloud layout. 500x faster than d3-cloud. | [live](https://shipitandpray.github.io/pretext-word-cloud/) |
| [`pretext-map-labels`](https://github.com/ShipItAndPray/pretext-map-labels) | Collision-free label placement for 2D maps and diagrams. | [live](https://shipitandpray.github.io/pretext-map-labels/) |
| [`pretext-gantt`](https://github.com/ShipItAndPray/pretext-gantt) | Zero-flicker Gantt chart with labels measured and placed correctly on frame 1. | [live](https://shipitandpray.github.io/pretext-gantt/) |
| [`pretext-infinite-canvas`](https://github.com/ShipItAndPray/pretext-infinite-canvas) | Figma/Miro-style infinite canvas with correct text wrapping at any zoom level. | [live](https://shipitandpray.github.io/pretext-infinite-canvas/) |
| [`pretext-code-minimap`](https://github.com/ShipItAndPray/pretext-code-minimap) | VS Code-style code minimap for the browser. Pixel-accurate, Canvas-rendered. | [live](https://shipitandpray.github.io/pretext-code-minimap/) |

### Tables, Data, and Platform Targets

| Project | Description | Demo |
| --- | --- | --- |
| [`pretext-table`](https://github.com/ShipItAndPray/pretext-table) | Virtualized data table with Pretext-powered column sizing. | [live](https://shipitandpray.github.io/pretext-table/) |
| [`pretext-rn`](https://github.com/ShipItAndPray/pretext-rn) | React Native bridge for text measurement and list layout. | [live](https://shipitandpray.github.io/pretext-rn/) |

### Testing, DevTools, and CI

| Project | Description | Demo |
| --- | --- | --- |
| [`pretext-storybook`](https://github.com/ShipItAndPray/pretext-storybook) | Stress-test UI components with dynamic text. Flags overflow before it ships. | [live](https://shipitandpray.github.io/pretext-storybook/) |
| [`pretext-devtools`](https://github.com/ShipItAndPray/pretext-devtools) | Overlay Pretext text measurements on any webpage. See predicted vs actual dimensions. | [live](https://shipitandpray.github.io/pretext-devtools/) |
| [`pretext-a11y`](https://github.com/ShipItAndPray/pretext-a11y) | WCAG text overflow audit in CI. No browser needed. | [live](https://shipitandpray.github.io/pretext-a11y/) |
| [`pretext-i18n`](https://github.com/ShipItAndPray/pretext-i18n) | Catch i18n text overflow at build time. No browser needed. | [live](https://shipitandpray.github.io/pretext-i18n/) |
| [`pretext-overflow-monitor`](https://github.com/ShipItAndPray/pretext-overflow-monitor) | Detect text overflow in CI before any browser render. Zero DOM, pure arithmetic. | [live](https://shipitandpray.github.io/pretext-overflow-monitor/) |

## Selected Community Projects

This section exists so the list is useful beyond one GitHub account.

| Project | Why it is interesting |
| --- | --- |
| [`pinch-type`](https://github.com/lucascrespo23/pinch-type) | Highest-visibility public experiment built on Pretext right now. |
| [`pretext-playground`](https://github.com/0xNyk/pretext-playground) | Strong creative coding showcase with multiple text-driven scenes. |
| [`react-pretext`](https://github.com/jihchi/react-pretext) | Earlier React wrapper for Pretext-style measurement workflows. |
| [`pretext-rich`](https://github.com/joeflateau-octavius/pretext-rich) | Inline rich text engine on top of Pretext. |
| [`textmash`](https://github.com/cocktailpeanut/textmash) | Experimental text-wrapping demo around other text chunks. |
| [`pretext-php`](https://github.com/mateffy/pretext-php) | Interesting port that shows the design can travel outside JS. |

## What makes a good Pretext project

- it solves a real layout problem before paint
- it demonstrates something hard to do with plain DOM measurement
- it ships a live demo, not just a repo
- it explains why Pretext is the enabling primitive

## Add a project

Open a PR with:

- repo link
- one-line description
- live demo link if available
- what Pretext unlocks in that project

## Attribution

This is an independent ecosystem list. Pretext itself is authored and maintained by [Cheng Lou](https://github.com/chenglou), and the canonical upstream project is [chenglou/pretext](https://github.com/chenglou/pretext).
