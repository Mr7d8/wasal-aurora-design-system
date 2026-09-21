# Wasal Aurora: Canva Brand Kit "Test" handoff

Everything below is the source of truth from the Wasal Aurora Design System. Paste it into
Canva > Brand Kit **Test** (`kAHV2GpckRI`). Four assets are already sitting in Canva Uploads;
drag each into the section named beside it.

---

## 1. Logos

| Canva upload name | Asset id | Goes in |
| --- | --- | --- |
| Wasal logo (wordmark, transparent) | `MAHV2ESMR1Q` | Logos |

The wordmark is the only mark. It is transparent, 3578x924, and always used as supplied.
Never recolour it, never set it in type, never add a symbol or lockup beside it.
Minimum clear space on all sides equals the height of the "w". On a slide it sits at
150px wide in a header and 216px on a cover, against the 1920x1080 canvas.

## 2. Photos

| Canva upload name | Asset id | Goes in |
| --- | --- | --- |
| Wasal Aurora background | `MAHV2BG_La4` | Photos. This is the one deck background, 1960x1108 |
| Wasal creator photography (portrait 4:5) | `MAHV2HJb_kU` | Photos |
| Wasal hand + phone mockup (transparent) | `MAHV2IvY_es` | Photos |

Creator and lifestyle photography is always portrait, 4:5 or 9:16. Never a wide banner crop.
Photoreal elements sit on the aurora ground with a transparent cutout, never on a grey or
dark studio backdrop, and a limb never ends in a hard cut.

## 3. Colours

Add as one palette named **Wasal Aurora**.

Ink and body
- `#111114` Ink, all headlines and hard numbers
- `#4A4A55` Body

Accents
- `#7B5CFF` Violet
- `#FF4FA3` Hot pink
- `#FF7A45` Coral
- `#3FCF8E` Mint
- `#3E9BFF` Sky

Darkened label variants, for eyebrows and small labels on the near-white ground
- `#1E9A66` Mint label
- `#1F6FD6` Sky label
- `#D4521C` Coral label

Ground
- `#FFFDFD` Page, sitting under the aurora background image

Rules: one accent per data series, held consistently across a deck. Light mode only.
Maximum one or two background colours per deck. The headline gradient is
`linear-gradient(90deg, #FF4FA3, #7B5CFF 60%, #3E9BFF)`, applied to the last phrase of a
headline only, never to a whole paragraph.

## 4. Fonts

**Bricolage Grotesque** for everything. Fallbacks in order: Inter, Manrope, system sans.

| Role | Size | Weight | Tracking | Leading |
| --- | --- | --- | --- | --- |
| Display / cover | 104-132px | 800 | -3 to -4px | 0.96-0.98 |
| Slide headline | 64-70px | 800 | -2px | 1.04 |
| KPI number | 104px | 800 | -3px | 1.0 |
| Body | 28-34px | 400-500 | 0 | 1.5 |
| Eyebrow / label | 24px | 600 | +3px, uppercase | 1.0 |

Never below 24px on a 1920x1080 slide. Headlines are tight; body is airy.

## 5. Brand voice

Short, punchy, benefit-led. Sentence case in body, uppercase only in eyebrows.
Speak to the reader as "you". Lead with the number or the outcome, then the explanation.
No em dashes. No emoji. No metadiscourse and no hype adjectives.

Good: "Sessions climbed every week of the quarter."
Good: "You do not need a project or a budget to start. Pick one task you repeat, and hand it over."
Avoid: "Here's why this matters, it's a game changer!"

## 6. Guidelines page

Canva's Guidelines page takes rich text. Paste sections 1-5 above, then add these two:

**Surfaces.** The liquid glass card is `rgba(255,255,255,.55)` at `blur(26px)`, a
`1px solid rgba(255,255,255,.8)` border, 24-28px radius, and a
`0 20px 60px rgba(90,70,150,.10)` shadow. Tinted panels use an accent at 10-12% alpha.
The gradient orb is a blurred conic `#9EC2FF, #FFB6DE, #FFCFA8, #C3A9FF` under a sphere
with an inner top-left white highlight and an inner bottom white bounce.

**Charts.** Read the relationship, then pick: single-series trend is a soft area; many
overlapping series is a streamgraph; part-to-whole is a donut with the number in the hole,
never a pie; a single percentage is a radial ring; a ranking is horizontal bars with rounded
ends; two metrics per category is paired bars; a schedule is a rounded Gantt; correlation is
scatter or bubble; conversion is a funnel or Sankey; distribution is a histogram. A handful
of headline numbers needs no chart, use KPI tiles. One chart per slide. Label on the chart
instead of using a legend. Round every corner, thin gridlines, no borders, no 3D.

## 7. Brand Templates

Published. The import **Wasal Aurora Design System: Guidelines** (design `DAHV1xteSWE`,
https://www.canva.com/d/LfMsI7JB3377gE3) is now Brand Template `EAHV1wnX5ZA`:
https://www.canva.com/brand/brand-templates/EAHV1wnX5ZA

The connector's `publish-brand-template` has no brand-kit parameter, so it cannot file a
template under a specific kit. To attach it to **Test**, open the template in
Canva > Brand > Brand Templates and set the brand kit there.

## 8. What the connector cannot do

The Canva Connect API and the connector have no write access to Brand Kit contents.
Logos, Photos, Colours, Fonts, Brand voice and the Guidelines page are filled in the
web app: Home > More > Brand > pick **Test** > each section > Add. Brand voice is capped
at 500 characters; section 5 is 440 characters and fits as is.
