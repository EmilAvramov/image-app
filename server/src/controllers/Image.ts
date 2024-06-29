import { Router } from 'express'
import type { Request, Response } from 'express'
import { createImage, deleteImage, getImage, getImages, modifyImage } from '../services/Image'
import sequelize from '../config/database'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)

    if (id) {
      const image = await getImage(id)
      res.status(200).json(image)
    }

    const images = await getImages()
    const response = {
      data: images,
      total: images.length,
    }
    res.status(200).json(response)
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred, please try again.' })
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const response = await createImage(req.body.payload)
    res.status(201).json(response)
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred, please try again.' })
  }
})

router.patch('/:id', async (req: Request, res: Response) => {
  try {
    // update by id, check and update with body data if valid
    const id = Number(req.params.id)
    const modifyImageResponse = await modifyImage(
      id,
      req.body.title,
      req.body.description,
      req.body.url
    )
    if (modifyImageResponse[0] > 0) {
      const response = await getImage(id)
      res.status(200).json(response)
    } else {
      // return an error response
    }
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred, please try again.' })
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    await deleteImage(id)
    res.status(204)
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred, please try again.' })
  }
})

export default router
