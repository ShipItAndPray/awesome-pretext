const officialResources = [
  {
    name: "Pretext repository",
    description: "The upstream project: API, caveats, benchmarks, and the core layout model.",
    url: "https://github.com/chenglou/pretext",
    label: "official repo",
  },
  {
    name: "Live demos by Cheng Lou",
    description: "The fastest way to understand what Pretext unlocks in a browser.",
    url: "https://chenglou.me/pretext/",
    label: "official demos",
  },
  {
    name: "Community demo collection",
    description: "A second set of demos and experiments surfaced by the community.",
    url: "https://somnai-dreams.github.io/pretext-demos/",
    label: "demo archive",
  },
  {
    name: "Development notes",
    description: "The upstream development guide and setup details for working on Pretext itself.",
    url: "https://github.com/chenglou/pretext/blob/main/DEVELOPMENT.md",
    label: "developer notes",
  },
];

const featuredPackages = [
  "pretext-react",
  "pretext-chat",
  "pretext-terminal",
  "pretext-editor",
  "pretext-pdf",
  "pretext-canvas",
];

const packages = [
  {
    name: "pretext-react",
    category: "Foundations",
    summary: "React hooks and UI primitives for stable text measurement, shrinkwrap, and streaming layout.",
    repo: "https://github.com/ShipItAndPray/pretext-react",
    demo: "https://shipitandpray.github.io/pretext-react/",
    tags: ["react", "hooks", "ui", "streaming"],
  },
  {
    name: "pretext-chat",
    category: "Chat & Logs",
    summary: "Chat UI components with message premeasurement, virtualization, and streaming-friendly bubbles.",
    repo: "https://github.com/ShipItAndPray/pretext-chat",
    demo: "https://shipitandpray.github.io/pretext-chat/",
    tags: ["chat", "react", "virtualization", "ai-ui"],
  },
  {
    name: "pretext-terminal",
    category: "Chat & Logs",
    summary: "Canvas-first terminal and log surface for ANSI-rich output and large scrollback.",
    repo: "https://github.com/ShipItAndPray/pretext-terminal",
    demo: "https://shipitandpray.github.io/pretext-terminal/",
    tags: ["terminal", "ansi", "canvas", "logviewer"],
  },
  {
    name: "pretext-editor",
    category: "Editors & Docs",
    summary: "Canvas text editor driven by Pretext line layout instead of DOM text nodes.",
    repo: "https://github.com/ShipItAndPray/pretext-editor",
    demo: "https://shipitandpray.github.io/pretext-editor/",
    tags: ["editor", "canvas", "text", "monaco-alternative"],
  },
  {
    name: "pretext-pdf",
    category: "Editors & Docs",
    summary: "PDF generation with correct wrapping, pagination, and layout using Pretext plus pdf-lib.",
    repo: "https://github.com/ShipItAndPray/pretext-pdf",
    demo: "https://shipitandpray.github.io/pretext-pdf/",
    tags: ["pdf", "docgen", "pagination", "layout"],
  },
  {
    name: "pretext-canvas",
    category: "Graphics & Media",
    summary: "Canvas and WebGL text rendering helpers for wrapped labels, atlases, and text boxes.",
    repo: "https://github.com/ShipItAndPray/pretext-canvas",
    demo: "https://shipitandpray.github.io/pretext-canvas/",
    tags: ["canvas", "webgl", "labels", "rendering"],
  },
  {
    name: "pretext-accordion",
    category: "Foundations",
    summary: "Zero-CLS accordion component with predictive height measurement.",
    repo: "https://github.com/ShipItAndPray/pretext-accordion",
    demo: "https://shipitandpray.github.io/pretext-accordion/",
    tags: ["accordion", "cls", "ui"],
  },
  {
    name: "pretext-blocks",
    category: "Editors & Docs",
    summary: "Notion-style block editor virtualization with predicted block heights.",
    repo: "https://github.com/ShipItAndPray/pretext-blocks",
    demo: "https://shipitandpray.github.io/pretext-blocks/",
    tags: ["blocks", "editor", "virtualization"],
  },
  {
    name: "pretext-captions",
    category: "Editors & Docs",
    summary: "Subtitle editor and renderer with SRT/VTT/ASS support and WCAG-aware layout.",
    repo: "https://github.com/ShipItAndPray/pretext-captions",
    demo: "https://shipitandpray.github.io/pretext-captions/",
    tags: ["subtitles", "captions", "accessibility"],
  },
  {
    name: "pretext-comic",
    category: "Graphics & Media",
    summary: "Speech bubbles and shape-aware text fitting for comics and dialogue-driven scenes.",
    repo: "https://github.com/ShipItAndPray/pretext-comic",
    demo: "https://shipitandpray.github.io/pretext-comic/",
    tags: ["comic", "speech-bubble", "canvas"],
  },
  {
    name: "pretext-diff",
    category: "Editors & Docs",
    summary: "Virtualized side-by-side diff viewer for very large text comparisons.",
    repo: "https://github.com/ShipItAndPray/pretext-diff",
    demo: "https://shipitandpray.github.io/pretext-diff/",
    tags: ["diff", "editor", "virtualization"],
  },
  {
    name: "pretext-docgen",
    category: "Editors & Docs",
    summary: "Document generation without a headless browser, built around deterministic text layout.",
    repo: "https://github.com/ShipItAndPray/pretext-docgen",
    demo: "https://shipitandpray.github.io/pretext-docgen/",
    tags: ["docgen", "pdf", "serverless"],
  },
  {
    name: "pretext-epub",
    category: "Editors & Docs",
    summary: "EPUB pagination engine with direct page access driven by exact text measurements.",
    repo: "https://github.com/ShipItAndPray/pretext-epub",
    demo: "https://shipitandpray.github.io/pretext-epub/",
    tags: ["epub", "pagination", "reading"],
  },
  {
    name: "pretext-forms",
    category: "Foundations",
    summary: "Auto-sizing textarea, input, and select components without a measure-after-paint loop.",
    repo: "https://github.com/ShipItAndPray/pretext-forms",
    demo: "https://shipitandpray.github.io/pretext-forms/",
    tags: ["forms", "textarea", "inputs"],
  },
  {
    name: "pretext-logviewer",
    category: "Chat & Logs",
    summary: "Large log viewer with ANSI colors, search, and virtualized scroll for huge outputs.",
    repo: "https://github.com/ShipItAndPray/pretext-logviewer",
    demo: "https://shipitandpray.github.io/pretext-logviewer/",
    tags: ["logs", "ansi", "search", "virtualization"],
  },
  {
    name: "pretext-markdown",
    category: "Editors & Docs",
    summary: "Streaming markdown renderer with stable block sizing and lower layout jitter.",
    repo: "https://github.com/ShipItAndPray/pretext-markdown",
    demo: "https://shipitandpray.github.io/pretext-markdown/",
    tags: ["markdown", "streaming", "renderer"],
  },
  {
    name: "pretext-masonry",
    category: "Foundations",
    summary: "Pinterest-style masonry layout using predicted card heights instead of post-render reads.",
    repo: "https://github.com/ShipItAndPray/pretext-masonry",
    demo: "https://shipitandpray.github.io/pretext-masonry/",
    tags: ["masonry", "grid", "virtualization"],
  },
  {
    name: "pretext-og",
    category: "Graphics & Media",
    summary: "Open Graph image generation with better text wrapping and layout than typical Satori flows.",
    repo: "https://github.com/ShipItAndPray/pretext-og",
    demo: "https://shipitandpray.github.io/pretext-og/",
    tags: ["og-image", "images", "text-layout"],
  },
  {
    name: "pretext-rn",
    category: "Platform Targets",
    summary: "React Native bridge for text measurement and FlatList-style layout prediction.",
    repo: "https://github.com/ShipItAndPray/pretext-rn",
    demo: "https://shipitandpray.github.io/pretext-rn/",
    tags: ["react-native", "mobile", "bridge"],
  },
  {
    name: "pretext-slides",
    category: "Editors & Docs",
    summary: "Markdown-to-canvas presentation tool with Pretext-powered slide layout.",
    repo: "https://github.com/ShipItAndPray/pretext-slides",
    demo: "https://shipitandpray.github.io/pretext-slides/",
    tags: ["slides", "presentations", "canvas"],
  },
  {
    name: "pretext-ssr",
    category: "Foundations",
    summary: "Font fallback prediction and zero-CLS SSR layout workflows.",
    repo: "https://github.com/ShipItAndPray/pretext-ssr",
    demo: "https://shipitandpray.github.io/pretext-ssr/",
    tags: ["ssr", "fonts", "cls"],
  },
  {
    name: "pretext-table",
    category: "Platform Targets",
    summary: "Virtualized table with Pretext-powered column sizing and lower measurement cost.",
    repo: "https://github.com/ShipItAndPray/pretext-table",
    demo: "https://shipitandpray.github.io/pretext-table/",
    tags: ["table", "data-grid", "virtualization"],
  },
  {
    name: "pretext-tooltip",
    category: "Foundations",
    summary: "Tooltips that know their dimensions before render, avoiding repositioning flash.",
    repo: "https://github.com/ShipItAndPray/pretext-tooltip",
    demo: "https://shipitandpray.github.io/pretext-tooltip/",
    tags: ["tooltip", "overlay", "ui"],
  },
  {
    name: "pretext-truncate",
    category: "Foundations",
    summary: "Multiline truncation without content flash or measure-after-paint hacks.",
    repo: "https://github.com/ShipItAndPray/pretext-truncate",
    demo: "https://shipitandpray.github.io/pretext-truncate/",
    tags: ["truncate", "multiline", "ui"],
  },
  {
    name: "pretext-tts-highlight",
    category: "Graphics & Media",
    summary: "Word-by-word highlight rendering synced to TTS or other audio timelines.",
    repo: "https://github.com/ShipItAndPray/pretext-tts-highlight",
    demo: "https://shipitandpray.github.io/pretext-tts-highlight/",
    tags: ["tts", "audio", "karaoke"],
  },
  {
    name: "pretext-typewriter",
    category: "Foundations",
    summary: "Streaming typewriter effects that pre-measure the final box and reduce shift.",
    repo: "https://github.com/ShipItAndPray/pretext-typewriter",
    demo: "https://shipitandpray.github.io/pretext-typewriter/",
    tags: ["typewriter", "animation", "streaming"],
  },
  {
    name: "pretext-webxr",
    category: "Graphics & Media",
    summary: "XR-oriented text layout helpers for canvas, 3D, and spatial text surfaces.",
    repo: "https://github.com/ShipItAndPray/pretext-webxr",
    demo: "https://shipitandpray.github.io/pretext-webxr/",
    tags: ["webxr", "3d", "spatial-ui"],
  },
];

