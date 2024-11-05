import React from "react"
import { StyleSheet } from "react-native"
import { ThemedText } from "@/components/ThemedText/ThemedText"
import { ThemedView } from "@/components/ThemedView"

export const Loader: React.FC = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Loading...</ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
})
