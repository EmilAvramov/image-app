import { Router } from 'express'
import type { Request, Response } from 'express'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)

    // if ID, query by id, else query and return all

    // query db to get all images
    const response = {
      data: [],
      total: 0,
    }
    res.status(200).json(response)
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred, please try again.' })
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const image = {
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
    }
    // create image service with model
    const response = {}
    res.status(201).json(response)
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred, please try again.' })
  }
})

router.put('/:id', async (req: Request, res: Response) => {
  try {
    // update by id, check and update with body data if valid
    const id = Number(req.params.id)
    const image = {
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
    }
    const response = {}
    res.status(200).json(response)
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred, please try again.' })
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    // delete by id
    res.status(204)
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred, please try again.' })
  }
})

export default router
