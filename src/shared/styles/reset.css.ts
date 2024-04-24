import { globalStyle } from "@vanilla-extract/css";

import { vars } from "./theme.css";

globalStyle("html, body", {
  width: "100%",
  height: "100%",

  padding: 0,
  margin: 0,

  overflow: "hidden",

  color: vars.theme["text-primary"],
  fontFamily: vars.fontFamily.body,
  backgroundColor: vars.theme["background-primary"],
});

globalStyle(`*:where(:not(canvas, iframe, img, svg, svg *, symbol *, video))`, {
  all: "unset",
  display: "revert",
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("table", {
  borderCollapse: "collapse",
  borderSpacing: 0,
});

globalStyle("canvas, img, picture, svg, video", {
  display: "block",
  maxWidth: "100%",
});

globalStyle("ul, ol, menu", {
  display: "block",
  listStyle: "none",
});

globalStyle("a", {
  cursor: "pointer",
});

globalStyle("button", {
  cursor: "pointer",
  userSelect: "none",
});

globalStyle("input::-ms-clear", {
  WebkitAppearance: "none",
  appearance: "none",
});

globalStyle('input[type="search"]::-webkit-search-cancel-button', {
  WebkitAppearance: "none",
  appearance: "none",
});

globalStyle("input::-webkit-inner-spin-button, input::-webkit-outer-spin-button", {
  WebkitAppearance: "none",
  appearance: "none",
});
