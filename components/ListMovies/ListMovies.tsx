import React from "react"
import { FlatList, Image } from "react-native"
import { fetchMoviesList } from "@/api/movies.api"
import { Loader } from "@/components/Loader"
import { ThemedText } from "@/components/ThemedText/ThemedText"
import { genImageUrlPoster } from "@/utils/build-image-url"
import { useInfiniteQuery } from "@tanstack/react-query"
import type { ListMoviesProps } from "./ListMovies.props"

export const ListMovies: React.FC<ListMoviesProps> = () => {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["popular_movies"],
    queryFn: ({ pageParam }) => fetchMoviesList("popular", { params: { page: pageParam } }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.data.page + 1,
    getPreviousPageParam: (firstPage) => firstPage.data.page - 1,
  })

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ThemedText>Error fetching images</ThemedText>}
      {data && (
        <FlatList
          numColumns={2}
          data={data.pages.flatMap((page) => page.data.results)}
          onEndReached={() => {
            if (hasNextPage) {
              fetchNextPage()
            }
          }}
          renderItem={({ item }) => (
            <Image
              source={{
                uri: genImageUrlPoster(item.poster_path),
              }}
              style={{ width: "50%", height: 200 }}
            />
          )}
        />
      )}
    </>
  )
}
