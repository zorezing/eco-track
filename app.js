const topics = [
  {
    id: "co2",
    title: "Global CO2 Emissions",
    shortLabel: "Annual fossil fuel output",
    value: "36.8 Billion tons/year",
    detailValue: "36.8 Gt CO2 per year",
    chartLabel: "CO2 trend (Gt)",
    causes:
      "Coal and gas power generation, heavy industry, and road transport dominate global emissions.",
    impact:
      "Warming temperatures, stronger heat waves, and climate system instability increase risks for ecosystems and communities.",
    icon: "☁",
    color: "#c94a4a",
    sampleData: [31, 33, 35, 36.8]
  },
  {
    id: "deforestation",
    title: "Deforestation Rate",
    shortLabel: "Forest area lost annually",
    value: "10 Million hectares/year",
    detailValue: "~10M ha cleared each year",
    chartLabel: "Forest loss (M ha)",
    causes:
      "Agricultural expansion, logging, cattle ranching, and infrastructure development accelerate forest clearing.",
    impact:
      "Biodiversity declines, carbon sinks weaken, and local rainfall cycles become less stable.",
    icon: "🌲",
    color: "#8a5a44",
    sampleData: [12, 11, 10.8, 10]
  },
  {
    id: "ocean-plastic",
    title: "Ocean Plastic Levels",
    shortLabel: "Waste entering oceans",
    value: "11 Million tons/year",
    detailValue: "11M tons enter oceans yearly",
    chartLabel: "Plastic inflow (M tons)",
    causes:
      "Poor waste collection, single-use packaging, and river transport move plastics from land to sea.",
    impact:
      "Marine life injury, food chain contamination, and coastal economy losses from polluted waters.",
    icon: "💧",
    color: "#2f83c8",
    sampleData: [8, 9.5, 10.2, 11]
  },
  {
    id: "renewable",
    title: "Renewable Energy Growth",
    shortLabel: "Share of global electricity",
    value: "30% of global electricity",
    detailValue: "Renewables now supply 30%",
    chartLabel: "Renewable share (%)",
    causes:
      "Falling solar and wind costs, policy incentives, and grid modernization support adoption.",
    impact:
      "Cleaner air, lower long-term emissions, and improved energy security across regions.",
    icon: "🌿",
    color: "#3e9b57",
    sampleData: [22, 25, 28, 30]
  }
];

const dashboardBriefs = [
  {
    label: "Coverage",
    value: "4 system indicators",
    note: "Emissions, forests, plastics, and renewable power"
  },
  {
    label: "Data basis",
    value: "Trend + context",
    note: "Each view combines visual signals, snapshots, and explanations"
  },
  {
    label: "Sources used",
    value: "OWID, NOAA, WRI, IEA, UNEP",
    note: "Each topic includes direct source and graph links"
  }
];

const topicGuides = {
  co2: {
    summary:
      "This indicator tracks how much carbon dioxide is released from fossil fuels and industry. It is one of the clearest system-wide signals for climate pressure because it links energy use, transport demand, and industrial output.",
    whyItMatters: [
      "CO2 accumulates in the atmosphere and keeps warming influence in the climate system for decades to centuries.",
      "Small annual increases compound over time, so flat emissions are not enough to stabilize temperatures.",
      "Power generation, industry, and transport remain the biggest structural levers for reduction."
    ],
    watchList: ["Atmospheric concentration in ppm", "Power-sector fuel mix", "Per-capita emissions gaps"],
    methodology:
      "Dashboard values combine recent global reporting from NOAA, the IEA, and Our World in Data. Country charts are relative comparisons rather than exact inventory tables."
  },
  deforestation: {
    summary:
      "Forest-loss reporting is more complex than simple tree removal counts. This view focuses on deforestation and primary forest loss because those changes carry the largest biodiversity and carbon consequences.",
    whyItMatters: [
      "Tropical forests store carbon, regulate rainfall, and anchor biodiversity hotspots.",
      "Primary forest loss is especially damaging because mature ecosystems are difficult to recover quickly.",
      "Fire-driven loss can spike quickly during drought years and overwhelm slower restoration gains."
    ],
    watchList: ["Primary forest loss", "Fire-related loss", "Agricultural expansion pressures"],
    methodology:
      "The dashboard uses FAO-style long-run deforestation framing alongside WRI and Global Forest Watch reporting for more recent tropical loss signals."
  },
  "ocean-plastic": {
    summary:
      "Ocean plastic is best understood as a leakage problem across the full material chain: production, product design, collection, sorting, recycling, and waste containment.",
    whyItMatters: [
      "Once plastic fragments into microplastics it becomes much harder to recover from ecosystems.",
      "A relatively small set of high-leakage pathways, especially unmanaged waste and rivers, drive large downstream impacts.",
      "Production growth can outpace waste-system improvements, increasing total leakage risk even where recycling expands."
    ],
    watchList: ["Global plastic production", "Mismanaged waste", "River and coastal leakage routes"],
    methodology:
      "Values combine UNEP framing with Our World in Data and OECD synthesis. Several charts are directional indices to show system movement rather than exact tonnage by year."
  },
  renewable: {
    summary:
      "Renewable electricity is one of the clearest positive transition signals because it shows whether power systems are shifting away from coal and gas fast enough to change emissions trajectories.",
    whyItMatters: [
      "Electricity decarbonization unlocks cleaner transport, buildings, and parts of industry.",
      "Fast growth in solar and wind changes fuel-import exposure and can improve energy security.",
      "Deployment alone is not enough: grids, storage, and permitting determine whether new capacity actually displaces fossil generation."
    ],
    watchList: ["Renewable share of electricity", "Annual capacity additions", "Grid and storage buildout"],
    methodology:
      "This view uses Our World in Data graph series and IEA market reporting. Relative bar charts compare scale across technologies and countries without implying exact rank gaps."
  }
};

const glossaryTerms = [
  {
    term: "ppm",
    short: "Parts per million",
    definition: "A concentration unit used for gases in the atmosphere. 427 ppm means 427 molecules of CO2 for every one million air molecules."
  },
  {
    term: "Per-capita emissions",
    short: "Emissions per person",
    definition: "A way to compare average emissions across countries by dividing total emissions by population size."
  },
  {
    term: "Primary forest loss",
    short: "Loss of mature natural forest",
    definition: "The removal or severe degradation of old, naturally regenerated forest ecosystems that hold especially high carbon and biodiversity value."
  },
  {
    term: "Mismanaged waste",
    short: "Waste likely to leak",
    definition: "Waste that is not safely collected, contained, recycled, or disposed of, creating a higher risk of entering land and water systems."
  },
  {
    term: "Renewable share",
    short: "Portion of electricity from renewables",
    definition: "The percentage of total electricity generation supplied by renewable sources such as solar, wind, hydro, and geothermal."
  }
];

