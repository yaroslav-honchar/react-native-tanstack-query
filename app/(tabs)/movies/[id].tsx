import { useLocalSearchParams } from "expo-router"
import React from "react"
import { SafeAreaView } from "react-native"
import { fetchMovie } from "@/api/movies.api"
import { ThemedText } from "@/components/ThemedText"
import { useQuery } from "@tanstack/react-query"

const Movie: React.FC = () => {
  const { id } = useLocalSearchParams()
  const { data } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovie(id as string),
  })

  if (!data) {
    return null
  }

  const { title, overview } = data.data

  return (
    <SafeAreaView>
      <ThemedText>Movie: {title}</ThemedText>
      <ThemedText>Overview: {overview}</ThemedText>
    </SafeAreaView>
  )
}

export default Movie
