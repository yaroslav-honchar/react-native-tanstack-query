import type { PropsWithChildren } from "react"
import React from "react"
import { useColorScheme } from "@/hooks/useColorScheme"
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  const colorScheme = useColorScheme()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  )
}
