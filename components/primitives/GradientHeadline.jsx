import React from "react";

export function GradientHeadline({ children, size = "var(--size-headline)", tag = "h2", style = {} }) {
  const Tag = tag;
  return (
    <Tag
      style={{
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: size,
        fontWeight: "var(--weight-black)",
        lineHeight: "var(--leading-headline)",
        letterSpacing: "var(--tracking-headline)",
        background: "var(--gradient-headline)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        textWrap: "pretty",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
