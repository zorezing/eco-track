# EcoTrack - Green Workspaces Dashboard

EcoTrack is a front-end climate awareness site that presents key environmental indicators, context notes, source links, and a simplified personal carbon footprint calculator.

## What The Site Tells Us

The site focuses on four environmental themes:

- Global CO2 emissions
- Deforestation
- Ocean plastic pollution
- Renewable energy growth

For each theme, the app shows:

- A headline metric (high-level snapshot)
- Visual charts (trend, composition, country comparisons)
- Brief explanation cards (what it means, why it matters)
- Source links to public data/reporting

The goal is to make climate signals easier to understand quickly, then let users open deeper source data.

## How It Functions

The app is a static single-page interface built with:

- `web/index.html` (layout shell and view containers)
- `web/styles.css` (all styling and responsive behavior)
- `web/app.js` (data, rendering, navigation, interactions)

### View Flow

`app.js` renders these sections into dedicated containers:

- Dashboard (`dashboardView`)
- Topic detail (`detailView`)
- News (`newsView`)
- Calculator (`calculatorView`)
- Tips (`tipsView`)
- Sources (`sourcesView`)

Navigation behavior:

- Bottom nav buttons switch views via `showView(...)`
- Dashboard topic cards open detailed topic panels
- External source buttons open links in a new tab

### Data Model

Most page content is data-driven from arrays/objects in `app.js`, including:

- `topics`
- `topicGuides`
- `timelineMilestones`
- `sourceLibrary`
- `newsItems`
- `tips`

This allows updates to content without changing view structure logic.

## Carbon Calculator Formula

The calculator estimates annual footprint from three components:

- Transport emissions
- Household electricity emissions
- Diet emissions proxy

### Inputs

- Transport mode (`Car`, `Bus`, `Train`, `Walk/Bike`)
- Distance traveled in `km/week`
- Electricity usage in `kWh/month`
- Diet type (`Meat-heavy`, `Balanced`, `Vegetarian`, `Vegan`)

### Constants Used (From Code)

Transport factors (`kg CO2 per km`):

- Car: `0.21`
- Bus: `0.089`
- Train: `0.041`
- Walk/Bike: `0`

Electricity factor:

- `0.475 kg CO2 per kWh`

Diet factors (`tons CO2e per year`):

- Meat-heavy: `3.3`
- Balanced: `2.5`
- Vegetarian: `1.7`
- Vegan: `1.5`

### Equation

Given:

- `distance_km_week`
- `electricity_kwh_month`
- `transport_factor_kg_per_km`
- `diet_tons_year`

The code computes:

```text
transport_kg_year  = transport_factor_kg_per_km * distance_km_week * 52
electricity_kg_year = electricity_kwh_month * 0.475 * 12
diet_kg_year       = diet_tons_year * 1000

result_tons_year   = (transport_kg_year + electricity_kg_year + diet_kg_year) / 1000
```

Displayed output:

- `result_tons_year.toFixed(2) + " tons CO2e/year"`

## Important Limitation

This is a simplified directional estimator. It does **not** include:

- Flights
- Purchased goods/services
- Home heating fuels
- Household size effects
- Regional grid-intensity differences

Use it for quick comparison and awareness, not as an audited emissions inventory.

## Running The Site

Because this is static front-end code, you can run it by opening:

- `web/index.html`

For best behavior in browsers, a local static server is recommended.
