# Wasal Aurora Design System

The visual system for Wasal's presentations, performance reports and marketing visuals. Wasal is a Moroccan social commerce platform; this system covers the internal and external material the growth team produces around it, not the product UI itself.

Aurora is a light-mode, pastel system: a soft iridescent background, near-black geometric type with one gradient phrase per slide, liquid-glass cards, five accents, and Apple-keynote-calm device visuals.

## Sources

- `assets/WA-SAL LOGO_BLACK.pdf` — the official wordmark, supplied by the brand owner. `assets/wasal-logo.png` is a transparent raster extracted from it at 3578x924.
- `assets/bg-aurora.png` — the aurora background, supplied as the reference background from the source Canva deck (`https://www.canva.com/design/DAHViZq0fdM/hR0ImPvRVjBf71RchDnZxg/edit`, access required).
- Reference screenshots of the source deck and of Apple-style product visuals were provided in chat and used to derive the surface, orb and device-mockup treatments.
- The system was extracted from a built 16-slide deck, `Working With AI.dc.html`, which remains in the project as the reference implementation.

No codebase or Figma file was provided. Everything here was authored from the brand assets, the reference deck and the written brand rules.

## Content fundamentals

Short, punchy, benefit-led. Sentences carry one idea and stop.

- **No em dashes anywhere.** Use a comma, a full stop, or a colon. This is a hard rule.
- Sentence case in body copy and headlines. Uppercase only for eyebrow labels.
- Second person for the audience, first person plural for the company: "You do not need a project or a budget to start", "Everything on the next slides is already running inside Wasal".
- Claims are concrete and sourced in real work: "Daily Meta Ads and Mixpanel brief sent automatically every morning", not "improved reporting efficiency".
- Numbers are spelled with their unit and rounded honestly: "about 135 seconds per product", "roughly 4 staff instead of 44".
- Headlines state the finding, not the topic: "Reporting that used to take hours now runs itself" rather than "Reporting automation".
- Section dividers are two or three words: "Proof, not theory". "Meet the toolkit". "Starting this week".
- No emoji. No exclamation marks. No hype adjectives (revolutionary, game-changing, seamless).
- French and Arabic product names keep their own spelling and accents (Mode, Beauté, Épicerie).

## Visual foundations

**Background.** One background for everything: `url(assets/bg-aurora.png) center/cover no-repeat, #FFFDFD`. Near-white in the middle, bleeding to pale lavender, blush, peach, mint and sky at the edges, with thin pastel ribbon line-art in the lower right. Light mode only, never dark. Never place a second background image or a flat color panel over the full slide.

**Color.** Ink `#111114` for headlines, warm grey `#4A4A55` for body. Five accents, one per theme or series: violet `#7B5CFF`, hot pink `#FF4FA3`, coral `#FF7A45`, mint `#3FCF8E`, sky `#3E9BFF`. Small uppercase type uses the darkened variants (`#D4521C` coral, `#1E9A66` mint, `#1F6FD6` sky) so it holds 4.5:1 on the near-white ground. Chips and KPI tiles use 10 to 12 percent tints. At most one gradient phrase per slide, `linear-gradient(90deg,#FF4FA3,#7B5CFF 60%,#3E9BFF)`.

**Type.** Bricolage Grotesque throughout, loaded from Google Fonts; Inter and Manrope are the fallbacks. Headlines 64 to 132px at weight 800 with tight leading (0.96 to 1.04) and negative tracking (-2 to -4px). Body 29 to 34px regular at 1.5. Eyebrows 24px semibold, 3px tracking, uppercase, and 24px is a hard floor on a 1920x1080 slide. Print minimum is 12pt.

**Spacing and layout.** Slide padding 76px vertical by 104px horizontal, 100px on dividers. Card padding 34 to 46px, card gaps 22 to 34px, column gap 70 to 90px. Content occupies roughly the top three quarters; the base stays open. Fixed elements: wordmark top-left at 150px wide (216px on covers), eyebrow top-right on content slides.

