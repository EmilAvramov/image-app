import React from 'react'

import { useLocation } from 'react-router-dom'
import { ImageTile } from '../components/ImageTile'
import type { LocationState } from '../types/helpers'
import { useEffect, useState } from 'react'
import type { Image } from '../types/image'
import { useImagesAPI } from '../context/useImagesAPI'

export const ViewImage: React.FC = (): JSX.Element => {
  const [image, setImage] = useState<Image>()
  const { api } = useImagesAPI()

  const location = useLocation()
  const { id } = location.state as LocationState

  useEffect(() => {
    const getImage = async (): Promise<void> => {
      const imageDataRequest = await api?.getImage({ id: id })
      if (imageDataRequest?.status === 200) {
        setImage(imageDataRequest.data)
      }
    }
    void getImage()
  }, [id, api])

  if (!image) {
    return <></>
  }

  return (
    <div>
      <ImageTile image={image} />
    </div>
  )
}