const timelineMilestones = [
  {
    year: "2000",
    title: "Rising pressure across systems",
    points: [
      "Global fossil CO2 emissions were much lower than today but already climbing fast.",
      "Plastic production and waste volumes were beginning the steep growth phase now visible in long-run charts.",
      "Renewables were still a relatively small part of global electricity supply."
    ]
  },
  {
    year: "2010",
    title: "Acceleration decade begins",
    points: [
      "Solar and wind costs started falling quickly enough to change energy planning.",
      "Forest-loss monitoring became more visible through satellite-based systems and public dashboards.",
      "Plastic pollution moved from a waste topic to a full environmental systems issue."
    ]
  },
  {
    year: "2020",
    title: "Transition and risk both intensify",
    points: [
      "Renewable deployment became a central climate strategy, but grids and storage lagged behind demand.",
      "Primary forest loss and fire-driven events remained severe in tropical regions.",
      "Atmospheric CO2 concentration kept rising despite temporary shocks to economic activity."
    ]
  },
  {
    year: "2026",
    title: "Source-backed climate dashboard era",
    points: [
      "Renewables supply roughly 30% of global electricity in current public datasets used here.",
      "NOAA monthly CO2 readings remain above 427 ppm globally, showing cumulative climate pressure.",
      "Public graph libraries now make cross-topic climate literacy much easier to build."
    ]
  }
];

const sourceLibrary = [
  {
    topic: "CO2",
    summary: "Atmospheric concentration, national emissions, and per-capita comparisons.",
    links: [
      {
        label: "OWID Graph - Annual CO2 Emissions by Country",
        url: "https://ourworldindata.org/grapher/annual-co2-emissions-per-country?tab=chart"
      },
      {
        label: "OWID Graph - CO2 Emissions per Capita",
        url: "https://ourworldindata.org/grapher/co-emissions-per-capita?tab=chart"
      },
      { label: "NOAA - Global CO2 Trend", url: "https://gml.noaa.gov/ccgg/trends/global.html" }
    ]
  },
  {
    topic: "Deforestation",
    summary: "Forest change, primary forest loss, and near-real-time monitoring sources.",
    links: [
      { label: "OWID - Deforestation", url: "https://ourworldindata.org/deforestation" },
      { label: "Global Forest Watch Dashboard", url: "https://www.globalforestwatch.org/dashboards/global/" },
      {
        label: "WRI Global Forest Review",
        url: "https://research.wri.org/gfr/latest-analysis-deforestation-trends"
      }
    ]
  },
  {
    topic: "Ocean Plastic",
    summary: "Production growth, leakage pathways, and policy outlooks.",
    links: [
      { label: "OWID - Plastic Pollution", url: "https://ourworldindata.org/plastic-pollution" },
      {
        label: "OWID Graph - Global Plastics Production",
        url: "https://ourworldindata.org/grapher/global-plastics-production?tab=chart"
      },
      { label: "OECD - Global Plastics Outlook", url: "https://www.oecd.org/environment/plastics/" }
    ]
  },
  {
    topic: "Renewables",
    summary: "Power share, solar and wind growth, and market outlook reporting.",
    links: [
      { label: "OWID - Renewable Energy", url: "https://ourworldindata.org/renewable-energy" },
      {
        label: "OWID Graph - Share of Electricity from Renewables",
        url: "https://ourworldindata.org/grapher/share-electricity-renewables?tab=chart"
      },
      { label: "IEA - Renewables 2024", url: "https://www.iea.org/reports/renewables-2024" }
    ]
  }
];

const newsItems = [
  {
    title: "Renewable buildout kept breaking records in 2025",
    source: "IEA and market trackers",
    summary:
      "New clean-power additions remained high enough to keep renewables on a strong growth path, especially in solar-heavy markets.",
    why:
      "This matters because power-sector gains can prevent a much larger rise in global emissions even when energy demand grows."
  },
  {
    title: "Low-emission transport zones continue to spread across cities",
    source: "City climate policy updates",
    summary:
      "Urban transport policies are increasingly focused on air quality, congestion, and electrified mobility instead of fuel-only targets.",
    why:
      "Transport remains a major emissions source, so city policy can change exposure faster than national fleet turnover alone."
  },
  {
    title: "River-focused cleanup and waste capture programs are expanding",
    source: "UNEP and NGO program tracking",
    summary:
      "Cleanup strategies are moving upstream toward rivers and drainage systems where leakage can be intercepted before plastics disperse widely.",
    why:
      "Stopping leakage earlier is usually cheaper and more effective than recovering fragmented plastic from coastal and marine ecosystems."
  },
  {
    title: "Forest restoration is improving in some degraded landscapes",
    source: "FAO and restoration programs",
    summary:
      "Reforestation and landscape recovery projects are delivering local gains, but they are not yet offsetting severe primary forest losses in the tropics.",
    why:
      "This distinction matters because restoration and avoided deforestation are complementary, not interchangeable, climate strategies."
  }
];

const tips = [
  "Use public transport or carpool at least twice per week.",
  "Switch to LED lighting and unplug idle electronics.",
  "Choose reusable bottles and bags to cut plastic waste.",
  "Plan one plant-based day each week to reduce diet emissions.",
  "Support products with certified sustainable sourcing labels."
];

const transportOptions = [
  { label: "Car", kgCo2PerKm: 0.21 },
  { label: "Bus", kgCo2PerKm: 0.089 },
  { label: "Train", kgCo2PerKm: 0.041 },
  { label: "Walk/Bike", kgCo2PerKm: 0 }
];

const dietOptions = [
  { label: "Meat-heavy", tonsPerYear: 3.3 },
  { label: "Balanced", tonsPerYear: 2.5 },
  { label: "Vegetarian", tonsPerYear: 1.7 },
  { label: "Vegan", tonsPerYear: 1.5 }
];

const state = {
  activeView: "dashboard",
  activeTopicId: null,
  selectedDiet: "Balanced"
};

