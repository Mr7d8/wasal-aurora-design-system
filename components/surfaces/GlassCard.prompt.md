The standard Aurora container: use it for every block of copy, list row or stat group that sits on the aurora background.

```jsx
<GlassCard padding="var(--card-pad-lg)">
  <IconChip accent="sky" glyph="clock" />
  <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--leading-body)" }}>
    Daily Meta Ads and Mixpanel brief sent automatically every morning.
  </p>
</GlassCard>
```

Variants: `strong` for cards floating over a device mockup, `radius`/`padding` to fit dense layouts. Never stack two glass cards directly on top of each other; keep 22 to 34px between them.
