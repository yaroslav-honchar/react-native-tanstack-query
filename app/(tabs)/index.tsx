import { FlatList, Image, SafeAreaView } from "react-native"
import { fetchMoviesList } from "@/api/movies.api"
import { Loader } from "@/components/Loader"
import { ThemedText } from "@/components/ThemedText"
import { useQuery } from "@tanstack/react-query"

export default function HomeScreen() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["images"],
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
                uri: `https://media.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`,
              }}
              style={{ width: "50%", height: 200 }}
            />
          )}
        />
      )}
    </SafeAreaView>
  )
}
