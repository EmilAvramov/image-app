import React from 'react'
import type { Image } from '../types/image'
import { useImagesAPI } from '../context/useImagesAPI'
import { useNavigate } from 'react-router-dom'

interface ImageTileProps {
  image: Image
}

export const ImageTile: React.FC<ImageTileProps> = ({ image }): JSX.Element => {
  const { api, setImageData } = useImagesAPI()
  const navigate = useNavigate()

  const handleDelete = async () => {
    const deleteResult = await api?.deleteImage({ id: image.id })
    console.log(deleteResult)
    if (deleteResult?.status === 204) {
      const refetchedImages = await api?.getImages()
      if (refetchedImages?.status === 200) {
        setImageData(refetchedImages?.data)
      }
    }
  }

  const handleEdit = () => {
    navigate('/edit', { state: { id: image.id } })
  }

  return (
    <div>
      <div>{image.description}</div>
      <button onClick={() => handleEdit()}>Edit</button>
      <button onClick={() => handleDelete()}>Delete</button>
      <img src={image.url} alt={image.title} />
    </div>
  )
}
