import { StyleSheet } from "react-native"

export const cardMovieStyles = StyleSheet.create({
  root: {
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
  },

  poster: {
    width: "100%",
    aspectRatio: 2 / 3,
  },

  wrapper: {
    padding: 8,
    gap: 2,
  },
  title: {},
  description: {},
  rating: {},
})
