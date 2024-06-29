import React, { useEffect, useState } from 'react'
import { ImagesAPI } from '../api/images'
import type { Image } from '../types/image'
import type { ImageData } from '../types/helpers'
import { ImageList } from '../components/ImageList'

export const Home = (): JSX.Element => {
  const [imageData, setImageData] = useState<ImageData>({
    images: [],
    total: 0,
  })
  const [api, setApi] = useState<ImagesAPI>()

  useEffect(() => {
    const createAPI = (): void => {
      const imagesAPI = new ImagesAPI()
      setApi(imagesAPI)
    }
    createAPI()
  }, [])

  useEffect(() => {
    if (api) {
      const loadImages = async (): Promise<void> => {
        const images = await api.getImages()
        if (images.data) {
          setImageData({
            images: images.data,
            total: images.data.length,
          })
        }
      }
    }
  }, [api])

  return (
    <main>
      {imageData.images.length > 0 && <ImageList images={imageData.images} />}
      {!imageData.images.length && <div>No images created yet!</div>}
    </main>
  )
}
