const imageSizes = {
  backdrop: {
    aspectRatio: 16 / 9,
    sizes: {
      300: "w300",
      780: "w780",
      1280: "w1280",
      1920: "w1920",
    },
  },
  poster: {
    aspectRatio: 2 / 3,
    sizes: {
      92: "w92",
      154: "w154",
      185: "w185",
      342: "w342",
      500: "w500",
      780: "w780",
    },
  },
}

export type ImageType = typeof imageSizes
export type ImageTypeSize<T extends keyof ImageType> = keyof ImageType[T]["sizes"]

export const genImageUrlPoster = (path: string, width: ImageTypeSize<"poster"> = 185): string => {
  const size = `w${String(width)}`

  return `https://media.themoviedb.org/t/p/${size}${path}`
}

export const genImageUrlBackdrop = (
  path: string,
  width: ImageTypeSize<"backdrop"> = 780,
): string => {
  const height = Math.round(Number(width) / imageSizes.backdrop.aspectRatio)
  const size = `w${String(width)}_and_h${height}_multi_faces`

  return `https://media.themoviedb.org/t/p/${size}${path}`
}
