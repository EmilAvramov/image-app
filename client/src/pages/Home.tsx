import React from 'react'
import { ImageList } from '../components/ImageList'
import { useImagesAPI } from '../context/useImagesAPI'

export const Home = (): JSX.Element => {
  const { imageData } = useImagesAPI()

  return (
    <main>
      {imageData.data.length > 0 && <ImageList images={imageData.data} />}
      {!imageData.data.length && <div>No images created yet!</div>}
    </main>
  )
}
