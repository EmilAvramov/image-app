import React from 'react'
import { useImagesAPI } from '../context/useImagesAPI'
import { ImageForm } from '../forms/ImageForm'
import type { ImageFormValues } from '../types/helpers'

export const CreateImage: React.FC = () => {
  const { api, setImageData } = useImagesAPI()

  const submitForm = async (data: ImageFormValues) => {
    const createResult = await api?.createImage(data)
    console.log(createResult)
    if (createResult?.status === 201) {
      const refetchedImages = await api?.getImages()
      if (refetchedImages?.status === 200) {
        setImageData(refetchedImages.data)
      }
    }
  }

  return (
    <main>
      <ImageForm submitFunction={submitForm} />
    </main>
  )
}
