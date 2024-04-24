import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

import { vars } from "./theme.css";

const responsiveProperties = defineProperties({
  conditions: {
    sm: {},
    md: { "@media": `(min-width: ${vars.breakpoints.md}px)` },
    lg: { "@media": `(min-width: ${vars.breakpoints.lg}px)` },
  },
  defaultCondition: "sm",
  properties: {
    display: ["block", "flex", "grid", "inline-block", "inline", "none", "contents"],

    alignItems: ["flex-start", "center", "flex-end", "stretch"],
    justifyContent: ["flex-start", "center", "flex-end", "stretch", "space-between"],
    flexGrow: [0, 1, 2, 3, 4],
    flexShrink: [0, 1, 2, 3, 4],
    flexDirection: ["row", "row-reverse", "column", , "column-reverse"],
    flexWrap: ["wrap", "nowrap"],

    borderWidth: vars.borderWidths,
    borderBottomWidth: vars.borderWidths,
    borderLeftWidth: vars.borderWidths,
    borderRightWidth: vars.borderWidths,
    borderTopWidth: vars.borderWidths,
  },
});

export const sprinkles = createSprinkles(responsiveProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];
