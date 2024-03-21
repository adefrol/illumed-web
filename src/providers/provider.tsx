"use client";

import { FC } from "react";
import { ThemeProvider } from "next-themes";

export const Providers: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      forcedTheme="dark"
    >
      {children}
    </ThemeProvider>
  );
};
