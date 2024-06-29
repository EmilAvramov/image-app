import React, { useMemo } from 'react'

import { useImagesAPI } from '../context/useImagesAPI'
import { ImageForm } from '../forms/ImageForm'
import { useLocation } from 'react-router-dom'

import type { ImageFormValues, LocationState } from '../types/helpers'

export const EditImage: React.FC = () => {
  const location = useLocation()
  const { id } = location.state as LocationState
  const { api, imageData, setImageData } = useImagesAPI()

  const imageTileData = useMemo(
    () => imageData.data.find((image) => image.id === id),
    [imageData, id]
  )

  const submitForm = async (data: ImageFormValues) => {
    const editResult = await api?.updateImage({ id, data })
    console.log(editResult)
    if (editResult?.status === 200) {
      const refetchedImages = await api?.getImages()
      if (refetchedImages?.status === 200) {
        setImageData(refetchedImages?.data)
      }
    }
  }

  return (
    <main>
      <ImageForm
        submitFunction={submitForm}
        defaultValues={{
          description: imageTileData?.description,
          title: imageTileData?.title,
          url: imageTileData?.url,
        }}
        buttonText={'Edit Image'}
      />
    </main>
  )
}
