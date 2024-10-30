import { FlatList, Image, SafeAreaView } from "react-native"
import { fetchImages } from "@/api/civitai.api"
import { Loader } from "@/components/Loader"
import { ThemedText } from "@/components/ThemedText"
import { useQuery } from "@tanstack/react-query"

export default function HomeScreen() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["images"],
    queryFn: fetchImages,
  })

  return (
    <SafeAreaView style={{ padding: 32 }}>
      {isLoading && <Loader />}
      {isError && <ThemedText>Error fetching images</ThemedText>}
      {data && (
        <FlatList
          numColumns={2}
          data={data.data.items}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item.url }}
              style={{ width: "50%", height: 200 }}
            />
          )}
        />
      )}
    </SafeAreaView>
  )
}
