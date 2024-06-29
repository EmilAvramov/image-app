import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import { ImagesAPI } from '../api/images'
import type { ImageData } from '../types/helpers'

const useValue = () => {
  const [api] = useState<ImagesAPI>()
  const [imageData, setImageData] = useState<ImageData>({
    data: [],
    total: 0,
  })

  return { api, imageData, setImageData }
}

const ImagesAPIContext = createContext({} as ReturnType<typeof useValue>)

export const useImagesAPI = (): {
  api: ImagesAPI | undefined
  imageData: ImageData
  setImageData: React.Dispatch<React.SetStateAction<ImageData>>
} => useContext(ImagesAPIContext)

export const ImagesAPIProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  const [api, setApi] = useState<ImagesAPI>()
  const [imageData, setImageData] = useState<ImageData>({
    data: [],
    total: 0,
  })

  useEffect(() => {
    if (!api) {
      setApi(new ImagesAPI())
    }
  }, [api])

  useEffect(() => {
    if (api) {
      const loadImages = async (): Promise<void> => {
        const imagesRequest = await api.getImages()
        if (imagesRequest.status === 200) {
          setImageData(imagesRequest.data)
        }
      }
      void loadImages()
    }
  }, [api])

  return (
    <ImagesAPIContext.Provider value={{ api, imageData, setImageData }}>
      {children}
    </ImagesAPIContext.Provider>
  )
}
