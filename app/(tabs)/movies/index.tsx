import React from "react"
import { SafeAreaView } from "react-native"
import { ListMovies } from "@/components/ListMovies"

const Movies: React.FC = () => {
  return (
    <SafeAreaView>
      <ListMovies />
    </SafeAreaView>
  )
}

export default Movies
