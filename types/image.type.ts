type ImageType = {
  id: number
  url: string
  hash: string
  width: number
  height: number
  nsfwLevel: "None" | "Soft" | "Hard"
  nsfw: boolean
  browsingLevel: number
  createdAt: string
  postId: number
  stats: ImageStatsType
  meta: MetaDataType
  username: string
  baseModel: string
}

type ImageStatsType = {
  cryCount: number
  laughCount: number
  likeCount: number
  dislikeCount: number
  heartCount: number
  commentCount: number
}

type MetaDataType = {
  Size: string
  seed: number
  steps: number
  hashes: HashesType
  prompt: string
  Version?: string
  sampler: string
  cfgScale: number
  resources: ResourceType[]
  negativePrompt?: string
  [key: string]: unknown
}

type HashesType = {
  model: string
  [key: string]: string
}

type ResourceType = {
  hash: string
  name?: string
  type: "lora" | "checkpoint" | "embed" | string
  weight?: number
  modelVersionId?: number
}

export type { ImageType, ImageStatsType, MetaDataType, HashesType, ResourceType }
