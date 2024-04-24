"use client";

import { ThemeProvider } from "next-themes";

import { lightTheme, darkTheme } from "@/shared/styles/theme.css";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function Provider({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      {children}
    </ThemeProvider>
  );
}
