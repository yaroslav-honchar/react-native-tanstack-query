import { router } from "expo-router"
import React from "react"
import { Image, Pressable } from "react-native"
import { ThemedText } from "@/components/ThemedText/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { genImageUrlPoster } from "@/utils/build-image-url"
import type { CardMovieProps } from "./CardMovie.props"
import { cardMovieStyles as styles } from "./CardMovie.styles"

export const CardMovie: React.FC<CardMovieProps> = ({ movie }) => {
  const { title, poster_path, release_date, id } = movie
  const releaseYear = new Date(release_date).getFullYear()

  return (
    <Pressable
      style={styles.root}
      onPress={() =>
        router.push({
          pathname: "/movies/[id]",
          params: {
            id,
          },
        })
      }
    >
      <Image
        source={{
          uri: genImageUrlPoster(poster_path),
        }}
        style={styles.poster}
      />

      <ThemedView style={styles.wrapper}>
        <ThemedText
          style={styles.title}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </ThemedText>
        <ThemedText
          style={styles.title}
          type={"muted"}
        >
          {releaseYear}
        </ThemedText>
      </ThemedView>
    </Pressable>
  )
}
