import { type TextProps } from "react-native"
import type { themedTextStyles } from "./ThemedText.styles"

export type ThemedTextProps = TextProps & {
  lightColor?: string
  darkColor?: string
  type?: keyof typeof themedTextStyles
}
