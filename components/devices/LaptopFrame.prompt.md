For dashboards and internal tools. Put a KPI row and one chart inside; abbreviate everything else.

```jsx
<LaptopFrame>
  <span style={{ fontSize: 32, fontWeight: 700, color: "var(--ink)" }}>Wasal Friday, live tracking</span>
  <RankedBars items={[{ label: "Mode", value: 1200 }]} />
</LaptopFrame>
```