const views = {
  dashboard: document.getElementById("dashboardView"),
  detail: document.getElementById("detailView"),
  news: document.getElementById("newsView"),
  calculator: document.getElementById("calculatorView"),
  tips: document.getElementById("tipsView"),
  sources: document.getElementById("sourcesView")
};

function renderDashboard() {
  views.dashboard.innerHTML = `
    <div class="section-head">
      <div>
        <p class="frame-tag">Green Index</p>
        <h2>Environmental Indicators</h2>
      </div>
    </div>
    <p class="subtle">Tap a card to explore data, charts, sources, and context.</p>

    <div class="grid">
      ${topics
        .map(
          (topic, index) => `
            <article class="metric-card" style="--accent: ${topic.color}; animation-delay: ${
            index * 80
          }ms" data-topic-id="${topic.id}">
              <div class="icon" aria-hidden="true">${topic.icon}</div>
              <div class="value">${topic.value}</div>
              <p class="label">${topic.shortLabel}</p>
              <p class="mini-id">E-${String(index + 1).padStart(2, "0")}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;

  views.dashboard.querySelectorAll(".metric-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.activeTopicId = card.dataset.topicId;
      showView("detail");
    });
  });
}

function renderDetail() {
  const topic = topics.find((item) => item.id === state.activeTopicId) || topics[0];
  views.detail.innerHTML = buildTopicDetailLayout(topic);

  document.getElementById("backToDashboard").addEventListener("click", () => showView("dashboard"));

  views.detail.querySelectorAll("[data-open-url]").forEach((button) => {
    button.addEventListener("click", () => {
      window.open(button.dataset.openUrl, "_blank", "noopener,noreferrer");
    });
  });
}

function buildTopicDetailLayout(topic) {
  const panelMarkup = {
    co2: buildCo2Panel(),
    deforestation: buildDeforestationPanel(),
    "ocean-plastic": buildOceanPlasticPanel(),
    renewable: buildRenewablePanel()
  };

  return `
    <div class="detail-top">
      <div>
        <p class="frame-tag">Deep Dive</p>
        <h2>${topic.title}</h2>
      </div>
      <button type="button" class="ghost-btn" id="backToDashboard">Back</button>
    </div>
    ${buildTopicContext(topic.id)}
    ${panelMarkup[topic.id] || buildDefaultPanel(topic)}
    ${buildTimelineSection()}
    ${buildDetailGlossary()}
  `;
}

function buildDetailGlossary() {
  return `
    <article class="panel glossary-panel">
      <div class="section-head compact-head">
        <div>
          <p class="frame-tag">Quick Reference</p>
          <h3>Glossary</h3>
        </div>
      </div>
      <p class="subtle">Hover or focus a term to see the definition.</p>
      ${buildGlossaryCloud(glossaryTerms)}
    </article>
  `;
}