const communityProjects = [
  {
    name: "pinch-type",
    label: "community app",
    description: "Pinch-to-zoom typography experiment built on Pretext.",
    url: "https://github.com/lucascrespo23/pinch-type",
  },
  {
    name: "pretext-playground",
    label: "creative coding",
    description: "A strong interactive playground showing how far text-driven scenes can go.",
    url: "https://github.com/0xNyk/pretext-playground",
  },
  {
    name: "react-pretext",
    label: "react wrapper",
    description: "Another React-facing package that demonstrates external ecosystem demand.",
    url: "https://github.com/jihchi/react-pretext",
  },
  {
    name: "pretext-rich",
    label: "rich text",
    description: "Inline rich text layout engine layered on top of Pretext.",
    url: "https://github.com/joeflateau-octavius/pretext-rich",
  },
  {
    name: "textmash",
    label: "layout experiment",
    description: "A compact demo showing text wrapping around other text chunks.",
    url: "https://github.com/cocktailpeanut/textmash",
  },
  {
    name: "pretext-php",
    label: "language port",
    description: "A PHP port that proves the ideas can travel outside TypeScript.",
    url: "https://github.com/mateffy/pretext-php",
  },
];

const stats = [
  { label: "upstream stars", value: "18,006" },
  { label: "ecosystem packages", value: String(packages.length) },
  { label: "live demos verified", value: String(packages.length) },
  { label: "community examples", value: String(communityProjects.length) },
];

