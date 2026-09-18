Wraps a device plus its floating cards into one calm, airy composition. Everything here is built in HTML; photoreal elements are generated separately and dropped in as an `<img>` child.

```jsx
<HeroVisual wordmark="wasal">
  <PhoneFrame tilt={-4}>{screen}</PhoneFrame>
  <FloatingCard value="47k" label="Followers" accent="pink" position={{ top: 150, left: -40 }} />
  <FloatingCard glyph="send" label="Published live" accent="sky" position={{ bottom: 120, right: -20 }} />
</HeroVisual>
```

Composition rules: one or two frames, tilted 3 to 6 degrees in opposite directions; two to four floating cards; the orb sits behind everything; the wordmark stays at 5 percent ink.
