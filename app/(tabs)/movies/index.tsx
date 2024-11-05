import React from "react"
import { FlatList, SafeAreaView, View } from "react-native"
import { CardMovie } from "@/components/CardMovie"

const movies = [
  {
    adult: false,
    backdrop_path: "/gMQibswELoKmB60imE7WFMlCuqY.jpg",
    genre_ids: [27, 53],
    id: 1034541,
    original_language: "en",
    original_title: "Terrifier 3",
    overview:
      "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
    popularity: 6883.159,
    poster_path: "/63xYQj1BwRFielxsBDXvHIJyXVm.jpg",
    release_date: "2024-10-09",
    title: "Terrifier 3",
    video: false,
    vote_average: 7.3,
    vote_count: 583,
  },
  {
    adult: false,
    backdrop_path: "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
    genre_ids: [878, 28, 12],
    id: 912649,
    original_language: "en",
    original_title: "Venom: The Last Dance",
    overview:
      "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
    popularity: 5590.757,
    poster_path: "/k42Owka8v91trK1qMYwCQCNwJKr.jpg",
    release_date: "2024-10-22",
    title: "Venom: The Last Dance",
    video: false,
    vote_average: 6.7,
    vote_count: 467,
  },
]

const Movies: React.FC = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={movies}
        numColumns={2}
        renderItem={({ item }) => (
          <View
            style={{
              width: "50%",
              padding: 8,
            }}
          >
            <CardMovie movie={item} />
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Movies
