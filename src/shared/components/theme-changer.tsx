"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// ref: https://github.com/pacocoursey/next-themes?tab=readme-ov-file#avoid-hydration-mismatch
export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
}
