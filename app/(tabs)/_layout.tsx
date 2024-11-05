import { Tabs } from "expo-router"
import React from "react"
import { Icon } from "@/components/ui/Icon"
import { Colors } from "@/constants/Colors"
import { useColorScheme } from "@/hooks/useColorScheme"

const TabLayout = () => {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Icon
              name={"home"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="movies/index"
        options={{
          title: "Movies",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon
              name={"movie"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="movies/[id]"
        options={{
          title: "Movie Details",
          headerShown: false,
          href: null,
        }}
      />
    </Tabs>
  )
}
export default TabLayout
