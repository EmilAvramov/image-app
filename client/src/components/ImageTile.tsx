import React from 'react'
import type { Image } from '../types/image'

interface ImageTileProps {
  image: Image
}

export const ImageTile: React.FC<ImageTileProps> = ({ image }): JSX.Element => {
  return (
    <div>
      <div>{image.description}</div>
      <img src={image.url} alt={image.title} />
    </div>
  )
}
