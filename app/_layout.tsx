import * as SplashScreen from "expo-splash-screen"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import { useEffect } from "react"
import "react-native-reanimated"
import { Providers } from "@/components/Providers"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <Providers>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </Providers>
  )
}
