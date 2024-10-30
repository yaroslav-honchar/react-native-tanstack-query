import axios, { type AxiosRequestConfig } from "axios"
import Constants from "expo-constants"
import type { ImageType } from "@/types/image.type"

const token = Constants.expoConfig?.extra?.CIVITAI_API_KEY
if (!token) {
  throw new Error("CIVITAI_API_KEY is not defined in the environment variables")
}

export const civitaiCore = axios.create({
  baseURL: "https://civitai.com/api/v1",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
})

civitaiCore.interceptors.request.use((request) => {
  console.log(request)
  return request
})

export const fetchImages = (configs?: AxiosRequestConfig) => {
  return civitaiCore.get<{ items: ImageType[] }>("/images", configs)
}
