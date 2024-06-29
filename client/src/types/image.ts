export interface Image {
  id: number
  title: string
  description: string
  url: string
}

export interface GetImagePayload {
  id: number
}

export interface GetImagesResponse {
  data: Image[]
  total: number
}

export interface CreateImagePayload extends Omit<Image, 'id'> {}

export interface UpdateImagePayload {
  id: number
  data: {
    title?: string
    description?: string
    url?: string
  }
}

export interface DeleteImagePayload {
  id: number
}
