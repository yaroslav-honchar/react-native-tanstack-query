import { FlatList, Image, SafeAreaView } from "react-native"
import { fetchMoviesList } from "@/api/movies.api"
import { Loader } from "@/components/Loader"
import { ThemedText } from "@/components/ThemedText"
import { genImageUrlPoster } from "@/utils/build-image-url"
import { useQuery } from "@tanstack/react-query"

export default function HomeScreen() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["popular_movies"],
    queryFn: () => fetchMoviesList("popular"),
  })

  return (
    <SafeAreaView style={{ padding: 32 }}>
      {isLoading && <Loader />}
      {isError && <ThemedText>Error fetching images</ThemedText>}
      {data && (
        <FlatList
          numColumns={2}
          data={data.data.results}
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
    </SafeAreaView>
  )
}
