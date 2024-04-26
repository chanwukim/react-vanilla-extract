import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

import tokens from "./tokens";
import { vars } from "./theme.css";

const responsiveProperties = defineProperties({
  conditions: {
    sm: {},
    md: { "@media": `(min-width: ${tokens.breakpoints.md}px)` },
    lg: { "@media": `(min-width: ${tokens.breakpoints.lg}px)` },
  },
  defaultCondition: "sm",
  properties: {
    display: ["block", "flex", "grid", "inline-block", "inline", "none", "contents"],
    position: ["static", "fixed", "absolute", "relative", "sticky"],
    alignItems: ["flex-start", "center", "flex-end", "stretch"],
    justifyContent: ["flex-start", "center", "flex-end", "stretch", "space-between"],
    flexGrow: [0, 1, 2, 3, 4],
    flexShrink: [0, 1, 2, 3, 4],
    flexDirection: ["row", "row-reverse", "column", , "column-reverse"],
    flexWrap: ["wrap", "nowrap"],
    gap: vars.space,
    columnGap: vars.space,
    rowGap: vars.space,
    gridTemplateColumns: {
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
    },
    gridColumn: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
      "span-full": "1 / -1",
    },

    width: { ...vars.space },
    minWidth: {
      min: "min-content",
      full: "100%",
    },
    maxWidth: {
      ...vars.space,
      full: "100%",
      screen: "100vw",
    },
    height: vars.space,
    minHeight: {
      min: "min-content",
      full: "100%",
    },
    maxHeight: {
      ...vars.space,
      full: "100%",
      screen: "100vw",
    },
    backgroundColor: {
      ...vars.colors,
      ...vars.theme,
      transparent: "transparent",
    },
    opacity: vars.opacity,

    borderRadius: vars.borderRadius,
    borderBottomLeftRadius: vars.borderRadius,
    borderBottomRightRadius: vars.borderRadius,
    borderTopLeftRadius: vars.borderRadius,
    borderTopRightRadius: vars.borderRadius,
    borderWidth: vars.borderWidths,
    borderTopWidth: vars.borderWidths,
    borderRightWidth: vars.borderWidths,
    borderBottomWidth: vars.borderWidths,
    borderLeftWidth: vars.borderWidths,

    paddingTop: vars.space,
    paddingRight: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,

    marginTop: vars.space,
    marginRight: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,

    top: vars.space,
    right: vars.space,
    bottom: vars.space,
    left: vars.space,
    inset: vars.space,

    color: {
      ...vars.colors,
      ...vars.theme,
      transparent: "transparent",
    },
    fontSize: {
      ...vars.fontSizes,
    },
    fontWeight: {
      ...vars.fontWeights,
    },
    textAlign: ["left", "center", "right"],

    overflow: ["auto", "hidden", "scroll", "unset"],
  },
  shorthands: {
    p: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    pt: ["paddingTop"],
    pb: ["paddingBottom"],
    pl: ["paddingLeft"],
    pr: ["paddingRight"],
    m: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    mt: ["marginTop"],
    mb: ["marginBottom"],
    ml: ["marginLeft"],
    mr: ["marginRight"],
    borderLeftRadius: ["borderBottomLeftRadius", "borderTopLeftRadius"],
    borderRightRadius: ["borderBottomRightRadius", "borderTopRightRadius"],
    borderTopRadius: ["borderTopLeftRadius", "borderTopRightRadius"],
    borderBottomRadius: ["borderBottomLeftRadius", "borderBottomRightRadius"],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];