**Cards.** The liquid glass card is the default container: `rgba(255,255,255,.55)`, `backdrop-filter: blur(26px)`, 1px `rgba(255,255,255,.8)` rim, radius 26px, shadow `0 20px 60px rgba(90,70,150,.10)`. A stronger variant (62 percent white, deeper shadow) is used only for cards floating over a device. Corner radii: 18px chips, 26 to 28px cards, 999px pills. Never a left-border accent stripe; never a hard 1px grey border.

**Transparency and blur.** Blur is reserved for glass cards and floating chips, always 26px. Tinted panels use flat alpha with no blur. Type is never alpha-muted: full-opacity ink or full-strength accent only.

**Shadows.** Three levels only: card `0 20px 60px rgba(90,70,150,.10)`, floating card `0 20px 60px rgba(90,70,150,.14)`, device `0 44px 100px rgba(60,40,110,.30)`. All are violet-tinted, never neutral grey or black. No inner shadows except the orb's white bounce.

**The orb.** The signature shape: a blurred conic gradient (`#9EC2FF, #FFB6DE, #FFCFA8, #C3A9FF`) sitting under a sphere with a white top-left highlight and a white inner bottom bounce. 340px on hub slides, 520 to 640px as a backdrop behind a device.

**Imagery.** Cool-to-warm pastels, high key, no grain, no duotone. Product and lifestyle photography sits inside device screens rather than bleeding to the slide edge. Generated photoreal elements are composited into an otherwise HTML-built composition.

Two rules keep photoreal elements honest:

- **Creator and lifestyle photography is portrait, 4:5 or 9:16.** A creator posts vertical video; cropping her into a wide banner reads as stock modelling, not social commerce. Landscape crops are reserved for product-on-surface shots.
- **A photoreal screen is never left blank, and the UI is baked into the pixels, never CSS-warped.** A `matrix3d` overlay is not shippable: it renders differently across engines, so what gets reviewed is not what the audience sees. Composite in the raster domain instead and ship one flat image.

  The procedure:
  1. Generate the plate with the phone screen filled flat chroma green, and ask for fingers on the edges and back only so nothing crosses the display. A saturated key is measurable; a blank white screen is indistinguishable from a pale backdrop and every corner becomes guesswork.
  2. Key the green, keep the largest connected component, and take its convex hull. The hull bridges finger occlusion, which a per-row line fit cannot.
  3. Get seed corners as the maximum-area quadrilateral inscribed in the hull, then refine: march outward along each edge normal at about 40 stations and take the **median** offset. Medians reject green bloom on the bezel; percentiles do not.
  4. Draw the app UI on a canvas at the screen's aspect, solve the destination-to-source homography, and inverse-map every destination pixel with bilinear sampling. **Clamp** the sampled coordinates, or slivers beside the notch stay unpainted.
  5. Take geometry from the quad but **coverage from the key mask itself**, feathered. The mask is ground truth: it follows bowed edges, corner arcs and the notch, and it cannot spill onto the bezel or the fingers. Overscan the geometry about 3 percent so content reaches the bowed edge.
  6. Add the screen's lighting last, clipped to the quad: a lavender-to-peach wash at about 18 percent and a diagonal sheen at about 24 percent, matching the plate's own light.
  7. Shoot the plate **high key on plain white**, then flood-fill the white ground from the image borders and write it to transparent alpha with a 2px feather. A grey or coloured studio backdrop reads dark and synthetic against the near-white aurora; a cut-out hand sits on the ground natively and carries its own CSS drop shadow. Ask the generator for a real photograph, natural window light and visible skin texture, and say not a 3d render.
  8. **Never let a limb end in a hard cut.** Where the wrist or arm leaves the frame, ramp alpha to zero over the last quarter of the image with a smoothstep, and set a blurred pastel glow plus one or two soft bokeh discs behind the fade in the composition. The subject then dissolves into the aurora instead of being sliced off.
  9. Hands are cast, not incidental: brief an elegant groomed hand, slim fingers, a neat nude manicure, smooth skin, premium advertising quality. A generic hand reads as stock and undoes the rest of the work.
  10. Verify on real pixels, not a DOM screenshot: view the saved PNG and count residual keyed pixels. Ship at zero.

  `mockup-digest-model.png` was built this way from `plate-model.png` (1536x2048, screen quad TL 362,189 / TR 1006,198 / BR 1001,1515 / BL 359,1524), with the wrist fading out from 74 to 98 percent of image height.

