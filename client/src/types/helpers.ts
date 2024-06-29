import type { Image } from './image'

export interface ImageData {
  data: Image[]
  total: number
}

export interface ImageFormValues {
  title: string
  description: string
  url: string
}
