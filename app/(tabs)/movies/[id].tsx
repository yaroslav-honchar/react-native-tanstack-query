import { useLocalSearchParams } from "expo-router"
import React from "react"
import { SafeAreaView } from "react-native"
import { ThemedText } from "@/components/ThemedText"

const Movie: React.FC = () => {
  const { id } = useLocalSearchParams()

  return (
    <SafeAreaView>
      <ThemedText>Movie {id}</ThemedText>
    </SafeAreaView>
  )
}

export default Movie
