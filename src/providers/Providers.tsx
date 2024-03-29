"use client";

import { SwitchUserContextProvider } from "@/context/SwitchUserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SwitchUserContextProvider>{children}</SwitchUserContextProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};