const filters = ["All", ...Array.from(new Set(packages.map((item) => item.category)))];

const statGrid = document.getElementById("stat-grid");
const officialGrid = document.getElementById("official-grid");
const featuredBand = document.getElementById("featured-band");
const packageGrid = document.getElementById("package-grid");
const communityGrid = document.getElementById("community-grid");
const filterRow = document.getElementById("filter-row");
const searchInput = document.getElementById("search-input");

let activeFilter = "All";
let searchTerm = "";

function cardLinks(items) {
  return `
    <div class="card-links">
      ${items
        .map(
          (item) =>
            `<a class="button secondary" href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`
        )
        .join("")}
    </div>
  `;
}

function renderStats() {
  statGrid.innerHTML = stats
    .map(
      (stat) => `
        <article class="stat">
          <span class="mini-label">${stat.label}</span>
          <strong>${stat.value}</strong>
        </article>
      `
    )
    .join("");
}

function renderOfficial() {
  officialGrid.innerHTML = officialResources
    .map(
      (item) => `
        <article class="card">
          <div class="meta">${item.label}</div>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          ${cardLinks([{ href: item.url, label: "open" }])}
        </article>
      `
    )
    .join("");
}

function renderFeatured() {
  const featured = packages.filter((item) => featuredPackages.includes(item.name));
  featuredBand.innerHTML = featured
    .map(
      (item) => `
        <article class="featured-card">
          <div class="meta">${item.category}</div>
          <h3>${item.name}</h3>
          <p>${item.summary}</p>
          <div class="tag-row">${item.tags
            .slice(0, 3)
            .map((tag) => `<span class="tag secondary">${tag}</span>`)
            .join("")}</div>
          ${cardLinks([
            { href: item.repo, label: "repo" },
            { href: item.demo, label: "demo" },
          ])}
        </article>
      `
    )
    .join("");
}

