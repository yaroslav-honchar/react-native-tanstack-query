import axios, { type AxiosRequestConfig } from "axios"
import type { IMovie } from "@/types/movie.type"
import type { IResults } from "@/types/results.type"
import Constants from "expo-constants/src/Constants"

const token = Constants.expoConfig?.extra?.MOVIEDB_API_KEY
if (!token) {
  throw new Error("MOVIEDB_API_KEY is not defined in env")
}

export const moviedbCore = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
})

export const fetchMoviesList = (
  list: "now_playing" | "popular" | "top_rated" | "upcoming",
  configs?: AxiosRequestConfig,
) => {
  return moviedbCore.get<IResults<IMovie>>(`/movie/${list}`, configs)
}

export const fetchTrendings = (
  timeWindow: "week" | "day" = "day",
  configs?: AxiosRequestConfig,
) => {
  return moviedbCore.get<IResults<IMovie>>(`/trending/movie/${timeWindow}`, configs)
}
