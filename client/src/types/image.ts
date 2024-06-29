export interface Image {
  title: string
  description: string
  url: string
}

export interface GetImagePayload {
  id: string
}

export interface CreateImagePayload extends Image {}

export interface UpdateImagePayload {
  title?: string
  description?: string
  url?: string
}

export interface DeleteImagePayload {
  id: string
}
