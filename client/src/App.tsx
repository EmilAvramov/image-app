import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { ImagesAPIProvider } from './context/useImagesAPI'

function App(): JSX.Element {
  return (
    <ImagesAPIProvider>
      <RouterProvider router={router} />
    </ImagesAPIProvider>
  )
}

export default App
