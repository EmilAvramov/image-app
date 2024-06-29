import React from 'react'

import { ImageTile } from './ImageTile'

import type { Image } from '../types/image'

interface ImageListProps {
  images: Image[]
}

export const ImageList: React.FC<ImageListProps> = ({ images }): JSX.Element => {
  return (
    <div className="container">
      {images.map((image, index) => (
        <ImageTile key={index} image={image} />
      ))}
    </div>
  )
}