function buildTimelineSection() {
  const cards = timelineMilestones
    .map(
      (item) => `
        <article class="timeline-card">
          <p class="timeline-year">${item.year}</p>
          <h3>${item.title}</h3>
          <ul class="bullet-list timeline-points">
            ${item.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");

  return `
    <section class="timeline-section">
      <div class="section-head compact-head">
        <div>
          <p class="frame-tag">Timeline</p>
          <h3>How These Indicators Shifted From 2000 To 2026</h3>
        </div>
      </div>
      <div class="timeline-grid">${cards}</div>
    </section>
  `;
}

function buildCo2Panel() {
  return `
    <section class="panel-stack theme-co2">
      <div class="infographic">
        <article class="info-hero">
          <p class="info-hero-tag">Annual Global Output</p>
          <h3 class="info-hero-value">36.8 <span>Billion tons CO2 per year</span></h3>
          <p class="info-hero-note">Fossil fuel combustion and industrial processes</p>
        </article>

        ${buildLargeRings([
          { label: "Power", value: 41 },
          { label: "Transport", value: 24 },
          { label: "Industry", value: 18 },
          { label: "Buildings", value: 9 }
        ], "Emissions By Sector")}

        <article class="info-card">
          <h3 class="info-card-title">Emissions Trend 1990–2024 (Gt CO2)</h3>
          ${buildAreaChart([22.4, 24.0, 25.1, 29.0, 31.2, 33.0, 35.0, 36.1, 36.3, 36.8], "1990", "2024")}
        </article>

        <div class="info-row">
          <article class="info-card">
            <h3 class="info-card-title">Top Emitting Countries (% of global)</h3>
            ${buildVerticalBars([
              { label: "China", value: 30, unit: "%" },
              { label: "US", value: 14, unit: "%" },
              { label: "India", value: 7, unit: "%" },
              { label: "EU", value: 7, unit: "%" },
              { label: "Russia", value: 5, unit: "%" },
              { label: "Japan", value: 3, unit: "%" }
            ])}
          </article>
          <article class="info-card">
            <h3 class="info-card-title">Per-Capita Emissions</h3>
            ${buildProgressBars([
              { label: "United States", value: 14.4, displayValue: "14.4 t" },
              { label: "Russia", value: 11.8, displayValue: "11.8 t" },
              { label: "China", value: 8.0, displayValue: "8.0 t" },
              { label: "EU average", value: 5.7, displayValue: "5.7 t" },
              { label: "India", value: 2.0, displayValue: "2.0 t" }
            ])}
          </article>
        </div>

        <article class="info-card">
          <h3 class="info-card-title">Key Figures</h3>
          ${buildStatRow([
            { label: "Atmospheric CO2", value: "427 ppm", sub: "NOAA global, Dec 2025" },
            { label: "Mauna Loa", value: "429 ppm", sub: "Station reading, Feb 2026" },
            { label: "Annual growth", value: "+1.9%", sub: "Energy-related CO2" },
            { label: "Advanced economies", value: "Decade low", sub: "IEA headline trend" }
          ])}
        </article>

        <article class="info-card info-insight-card">
          <h4>Insight</h4>
          <p>Emissions continue to rise globally, but clean-energy deployment has prevented a much steeper increase. The remaining gap is heavily tied to power, industry, and transport.</p>
        </article>

        <button type="button" class="primary-btn detail-action-btn" data-open-url="https://ourworldindata.org/co2-and-greenhouse-gas-emissions">Explore Detailed Emission Data</button>

        ${buildSourcesTile([
          { label: "OWID – Annual CO2 Emissions by Country", url: "https://ourworldindata.org/grapher/annual-co2-emissions-per-country?tab=chart", note: "Interactive country comparison" },
          { label: "OWID – CO2 Emissions per Capita", url: "https://ourworldindata.org/grapher/co-emissions-per-capita?tab=chart", note: "Per-person trend view" },
          { label: "NOAA – Global CO2 Trend", url: "https://gml.noaa.gov/ccgg/trends/global.html", note: "Global monthly concentration" },
          { label: "NOAA – Mauna Loa CO2", url: "https://gml.noaa.gov/ccgg/trends/", note: "Long-running station record" },
          { label: "IEA – CO2 Emissions in 2023", url: "https://www.iea.org/reports/co2-emissions-in-2023", note: "Energy-sector update" }
        ], "Sources and Graphs")}
      </div>
    </section>
  `;
}

function buildDeforestationPanel() {
  const drivers = [
    { label: "Commercial agriculture", value: 40, color: "#a2754e" },
    { label: "Subsistence agriculture", value: 33, color: "#8d6444" },
    { label: "Logging", value: 14, color: "#6e4b34" },
    { label: "Other", value: 13, color: "#4f3628" }
  ];

  return `
    <section class="panel-stack theme-forest">
      <div class="infographic">
        <article class="info-hero">
          <p class="info-hero-tag">Annual Global Loss</p>
          <h3 class="info-hero-value">10M <span>Hectares of forest lost per year</span></h3>
          <p class="info-hero-note">Tropical primary loss surged 80% in 2024 vs 2023</p>
        </article>

        ${buildLargeRings([
          { label: "Agriculture", value: 52 },
          { label: "Logging", value: 23 },
          { label: "Infrastructure", value: 16 },
          { label: "Fires", value: 9 }
        ], "Loss Drivers")}

        <article class="info-card">
          <h3 class="info-card-title">Forest Loss Trend 2000–2024 (M ha)</h3>
          ${buildAreaChart([14.1, 13.8, 13.2, 12.8, 12.1, 11.5, 10.9, 10.6, 10.2, 10.0], "2000", "2024")}
        </article>

        <div class="info-row">
          <article class="info-card">
            <h3 class="info-card-title">Main Direct Drivers</h3>
            ${buildPieChart(drivers)}
          </article>
          <article class="info-card">
            <h3 class="info-card-title">Countries With Highest Loss</h3>
            ${buildProgressBars([
              { label: "Brazil", value: 100, displayValue: "Highest" },
              { label: "Indonesia", value: 72, displayValue: "High" },
              { label: "DR Congo", value: 60, displayValue: "Significant" },
              { label: "Bolivia", value: 45, displayValue: "Growing" },
              { label: "Peru", value: 38, displayValue: "Notable" }
            ])}
          </article>
        </div>

        <article class="info-card">
          <h3 class="info-card-title">Key Figures</h3>
          ${buildStatRow([
            { label: "Tropical primary", value: "6.7M ha", sub: "WRI 2024 estimate" },
            { label: "Year-on-year", value: "+80%", sub: "2024 vs 2023" },
            { label: "Speed", value: "18 fields/min", sub: "Football-field scale" },
            { label: "FAO benchmark", value: "~10M ha/yr", sub: "Long-run global rate" }
          ])}
        </article>

        <article class="info-card info-insight-card">
          <h4>Insight</h4>
          <p>Deforestation rates have slowed versus the 1990s, but tropical forest loss remains severe and continues to weaken biodiversity and climate resilience.</p>
        </article>

        <button type="button" class="primary-btn detail-action-btn" data-open-url="https://ourworldindata.org/deforestation">View Forest Loss Analysis</button>

        ${buildSourcesTile([
          { label: "OWID – Deforestation", url: "https://ourworldindata.org/deforestation", note: "Historical and regional charts" },
          { label: "Global Forest Watch Dashboard", url: "https://www.globalforestwatch.org/dashboards/global/", note: "Near-real-time monitoring" },
          { label: "WRI Global Forest Review", url: "https://research.wri.org/gfr/latest-analysis-deforestation-trends", note: "Latest tropical loss update" },
          { label: "FAO Forest Resources Assessment", url: "https://www.fao.org/forest-resources-assessment/en/", note: "Global baseline" }
        ], "Sources and Graphs")}
      </div>
    </section>
  `;
}

function buildOceanPlasticPanel() {
  const segments = [
    { label: "Mismanaged waste", value: 44, color: "#33a3f1" },
    { label: "Fishing gear", value: 24, color: "#2b7dc4" },
    { label: "Single-use plastics", value: 21, color: "#56bee4" },
    { label: "Industrial waste", value: 11, color: "#1d4b87" }
  ];

  return `
    <section class="panel-stack theme-ocean">
      <div class="infographic">
        <article class="info-hero">
          <p class="info-hero-tag">Annual Ocean Inflow</p>
          <h3 class="info-hero-value">11M <span>Tons of plastic enter oceans yearly</span></h3>
          <p class="info-hero-note">Production exceeds 450 Mt/yr and is still climbing</p>
        </article>

        ${buildLargeRings([
          { label: "Rivers", value: 35 },
          { label: "Coastal", value: 27 },
          { label: "Fisheries", value: 22 },
          { label: "Offshore", value: 16 }
        ], "Leakage Pathways")}

        <article class="info-card">
          <h3 class="info-card-title">Plastic Growth Index (2000 = 100)</h3>
          ${buildAreaChart([100, 112, 129, 145, 166, 184, 201, 222, 241, 260], "2000", "2024")}
        </article>

        <div class="info-row">
          <article class="info-card">
            <h3 class="info-card-title">Sources of Ocean Plastic</h3>
            ${buildPieChart(segments)}
          </article>
          <article class="info-card">
            <h3 class="info-card-title">Top Contributing Countries</h3>
            ${buildProgressBars([
              { label: "China", value: 100, displayValue: "Highest" },
              { label: "India", value: 81, displayValue: "Very high" },
              { label: "Philippines", value: 62, displayValue: "High" },
              { label: "Indonesia", value: 58, displayValue: "High" },
              { label: "Vietnam", value: 46, displayValue: "Significant" }
            ])}
          </article>
        </div>

        <article class="info-card">
          <h3 class="info-card-title">Key Figures</h3>
          ${buildStatRow([
            { label: "Production", value: ">450 Mt", sub: "Global annual" },
            { label: "Aquatic leakage", value: "19-23 Mt", sub: "UNEP estimate" },
            { label: "River pathway", value: "~1-2 Mt", sub: "Ocean-bound" },
            { label: "Recycling rate", value: "~9%", sub: "System bottleneck" },
            { label: "If unchanged", value: "3× by 2060", sub: "Business-as-usual" },
            { label: "Daily scale", value: "~2,000 trucks", sub: "Dumped into water" }
          ])}
        </article>

        <article class="info-card info-insight-card">
          <h4>Insight</h4>
          <p>Plastic pollution is now a full value-chain issue. Waste prevention, reuse systems, and better collection can cut leakage far more than recycling alone.</p>
        </article>

        <button type="button" class="primary-btn detail-action-btn" data-open-url="https://ourworldindata.org/plastic-pollution">Learn More About Ocean Pollution</button>

        ${buildSourcesTile([
          { label: "OWID – Plastic Pollution", url: "https://ourworldindata.org/plastic-pollution", note: "Production, waste, and leakage overview" },
          { label: "OWID – Global Plastics Production", url: "https://ourworldindata.org/grapher/global-plastics-production?tab=chart", note: "Long-term production growth" },
          { label: "OWID – Mismanaged Waste per Capita", url: "https://ourworldindata.org/grapher/mismanaged-plastic-waste-per-capita?tab=chart", note: "Country-level leakage risk" },
          { label: "UNEP – Plastic Pollution", url: "https://www.unep.org/plastic-pollution", note: "UN policy context" },
          { label: "OECD – Global Plastics Outlook", url: "https://www.oecd.org/environment/plastics/", note: "Scenarios and policy analysis" }
        ], "Sources and Graphs")}
      </div>
    </section>
  `;
}

function buildRenewablePanel() {
  return `
    <section class="panel-stack theme-renewable">
      <div class="infographic">
        <article class="info-hero">
          <p class="info-hero-tag">Global Electricity Share</p>
          <h3 class="info-hero-value">30% <span>of electricity now from renewable sources</span></h3>
          <p class="info-hero-note">Installed capacity reached ~4,300 GW by end-2024</p>
        </article>

        ${buildLargeRings([
          { label: "Solar", value: 34 },
          { label: "Wind", value: 29 },
          { label: "Hydro", value: 27 },
          { label: "Storage", value: 10 }
        ], "Capacity Breakdown")}

        <article class="info-card">
          <h3 class="info-card-title">Renewable Share Over Time (%)</h3>
          ${buildAreaChart([7, 9, 12, 15, 18, 21, 24, 27, 29, 30], "2000", "2024")}
        </article>

        <div class="info-row">
          <article class="info-card">
            <h3 class="info-card-title">Capacity Mix (relative, 2024)</h3>
            ${buildVerticalBars([
              { label: "Solar", value: 100, unit: "" },
              { label: "Hydro", value: 89, unit: "" },
              { label: "Wind", value: 72, unit: "" },
              { label: "Bio", value: 11, unit: "" },
              { label: "Geo", value: 1, unit: "" }
            ])}
          </article>
          <article class="info-card">
            <h3 class="info-card-title">Top Countries By Deployment</h3>
            ${buildProgressBars([
              { label: "China", value: 100, displayValue: "Leader" },
              { label: "Germany", value: 76, displayValue: "High" },
              { label: "United States", value: 73, displayValue: "High" },
              { label: "Brazil", value: 66, displayValue: "Strong" },
              { label: "India", value: 63, displayValue: "Growing" },
              { label: "Denmark", value: 59, displayValue: "Strong" }
            ])}
          </article>
        </div>

        <article class="info-card">
          <h3 class="info-card-title">Key Figures</h3>
          ${buildStatRow([
            { label: "Power share", value: ">30%", sub: "Global electricity" },
            { label: "Capacity", value: "~4,300 GW", sub: "End-2024 total" },
            { label: "COP28 target", value: "3× by 2030", sub: "Global ambition" },
            { label: "Main gap", value: "Grid + storage", sub: "Must accelerate" }
          ])}
        </article>

        <article class="info-card">
          <h3 class="info-card-title">Annual Additions Index</h3>
          ${buildAreaChart([180, 210, 235, 270, 315, 360, 420, 500, 610, 720], "2015", "2024")}
        </article>

        <article class="info-card info-insight-card">
          <h4>Insight</h4>
          <p>Growth is strong enough to reshape power systems this decade, but tripling capacity by 2030 still requires faster permitting, transmission buildout, and financing.</p>
        </article>

        <button type="button" class="primary-btn detail-action-btn" data-open-url="https://ourworldindata.org/renewable-energy">Explore Renewable Energy Data</button>

        ${buildSourcesTile([
          { label: "OWID – Renewable Energy", url: "https://ourworldindata.org/renewable-energy", note: "Global energy-transition context" },
          { label: "OWID – Share of Electricity from Renewables", url: "https://ourworldindata.org/grapher/share-electricity-renewables?tab=chart", note: "Core benchmark" },
          { label: "OWID – Share from Wind", url: "https://ourworldindata.org/grapher/share-electricity-wind?tab=chart", note: "Wind trajectory" },
          { label: "OWID – Share from Solar", url: "https://ourworldindata.org/grapher/share-electricity-solar?tab=chart", note: "Solar trajectory" },
          { label: "IEA – Renewables 2024", url: "https://www.iea.org/reports/renewables-2024", note: "Policy and market outlook" }
        ], "Sources and Graphs")}
      </div>
    </section>
  `;
}

function buildDefaultPanel(topic) {
  const maxValue = Math.max(...topic.sampleData);
  const bars = topic.sampleData
    .map((value) => {
      const height = Math.max((value / maxValue) * 100, 8);
      return `<div class="bar" style="height: ${height}%; --accent: ${topic.color}" title="${value}"></div>`;
    })
    .join("");

  return `
    <article class="panel" style="--accent:${topic.color}">
      <h3>Latest Stat</h3>
      <p class="kpi">${topic.detailValue}</p>
    </article>

    <article class="panel">
      <h3>Key Causes</h3>
      <p>${topic.causes}</p>
    </article>

    <article class="panel">
      <h3>Environmental Impact</h3>
      <p>${topic.impact}</p>
    </article>

    <article class="panel">
      <h3>${topic.chartLabel}</h3>
      <div class="chart">${bars}</div>
    </article>
  `;
}

function buildBriefStrip(items) {
  const cards = items
    .map(
      (item) => `
        <article class="brief-card">
          <p class="brief-label">${item.label}</p>
          <p class="brief-value">${item.value}</p>
          <p class="brief-note">${item.note}</p>
        </article>
      `
    )
    .join("");

  return `<div class="brief-strip">${cards}</div>`;
}

function buildGlossaryCloud(items) {
  const terms = items.map((item) => buildGlossaryTerm(item.term, item.short, item.definition)).join("");
  return `<div class="glossary-cloud">${terms}</div>`;
}

function buildGlossaryTerm(term, short, definition) {
  return `
    <span class="glossary-term" tabindex="0" aria-label="${term}: ${definition}">
      <span class="glossary-chip">${term}</span>
      <span class="glossary-tooltip">
        <strong>${short}</strong>
        <span>${definition}</span>
      </span>
    </span>
  `;
}

function buildTopicContext(topicId) {
  const guide = topicGuides[topicId];
  if (!guide) {
    return "";
  }

  const whyItems = guide.whyItMatters.map((item) => `<li>${item}</li>`).join("");
  const watchItems = guide.watchList.map((item) => `<li>${item}</li>`).join("");
  const glossaryMarkup = buildGlossaryCloud(getGlossaryTermsForTopic(topicId));

  return `
    <div class="detail-context-grid">
      <article class="panel detail-context-card">
        <h3>What This Indicator Means</h3>
        <p>${guide.summary}</p>
        <p class="panel-note">${guide.methodology}</p>
      </article>

      <article class="panel detail-context-card">
        <h3>Why It Matters</h3>
        <ul class="bullet-list">${whyItems}</ul>
      </article>

      <article class="panel detail-context-card">
        <h3>What To Watch</h3>
        <ul class="bullet-list">${watchItems}</ul>
      </article>

      <article class="panel detail-context-card">
        <h3>Key Terms</h3>
        <p>Use these quick definitions to interpret the charts and data notes accurately.</p>
        ${glossaryMarkup}
      </article>
    </div>
  `;
}

function getGlossaryTermsForTopic(topicId) {
  if (topicId === "co2") {
    return glossaryTerms.filter((item) => ["ppm", "Per-capita emissions"].includes(item.term));
  }

  if (topicId === "deforestation") {
    return glossaryTerms.filter((item) => ["Primary forest loss"].includes(item.term));
  }

  if (topicId === "ocean-plastic") {
    return glossaryTerms.filter((item) => ["Mismanaged waste"].includes(item.term));
  }

  if (topicId === "renewable") {
    return glossaryTerms.filter((item) => ["Renewable share"].includes(item.term));
  }

  return glossaryTerms;
}

function buildDataWidgets({ rings, trends, extraClass = "" }) {
  const ringCards = rings
    .map(
      (item) => `
        <article class="mini-ring-card">
          <div class="mini-ring" style="--ring-value:${item.value}">
            <span>${item.value}%</span>
          </div>
          <p>${item.label}</p>
        </article>
      `
    )
    .join("");

  const trendCards = trends
    .map(
      (item) => `
        <article class="mini-trend-card">
          <div class="mini-trend-head">
            <span>${item.label}</span>
            <strong>${item.value}</strong>
          </div>
          <div class="spark-row">${buildSparkBars(item.points)}</div>
        </article>
      `
    )
    .join("");

  return `
    <article class="panel data-panel-grid ${extraClass}">
      <div class="mini-ring-grid">${ringCards}</div>
      <div class="mini-trend-grid">${trendCards}</div>
    </article>
  `;
}

function buildSparkBars(points) {
  const max = Math.max(...points);
  return points
    .map((point) => {
      const height = Math.max((point / max) * 100, 12);
      return `<span class="spark-bar" style="height:${height}%"></span>`;
    })
    .join("");
}

function buildCountryBars(items) {
  const max = Math.max(...items.map((item) => item.value));
  const rows = items
    .map((item) => {
      const width = Math.max((item.value / max) * 100, 8);
      return `
        <div class="country-row">
          <div class="country-meta">
            <span>${item.label}</span>
          </div>
          <div class="country-track">
            <div class="country-fill" style="width:${width}%"></div>
          </div>
        </div>
      `;
    })
    .join("");

  return `<div class="country-bars">${rows}</div>`;
}

function buildLineChart(values) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;

  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * 100;
      const y = 34 - ((value - min) / range) * 26;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  return `
    <div class="line-chart-wrap">
      <svg viewBox="0 0 100 40" preserveAspectRatio="none" class="line-chart-svg" role="img" aria-label="Trend chart">
        <polyline points="${points}" class="line-stroke" />
      </svg>
      <div class="line-axis"><span>2000</span><span>2024</span></div>
    </div>
  `;
}

function buildPieChart(segments) {
  let start = 0;
  const gradientStops = segments
    .map((segment) => {
      const end = start + segment.value;
      const stop = `${segment.color} ${start}% ${end}%`;
      start = end;
      return stop;
    })
    .join(", ");

  const legend = segments
    .map(
      (segment) => `
        <li>
          <span class="legend-swatch" style="background:${segment.color}"></span>
          <span>${segment.label}</span>
        </li>
      `
    )
    .join("");

  return `
    <div class="pie-layout">
      <div class="pie-chart" style="background:conic-gradient(${gradientStops})" role="img" aria-label="Ocean plastic source breakdown"></div>
      <ul class="pie-legend">${legend}</ul>
    </div>
  `;
}

function buildFactGrid(items) {
  const cards = items
    .map(
      (item) => `
        <article class="fact-chip">
          <p class="fact-label">${item.label}</p>
          <p class="fact-value">${item.value}</p>
          <p class="fact-note">${item.note}</p>
        </article>
      `
    )
    .join("");

  return `<div class="fact-grid">${cards}</div>`;
}

function buildLargeRings(items, title) {
  const rings = items.map(item => `
    <div class="lg-ring-item">
      <div class="lg-ring" style="--ring-pct:${item.value}">
        <span class="lg-ring-val">${item.value}%</span>
      </div>
      <p class="lg-ring-label">${item.label}</p>
    </div>
  `).join('');

  return `
    <article class="info-card info-rings-card">
      <h3 class="info-card-title">${title}</h3>
      <div class="lg-ring-row">${rings}</div>
    </article>
  `;
}

function buildVerticalBars(items) {
  const max = Math.max(...items.map(i => i.value));
  const bars = items.map(item => {
    const ratio = item.value / max;
    const height = 18 + ratio * 82;
    return `
      <div class="vbar-col">
        <span class="vbar-val">${item.value}${item.unit || ''}</span>
        <div class="vbar-track"><div class="vbar-fill" style="height:${height}%"></div></div>
        <span class="vbar-label">${item.label}</span>
      </div>
    `;
  }).join('');
  return `<div class="vbar-chart">${bars}</div>`;
}

function buildAreaChart(values, startLabel, endLabel) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const plotTop = 4;
  const plotBottom = 38;
  const plotHeight = plotBottom - plotTop;
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * 100;
    const y = plotBottom - ((v - min) / range) * plotHeight;
    return { x: x.toFixed(1), y: y.toFixed(1), value: v };
  });
  const linePoints = pts.map(point => `${point.x},${point.y}`).join(' ');
  const areaPoints = `0,${plotBottom} ${linePoints} 100,${plotBottom}`;
  const guideLines = [plotTop, plotTop + plotHeight / 3, plotTop + (plotHeight * 2) / 3, plotBottom]
    .map(y => `<line x1="0" y1="${y.toFixed(1)}" x2="100" y2="${y.toFixed(1)}" class="area-grid" />`)
    .join('');
  const markers = pts
    .map(point => `<circle cx="${point.x}" cy="${point.y}" r="1.8" class="area-point" />`)
    .join('');
  return `
    <div class="area-chart-wrap">
      <svg viewBox="0 0 100 42" preserveAspectRatio="none" class="area-chart-svg">
        ${guideLines}
        <polygon points="${areaPoints}" class="area-fill" />
        <polyline points="${linePoints}" class="area-line-stroke" />
        ${markers}
      </svg>
      <div class="area-axis"><span>${startLabel}</span><span>${endLabel}</span></div>
    </div>
  `;
}

function buildProgressBars(items) {
  const max = Math.max(...items.map(i => i.value));
  const rows = items.map(item => {
    const ratio = item.value / max;
    const width = 16 + ratio * 84;
    return `
      <div class="pbar-row">
        <div class="pbar-head">
          <span class="pbar-name">${item.label}</span>
          <span class="pbar-val">${item.displayValue || item.value + '%'}</span>
        </div>
        <div class="pbar-track"><div class="pbar-fill" style="width:${width}%"></div></div>
      </div>
    `;
  }).join('');
  return `<div class="pbar-chart">${rows}</div>`;
}

function buildStatRow(items) {
  const cards = items.map(item => `
    <div class="stat-item">
      <p class="stat-item-val">${item.value}</p>
      <p class="stat-item-label">${item.label}</p>
      ${item.sub ? `<p class="stat-item-sub">${item.sub}</p>` : ''}
    </div>
  `).join('');
  return `<div class="stat-row">${cards}</div>`;
}

function buildSourcesTile(sources, title = "Sources") {
  const items = sources
    .map((source) => {
      if (typeof source === "string") {
        return `<li>${source}</li>`;
      }

      const note = source.note ? `<span class="source-note">${source.note}</span>` : "";
      return `
        <li>
          <a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a>
          ${note}
        </li>
      `;
    })
    .join("");

  return `
    <article class="panel source-panel tile-insight">
      <h4>${title}</h4>
      <ul class="source-list">${items}</ul>
    </article>
  `;
}

function renderSources() {
  views.sources.innerHTML = `
    <div class="section-head">
      <div>
        <p class="frame-tag">Reference Library</p>
        <h2>Sources And Graphs</h2>
      </div>
    </div>
    <p class="subtle">
      A single place to open the main charts and reports used across the dashboard. These links are grouped by topic for faster review.
    </p>

    <div class="dashboard-context-grid sources-intro-grid">
      <article class="panel dashboard-context-card">
        <h3>What You Will Find Here</h3>
        <ul class="bullet-list">
          <li>Direct interactive graph links for each topic.</li>
          <li>Primary public sources behind the snapshot cards.</li>
          <li>A cleaner handoff from this site to deeper research.</li>
        </ul>
      </article>
      <article class="panel dashboard-context-card">
        <h3>Reading Note</h3>
        <p>
          External graphs update on their own schedules. The site summarizes recent public values, while the reference links take you to the full live series.
        </p>
      </article>
    </div>

    <div class="source-library-grid">
      ${sourceLibrary
        .map(
          (group) => `
            <article class="panel source-library-card">
              <h3>${group.topic}</h3>
              <p>${group.summary}</p>
              <ul class="source-list source-library-list">
                ${group.links
                  .map(
                    (link) => `
                      <li>
                        <a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>
                      </li>
                    `
                  )
                  .join("")}
              </ul>
            </article>
          `
        )
        .join("")}
    </div>

    <article class="panel glossary-panel">
      <div class="section-head compact-head">
        <div>
          <p class="frame-tag">Glossary</p>
          <h3>Key Climate Terms</h3>
        </div>
      </div>
      <p class="subtle">Hover or focus terms below for definitions that help interpret the linked charts.</p>
      ${buildGlossaryCloud(glossaryTerms)}
    </article>
  `;
}

function renderNews() {
  views.news.innerHTML = `
    <div class="section-head">
      <div>
        <p class="frame-tag">Daily Updates</p>
        <h2>Environment News</h2>
      </div>
    </div>
    <p class="subtle">Short briefing notes with context about why each update matters.</p>
    <div class="dashboard-context-grid news-intro-grid">
      <article class="panel dashboard-context-card">
        <h3>How To Use These Briefs</h3>
        <ul class="bullet-list">
          <li>Read the headline for the signal.</li>
          <li>Use the summary for the system change behind it.</li>
          <li>Use the "why it matters" note to connect the story back to climate outcomes.</li>
        </ul>
      </article>
      <article class="panel dashboard-context-card">
        <h3>Coverage Focus</h3>
        <p>
          These briefs prioritize structural shifts in power, transport, forests, and plastic systems rather than
          one-off announcements.
        </p>
      </article>
    </div>
    <div class="news-list">
      ${newsItems
        .map((item, index) => {
          return `
            <article class="news-card" style="animation-delay:${index * 70}ms">
              <div class="news-meta-row">
                <strong>Update ${String(index + 1).padStart(2, "0")}</strong>
                <span class="news-source">${item.source}</span>
              </div>
              <h3 class="news-title">${item.title}</h3>
              <p>${item.summary}</p>
              <p class="news-why"><span>Why it matters:</span> ${item.why}</p>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderTips() {
  views.tips.innerHTML = `
    <div class="section-head">
      <div>
        <p class="frame-tag">Better Habits</p>
        <h2>Eco Tips</h2>
      </div>
    </div>
    <p class="subtle">Simple habits with measurable impact.</p>
    <div class="tips-list">
      ${tips
        .map((item, index) => {
          return `<article class="tip-card" style="animation-delay:${index * 70}ms"><strong>Action ${
            index + 1
          }</strong><p>${item}</p></article>`;
        })
        .join("")}
    </div>
  `;
}

function renderCalculator() {
  views.calculator.innerHTML = `
    <div class="section-head">
      <div>
        <p class="frame-tag">Personal Estimator</p>
        <h2>Carbon Calculator</h2>
      </div>
    </div>
    <p class="subtle">Estimate your personal yearly footprint and read the assumptions behind the result.</p>

    <div class="dashboard-context-grid calc-context-grid">
      <article class="panel dashboard-context-card">
        <h3>What This Calculator Covers</h3>
        <ul class="bullet-list">
          <li>Weekly travel distance by transport mode.</li>
          <li>Monthly household electricity use.</li>
          <li>Diet pattern as a broad yearly emissions proxy.</li>
        </ul>
      </article>

      <article class="panel dashboard-context-card">
        <h3>Limitations</h3>
        <p>
          This is a directional personal estimate. It does not include flights, purchased goods, home heating fuel,
          household size, or local grid differences.
        </p>
      </article>
    </div>

    <form id="calcForm" class="panel form-grid" novalidate>
      <div class="field">
        <label for="transportType">Transportation Type</label>
        <select id="transportType">
          ${transportOptions
            .map((option) => `<option value="${option.label}">${option.label}</option>`)
            .join("")}
        </select>
      </div>

      <div class="field">
        <label for="distanceKm">Travel Distance (km/week)</label>
        <input id="distanceKm" type="number" min="0" step="0.1" inputmode="decimal" />
      </div>

      <div class="field">
        <label for="electricityKwh">Electricity Usage (kWh/month)</label>
        <input id="electricityKwh" type="number" min="0" step="0.1" inputmode="decimal" />
      </div>

      <div class="field">
        <label>Diet Type</label>
        <div class="diet-options" id="dietOptions">
          ${dietOptions
            .map(
              (diet) =>
                `<button class="chip ${diet.label === state.selectedDiet ? "active" : ""}" type="button" data-diet="${diet.label}">${diet.label}</button>`
            )
            .join("")}
        </div>
      </div>

      <button class="primary-btn" type="submit">Estimate My Footprint</button>
    </form>

    <article class="panel">
      <h3>Estimated Annual Footprint</h3>
      <p class="result" id="calcResult">0.00 tons CO2e/year</p>
      <p id="calcResultNote">Includes transport, home electricity, and diet assumptions.</p>
    </article>

    <article class="panel benchmark-panel">
      <h3>How To Interpret The Result</h3>
      <div class="benchmark-grid">
        <article class="benchmark-card">
          <strong>Under 2.5 t</strong>
          <p>Relatively low for this simplified calculator.</p>
        </article>
        <article class="benchmark-card">
          <strong>2.5 to 6 t</strong>
          <p>Moderate footprint with several practical reduction levers.</p>
        </article>
        <article class="benchmark-card">
          <strong>Above 6 t</strong>
          <p>Higher footprint in this model, often driven by car travel and electricity demand.</p>
        </article>
      </div>
    </article>
  `;

  const dietContainer = document.getElementById("dietOptions");
  dietContainer.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.selectedDiet = chip.dataset.diet;
      dietContainer.querySelectorAll(".chip").forEach((item) => item.classList.remove("active"));
      chip.classList.add("active");
    });
  });

  const form = document.getElementById("calcForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const transportLabel = document.getElementById("transportType").value;
    const distance = Number.parseFloat(document.getElementById("distanceKm").value) || 0;
    const electricity = Number.parseFloat(document.getElementById("electricityKwh").value) || 0;

    const transport = transportOptions.find((item) => item.label === transportLabel) || transportOptions[0];
    const diet = dietOptions.find((item) => item.label === state.selectedDiet) || dietOptions[1];

    const transportKgPerYear = transport.kgCo2PerKm * distance * 52;
    const electricityKgPerYear = electricity * 0.475 * 12;
    const dietKgPerYear = diet.tonsPerYear * 1000;
    const resultTons = (transportKgPerYear + electricityKgPerYear + dietKgPerYear) / 1000;

    document.getElementById("calcResult").textContent = `${resultTons.toFixed(2)} tons CO2e/year`;
    document.getElementById("calcResultNote").textContent = getFootprintInterpretation(resultTons);
  });
}

function getFootprintInterpretation(value) {
  if (value < 2.5) {
    return "This lands in the lower range for this simplified model. Maintaining low-car travel and efficient electricity use keeps the total down.";
  }

  if (value < 6) {
    return "This sits in the middle range for this simplified model. The biggest reduction opportunities are usually transport distance, mode choice, and home electricity demand.";
  }

  return "This lands in the higher range for this simplified model. A car-heavy routine or high monthly electricity use is often the main driver in results like this.";
}

function showView(viewName) {
  state.activeView = viewName;

  Object.values(views).forEach((viewNode) => {
    viewNode.classList.add("hidden");
  });

  if (viewName === "dashboard") {
    views.dashboard.classList.remove("hidden");
  }

  if (viewName === "detail") {
    renderDetail();
    views.detail.classList.remove("hidden");
  }

  if (viewName === "news") {
    views.news.classList.remove("hidden");
  }

  if (viewName === "calculator") {
    views.calculator.classList.remove("hidden");
  }

  if (viewName === "tips") {
    views.tips.classList.remove("hidden");
  }

  if (viewName === "sources") {
    views.sources.classList.remove("hidden");
  }

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });

  if (viewName === "detail") {
    document.querySelectorAll(".nav-item").forEach((button) => {
      button.classList.remove("active");
    });
  }
}

function bindNav() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      showView(button.dataset.view);
    });
  });

  const heroButton = document.querySelector(".hero-card-btn");
  if (heroButton) {
    heroButton.addEventListener("click", () => {
      showView("tips");
    });
  }
}

function boot() {
  renderDashboard();
  renderNews();
  renderCalculator();
  renderTips();
  renderSources();
  bindNav();
  showView("dashboard");
}

boot();
