# Wasal Aurora Design System — project rules

Applies to every deck, report and visual in this project. Assets in this project:
`bg-aurora.png` (slide background), `wasal-logo.png` (official wordmark, transparent, 3578x924), `deck-stage.js` (1920x1080 deck shell).

## Core style
- Background: `url(./bg-aurora.png) center/cover no-repeat,#FFFDFD`. Light mode only.
- Ink `#111114`, body `#4A4A55`. Accents: violet `#7B5CFF`, hot pink `#FF4FA3`, coral `#FF7A45`, mint `#3FCF8E`, sky `#3E9BFF`.
- Darkened eyebrow/label variants for contrast on the near-white ground: mint `#1E9A66`, sky `#1F6FD6`, coral `#D4521C`.
- Type: Bricolage Grotesque (fallback Inter/Manrope). Headlines 64-132px, tight leading, last phrase in an accent or a pink-to-purple gradient. Body 28-34px. Eyebrows 24px uppercase, letter-spaced. Never below 24px.
- Liquid glass card: `background:rgba(255,255,255,.55);backdrop-filter:blur(26px);border:1px solid rgba(255,255,255,.8);border-radius:24-28px;box-shadow:0 20px 60px rgba(90,70,150,.10)`.
- Gradient orb: blurred conic gradient (`#9EC2FF,#FFB6DE,#FFCFA8,#C3A9FF`) under a sphere with an inner top-left white highlight and inner bottom white bounce.
- Icons: thin single-weight outline, 1.5px stroke, inside a rounded-square chip tinted 10-12% of its accent.
- Writing: short, punchy, benefit-led. No em dashes.

## Section A. Smart chart selection
On any slide with data, read the relationship first, then pick:
- Trend, single series: smooth line or soft area
- Trend, many overlapping series: streamgraph or stacked area
- Part-to-whole of one total: donut/ring with the key number in the hole (never a full pie)
- Progress to target or a single percentage: radial ring gauge or filled sphere
- Ranking across categories: horizontal bars with rounded ends
- Two metrics per category: grouped/paired bars
- Phases or schedule: Gantt with rounded bars
- Correlation: scatter or bubble
- Flow, conversion, splits: Sankey or funnel
- Distribution: histogram or soft density curve
- A few headline numbers: no chart, use the KPI tile grid

Rules: one chart per slide unless comparison demands two; one Wasal accent per series, consistent across the deck; label directly on the chart instead of a legend; round every corner; thin gridlines, no borders, no 3D, no default library styling; if the data does not need a chart, use a KPI tile or a clean statement. State which chart type was chosen and why.

## Section B. Apple-style product visuals and device mockups
Each hero visual: one or two iPhone frames at a slight angle with soft diffuse shadows; frosted-glass UI cards floating out beside the screen (stat card, activity row, small notification); pastel Wasal gradient backdrop; optionally a large low-contrast lowercase wordmark behind the device; small floating line-icon chips for warmth. Apple-keynote calm, premium, airy.

Creator and lifestyle photography is always portrait, 4:5 or 9:16, never a wide banner crop. A photoreal phone screen is never left blank, and the UI is baked into the pixels, never CSS-warped: matrix3d renders differently across engines, so what gets reviewed is not what ships. Generate the plate as a real photograph, high key on plain white, with a flat chroma green screen; key it, solve the quad from the convex hull, warp the UI in canvas, take coverage from the key mask, cut the white ground to transparent so the subject sits on the aurora, and verify on the saved PNG with a residual-key count of zero. Never ship a photoreal element on a grey or dark studio backdrop, and never let a limb end in a hard cut: fade its alpha out over the last quarter and set a blurred pastel glow behind the fade. Cast the hand as a model would be cast, groomed and elegant. See readme.md Section B.

Build the device frame, glass cards, app UI, gradient and wordmark as HTML/CSS directly on the canvas. Photoreal elements (a real hand holding the phone, lifestyle photography inside the app screen, a photoreal device render) are generated with the Higgsfield connector and placed into the composition. Before building each visual, say which parts are built in Claude Design and which are generated.

Floating glass chips carry `z-index:3` and the hero image `z-index:1`, so a chip always reads in front of the device.

## Section C. Built device frames must fit and fill
Every hand-built phone or laptop frame gets `box-sizing:border-box` on both the frame and its inner screen. Without it the padding is added outside the declared height, the frame is silently taller than authored, and the inner flex column absorbs the excess by shrinking its items until rows overlap. Symptoms are negative measured gaps and text sitting flush against the frame edge.

Then check both directions, because they are separate faults:
- **Fits**: `scrollHeight === clientHeight` on the frame and on the inner screen.
- **Fills**: the last child's bottom lands near `clientHeight` minus the screen's bottom padding. More than about 15 percent empty reads as an unfinished mockup.

When a frame overflows, fix the box model first, then remove the one row that genuinely does not fit. Never cure overflow by cutting content that would have fit once the sizing was right, and never by reducing line-height. Re-probe every frame in the deck afterwards, not just the one edited.

Two measurement cautions. On a cold load the deck stage can report a 0x0 canvas and collapse every slide rect to a point; dispatch a `resize` event before any rect-based probe. And Bricolage Grotesque's font box is taller than its line box, so overlap checks on tightly stacked spans throw false positives; trust `offsetTop` plus `offsetHeight` over `getBoundingClientRect`, and confirm against a screenshot before changing spacing.

## Section D. Tweaks on an inline-styled deck
Deck tweaks that restyle many elements at once (headline voice, accent range, surface style) are declared as props and applied by rewriting inline styles from the logic class. Two rules keep that safe:
- Only touch elements the tweak actually targets, and return early otherwise. A pass that caches and rewrites every element's `style` attribute will silently wipe template styles and any direct edits, so rotations, offsets and z-indexes vanish on the next render.
- Never write back when nothing changed. Compare against the element's current attribute, not a snapshot taken at mount.
