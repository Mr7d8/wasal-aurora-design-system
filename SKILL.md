---
name: wasal-design
description: Use this skill to generate well-branded interfaces and assets for Wasal, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Two rules in readme.md are always active, not optional:

- **Smart chart selection (Section A).** On any slide or panel carrying data, read the relationship in the numbers first, then pick the prescribed form via `components/charts/chartTheme.js` → `chartFor(relationship)`. One chart per slide, one accent per series, labels on the chart, everything rounded, no library defaults. State which chart type was chosen and why.
- **Apple-style device visuals (Section B).** Hero visuals are built as HTML: `HeroVisual` + `PhoneFrame`/`LaptopFrame` + `FloatingCard`, over the blurred orb, with a 5 percent wordmark behind. Photoreal parts are generated on a high-key chroma key plate, baked into the pixels in canvas, and cut to transparency. Never CSS-warp a screen. Before building, say which parts are built directly and which are generated.
- **Built frames fit and fill (Section C).** `box-sizing: border-box` on every frame and its inner screen; verify `scrollHeight === clientHeight` and that content reaches the bottom padding.
- **Tweaks never clobber the template (Section D).** A style-rewriting tweak pass touches only the elements it targets and writes only on change.

No em dashes in any copy produced under this skill.
