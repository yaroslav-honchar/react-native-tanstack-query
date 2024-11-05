import type { MoviePickType } from "@/types/movie.type"

export interface CardMovieProps {
  movie: MoviePickType<"poster_path" | "title" | "release_date" | "vote_average">
}