## Iconography

Lucide-style thin outline glyphs at 1.5px stroke, monochrome in their theme accent, drawn at 24x24 and rendered at 26 to 32px inside a tinted rounded-square chip (`--radius-chip`, 46 to 68px). No filled icons, no two-tone icons, no emoji, no unicode symbols standing in for icons.

The source material contained no icon assets, so the set is hand-maintained as inline SVG paths in `components/primitives/glyphs.js` and matched to Lucide's geometry. **This is a substitution** — if you have a licensed icon set, drop the SVGs into `assets/icons/` and point `glyphs.js` at them. Add new glyphs to that file rather than inlining SVG at a call site, so stroke weight stays uniform.

The only brand mark is the wordmark. There is no standalone logomark or app icon in the supplied sources, and none has been invented.

## Section A. Smart chart selection

On any slide that carries data, read the relationship the numbers express before choosing a form. Never default to a plain bar or pie.

| Relationship in the data | Use |
| --- | --- |
| Trend over time, single series | `AreaTrend` — smooth line or soft area |
| Trend over time, many overlapping series | `StackedArea`, or a streamgraph |
| Part to whole of one total | `DonutChart` — ring with the key number in the hole, never a full pie |
| Progress toward a target, a single percentage | `RingGauge`, or a filled sphere |
| Ranking or comparison across categories | `RankedBars` — horizontal, rounded ends |
| Two metrics per category | `PairedBars` — accent plus its lighter tint |
| Phases, schedule, campaign timeline | `GanttChart` — rounded bars |
| Correlation between two variables | `BubbleChart`, or a scatter |
| Flow, conversion, how a total splits into paths | `FunnelChart`, or a Sankey |
| Distribution or spread | `Histogram`, or a soft density curve |
| A few headline numbers | `KpiTile` grid, no chart at all |

Rules:

- One chart per slide unless a comparison genuinely demands two. Never crowd.
- One Wasal accent per series, held consistent across the whole deck.
- Label directly on the chart. No legend boxes.
- Round every corner, rounded bar caps, hairline gridlines only, no axis borders, no 3D, no drop shadows on slices, no default chart-library styling.
- If the data does not need a chart, show a KPI tile or a clean statement instead.
- Type on an accent fill is ink `#111114`, never white: white fails 4.5:1 on all five accents. Labels that must sit outside a fill use the darkened variants.
- Say which chart type was chosen and why.

`components/charts/chartTheme.js` exports `chartFor(relationship)`, which maps the keys above (`trend-single`, `part-to-whole`, `progress`, `ranking`, `two-metrics`, `schedule`, `correlation`, `flow`, `distribution`, `headline-numbers`) to the component to use.

## Section B. Apple-style product visuals and device mockups

Hero visuals are calm, premium and airy, in the manner of an Apple keynote slide.

Every hero visual has:

- One or two iPhone frames, tilted 3 to 6 degrees, opposite directions when paired, with a soft diffuse shadow.
- Frosted glass cards pulled out beside the screen: a stat card, an activity row, a small notification. Two to four, each overlapping the frame edge slightly.
- A pastel Wasal gradient backdrop, usually the blurred orb at 520 to 640px.
- Optionally a large lowercase wordmark set behind the device at 5 percent ink.
- Small floating line-icon chips for warmth, at `z-index: 3` against the hero image's `z-index: 1`, so a chip always reads in front of the device.
- A clean, minimal app screen inside the frame: wordmark, one headline, a KPI pair, one chart, one list row. Abbreviate everything else.

How they are built:

- The device frame, floating glass cards, app UI, gradient backdrop and wordmark are built as HTML and CSS directly on the canvas, using `HeroVisual`, `PhoneFrame`, `LaptopFrame` and `FloatingCard`. Never hand-draw a photoreal bezel in SVG.
- Photorealistic elements — a real hand holding the phone, lifestyle photography inside the app screen, a photoreal device render — are generated with the Higgsfield connector and placed into the composition as an image child of `HeroVisual`.
- Before building each visual, state which parts are built directly and which parts are generated. If photoreal generation is unavailable in the current environment, say so plainly and hand that part to Claude Code, which can call Higgsfield and composite, then place the result back into the composition here.

