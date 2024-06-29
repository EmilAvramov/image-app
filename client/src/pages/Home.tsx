import React, { useEffect } from 'react'
import { ImagesAPI } from '../api/images'

export const Home = (): JSX.Element => {
  useEffect(() => {
    const makeRequest = async (): Promise<void> => {
      const api = new ImagesAPI()
      const res = await api.getImages()
      console.log(res)
    }
    void makeRequest()
  }, [])

  return (
    <main>
      <div>Home works!</div>
    </main>
  )
}
