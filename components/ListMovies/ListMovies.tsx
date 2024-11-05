import React from "react"
import { FlatList, View } from "react-native"
import { fetchMoviesList } from "@/api/movies.api"
import { CardMovie } from "@/components/CardMovie"
import { useInfiniteQuery } from "@tanstack/react-query"
import type { ListMoviesProps } from "./ListMovies.props"

export const ListMovies: React.FC<ListMoviesProps> = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["popular_movies"],
    queryFn: ({ pageParam }) => fetchMoviesList("popular", { params: { page: pageParam } }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.data.page + 1,
    getPreviousPageParam: (firstPage) => firstPage.data.page - 1,
  })

  return (
    <>
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
            <View style={{ width: "50%", padding: 8 }}>
              <CardMovie movie={item} />
            </View>
          )}
        />
      )}
    </>
  )
}