function renderFilters() {
  filterRow.innerHTML = filters
    .map(
      (filter) => `
        <button class="chip ${filter === activeFilter ? "active" : ""}" data-filter="${filter}">
          ${filter}
        </button>
      `
    )
    .join("");

  filterRow.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderFilters();
      renderPackages();
    });
  });
}

function renderPackages() {
  const term = searchTerm.trim().toLowerCase();
  const visible = packages.filter((item) => {
    const matchesFilter = activeFilter === "All" || item.category === activeFilter;
    const haystack = [item.name, item.summary, item.category, ...item.tags].join(" ").toLowerCase();
    const matchesSearch = !term || haystack.includes(term);
    return matchesFilter && matchesSearch;
  });

  if (visible.length === 0) {
    packageGrid.innerHTML = `
      <div class="empty-state">
        No packages matched this search. Try a broader term or switch back to the full catalog.
      </div>
    `;
    return;
  }

  packageGrid.innerHTML = visible
    .map(
      (item) => `
        <article class="card">
          <div class="meta">${item.category}</div>
          <h3>${item.name}</h3>
          <p>${item.summary}</p>
          <div class="tag-row">
            ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
          ${cardLinks([
            { href: item.repo, label: "repo" },
            { href: item.demo, label: "demo" },
          ])}
        </article>
      `
    )
    .join("");
}

function renderCommunity() {
  communityGrid.innerHTML = communityProjects
    .map(
      (item) => `
        <article class="card">
          <div class="meta">${item.label}</div>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          ${cardLinks([{ href: item.url, label: "repo" }])}
        </article>
      `
    )
    .join("");
}

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  renderPackages();
});

renderStats();
renderOfficial();
renderFeatured();
renderFilters();
renderPackages();
renderCommunity();
