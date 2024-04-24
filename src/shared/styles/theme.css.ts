import { createGlobalTheme, createTheme, createThemeContract } from "@vanilla-extract/css";

import { hexToRGBA } from "../utils";

import tokens, { colors } from "./tokens";

const theme = createThemeContract({
  primary: "",
  "primary-hover": "",
  "primary-active": "",

  "text-primary": "",
  "text-secondary": "",
  "text-tertiary": "",

  "background-primary": "",
  "background-secondary": "",
  "background-tertiary": "",
});

const global = createGlobalTheme(":root", tokens);

export const vars = { ...global, theme };

export const lightTheme = createTheme(theme, {
  primary: colors.blue600,
  "primary-hover": colors.blue500,
  "primary-active": colors.blue700,

  "text-primary": hexToRGBA(colors["black"], 0.9),
  "text-secondary": hexToRGBA(colors["black"], 0.55),
  "text-tertiary": hexToRGBA(colors["black"], 0.45),

  "background-primary": colors.white,
  "background-secondary": colors.gray050,
  "background-tertiary": colors.gray100,
});

export const darkTheme = createTheme(theme, {
  primary: colors.blue800,
  "primary-hover": colors.blue700,
  "primary-active": colors.blue900,

  "text-primary": hexToRGBA(colors.white, 0.9),
  "text-secondary": hexToRGBA(colors.white, 0.6),
  "text-tertiary": hexToRGBA(colors.white, 0.45),

  "background-primary": colors.dark800,
  "background-secondary": colors.gray700,
  "background-tertiary": colors.gray600,
});
