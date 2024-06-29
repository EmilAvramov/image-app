import { Image, ImageModel } from '../models/Image'

export const getImage = async (id: number): Promise<Image | null> => {
  try {
    if (id) {
      return await ImageModel.findByPk(id)
    }
    return null
  } catch (err: any) {
    throw new Error(err.message)
  }
}

export const getImages = async (): Promise<Image[]> => {
  try {
    return await ImageModel.findAll({
      order: [['id', 'DESC']],
    })
  } catch (err: any) {
    throw new Error(err.message)
  }
}

export const createImage = async (payload: Image): Promise<Image> => {
  try {
    return await ImageModel.create(payload)
  } catch (err: any) {
    throw new Error(err.message)
  }
}

export const modifyImage = async (
  id: number,
  title: string | undefined,
  description: string | undefined,
  url: string | undefined
): Promise<[affectedCount: number]> => {
  try {
    return await ImageModel.update({ title, description, url }, { where: { id } })
  } catch (err: any) {
    throw new Error(err.message)
  }
}

export const deleteImage = async (id: number): Promise<void> => {
  try {
    const imageInDB = await ImageModel.findByPk(id)
    if (imageInDB) {
      await ImageModel.destroy({ where: { id } })
    }
  } catch (err: any) {
    throw new Error(err.message)
  }
}
