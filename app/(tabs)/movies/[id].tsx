import { LinearGradient } from "expo-linear-gradient"
import { useLocalSearchParams } from "expo-router"
import React from "react"
import { Image, View } from "react-native"
import { fetchMovie } from "@/api/movies.api"
import ParallaxScrollView from "@/components/ParallaxScrollView"
import { ThemedText } from "@/components/ThemedText"
import { genImageUrlBackdrop, genImageUrlPoster } from "@/utils/build-image-url"
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

  const { title, overview, backdrop_path, poster_path } = data.data

  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        light: "rgba(255,255,255,.35)",
        dark: "rgba(0,0,0,.35)",
      }}
      headerImage={
        <>
          <Image
            source={{
              uri: genImageUrlBackdrop(backdrop_path, 780),
            }}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <LinearGradient
            colors={["rgba(0,0,0,0.25)", "rgba(0,0,0,0.75)"]}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </>
      }
    >
      <View
        style={{
          position: "relative",
          marginTop: -125,
        }}
      >
        <Image
          source={{
            uri: genImageUrlPoster(poster_path, 500),
          }}
          style={{
            position: "relative",
            zIndex: 2,
            width: "35%",
            aspectRatio: 2 / 3,
            borderRadius: 12,
          }}
        />
      </View>
      <ThemedText type={"subtitle"}>{title}</ThemedText>
      <ThemedText>{overview}</ThemedText>
    </ParallaxScrollView>
  )
}

export default Movie
