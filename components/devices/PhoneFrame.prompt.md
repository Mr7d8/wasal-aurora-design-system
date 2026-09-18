The device shell for every Aurora hero visual. Build the app screen as ordinary markup inside it.

```jsx
<PhoneFrame tilt={-4}>
  <span style={{ fontSize: 34, fontWeight: 700, color: "var(--ink)" }}>This morning, 07:00</span>
  <div style={{ display: "flex", gap: 14 }}>
    <KpiTile value="+18%" label="Meta Ads ROAS" accent="mint" glyph="trend" />
  </div>
</PhoneFrame>
```

Never draw a photoreal bezel by hand. A photoreal device render or a real hand holding the phone is generated separately and placed behind or in front of this frame.
