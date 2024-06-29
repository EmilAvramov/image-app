import axios from 'axios'
import type { AxiosResponse } from 'axios'
import type {
  CreateImagePayload,
  DeleteImagePayload,
  GetImagePayload,
  GetImagesResponse,
  Image,
  UpdateImagePayload,
} from '../types/image'

const CONFIGS = {
  URL: 'http://localhost:8080/images',
}

export class ImagesAPI {
  getImage = async (payload: GetImagePayload): Promise<AxiosResponse<Image>> => {
    return await axios.get<Image>(CONFIGS.URL, {
      params: payload,
    })
  }

  getImages = async (): Promise<AxiosResponse<GetImagesResponse>> => {
    return await axios.get<GetImagesResponse>(CONFIGS.URL)
  }

  createImage = async (payload: CreateImagePayload): Promise<AxiosResponse<Image>> => {
    return await axios.post<Image>(CONFIGS.URL, payload)
  }

  updateImage = async (payload: UpdateImagePayload): Promise<AxiosResponse<Image>> => {
    return await axios.patch<Image>(CONFIGS.URL, payload)
  }

  deleteImage = async (payload: DeleteImagePayload): Promise<AxiosResponse<void>> => {
    return await axios.delete(CONFIGS.URL, {
      params: payload,
    })
  }
}
