import axios, { type AxiosRequestConfig } from "axios"
import Constants from "expo-constants"

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

export const fetchImages = (configs?: AxiosRequestConfig) => {
  return civitaiCore.get("/images", configs)
}
