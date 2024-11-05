import React from "react"
import { Text } from "react-native"
import { useThemeColor } from "@/hooks/useThemeColor"
import type { ThemedTextProps } from "./ThemedText.props"
import { themedTextStyles as styles } from "./ThemedText.styles"

export const ThemedText: React.FC<ThemedTextProps> = ({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text")

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  )
}
