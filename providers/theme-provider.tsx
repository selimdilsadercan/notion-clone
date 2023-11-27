"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider enableSystem={false} storageKey="jotion-theme" attribute="class" defaultTheme="dark" {...props}>
      {children}
    </NextThemesProvider>
  );
}

export default ThemeProvider;