## Section C. Built device frames must fit and fill

Every hand-built phone or laptop frame gets `box-sizing: border-box` on **both** the frame and its inner screen. Without it the padding is added outside the declared height, the frame renders taller than authored, and the inner flex column absorbs the excess by shrinking its items until rows collide. The symptoms are negative measured gaps between siblings and content sitting flush against the frame edge.

Fitting and filling are separate faults; check both:

- **Fits**: `scrollHeight === clientHeight` on the frame and on the inner screen.
- **Fills**: the last child's bottom lands near `clientHeight` minus the screen's bottom padding. More than roughly 15 percent empty reads as an unfinished mockup, which is the same defect as a blank screen.

When a frame overflows, fix the box model first, then remove the single row that genuinely does not fit. Do not cure overflow by cutting content that would have fit once the sizing was correct, and never by reducing line-height. Re-probe every frame in the deck afterwards, not only the one edited.

Two measurement cautions:

- On a cold load the deck stage can report a 0x0 canvas and collapse every slide rect to a point. Dispatch a `resize` event before any rect-based probe.
- Bricolage Grotesque's font box is taller than its line box, so overlap heuristics fire on tightly stacked spans that visually clear each other. Trust `offsetTop` plus `offsetHeight` over `getBoundingClientRect`, and confirm against a screenshot before changing any spacing.

## Section D. Tweaks on an inline-styled deck

Because Aurora decks are styled entirely inline, an expressive tweak reshapes the feel by rewriting inline styles from the logic class rather than toggling classes. The deck exposes three props: `headlineVoice` (Gradient, Flat accent, Quiet ink), `accentRange` (Full spectrum, Violet and pink, Cool only) and `surfaceStyle` (Liquid glass, Solid cards, Open no cards).

Two rules make that safe:

- **Only touch elements the tweak actually targets**, and return early otherwise. A pass that caches and rewrites every element's `style` attribute will silently wipe template styles and the user's own direct edits, so rotations, offsets and z-indexes disappear on the next render. This is easy to misdiagnose as CSS not applying.
- **Never write back when nothing changed**, and compare against the element's current attribute rather than a snapshot taken at mount.

Accent remapping works on the authored attribute string, substituting both the hex values and their `r,g,b` tint forms, so tints and labels move with their accent.

## Index

- `styles.css` — the CSS entry point; imports everything below.
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/surfaces.css` — custom properties.
- `assets/` — `wasal-logo.png`, the source logo PDF, `bg-aurora.png`.
- `guidelines/` — 16 specimen cards across Colors, Type, Spacing, Brand and Charts, including the chart selection table.
- `slides/` — seven sample slides at 1920x1080: title, section divider, feature, KPI, chart, reference table, closing.
- `components/`
  - `surfaces/` — `GlassCard`, `StatementPanel`, `GradientOrb`
  - `primitives/` — `IconChip`, `Eyebrow`, `GradientHeadline`, `AccentPill`, `glyphs.js`
  - `charts/` — `AreaTrend`, `StackedArea`, `DonutChart`, `RingGauge`, `RankedBars`, `PairedBars`, `FunnelChart`, `GanttChart`, `BubbleChart`, `Histogram`, `KpiTile`, `chartTheme.js`
  - `devices/` — `HeroVisual`, `PhoneFrame`, `LaptopFrame`, `FloatingCard`
- `SKILL.md` — the portable skill wrapper.
- `plate-model.png` — the generated chroma key plate; `mockup-digest-model.png` — the baked, background-free mockup built from it.
- `Working With AI.dc.html` — the reference 16-slide deck this system was extracted from.
- `Wasal Aurora Design System.dc.html` — a single-page visual overview of the system.

### Intentional additions

No source defined a component inventory, so the families above were authored from the reference deck's own vocabulary. Two additions go beyond what the deck literally contains, both to make the documented rules executable:

- `charts/` — eleven chart components plus `chartFor()`, so Section A's decision logic is code rather than prose.
- `devices/` — `HeroVisual` and frames, so Section B's composition rules are reusable rather than rebuilt per slide.
