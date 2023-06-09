import { Request, Response } from 'express'
import { deleteCar, getCar, getCars, insertCar, updateCar } from '../services/item.service'
import { handleHttp } from '../utils/error.handle'

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const car = await getCar(id)
    if (car == null) {
      return handleHttp(res, 'CAR_NOT_FOUND')
    }
    res.json({ car })
  } catch (error) {
    console.log('🚀 ~ file: items.controllers.ts:7 ~ getItem ~ error:', error)
    handleHttp(res, 'ERROR_GET_ITEM', error)
  }
}
const getItems = async (req: Request, res: Response) => {
  try {
    const items = await getCars()
    return res.json({ items })
    // res.send(items)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS', error)
    console.log('🚀 ~ file: items.controllers.ts:16 ~ getItems ~ error:', error)
  }
}
const updateItem = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const response = await updateCar(body._id, body)
    res.json({ response })
  } catch (error) {
    console.log('🚀 ~ file: items.controllers.ts:24 ~ updateItem ~ error:', error)
    handleHttp(res, 'ERROR_UPDATE_ITEM', error)
  }
}
const postItem = async (req: Request, res: Response) => {
  try {
    const { body } = req
    const response = await insertCar(body)
    return res.send(response)
  } catch (error) {
    console.log('🚀 ~ file: items.controllers.ts:32 ~ postItem ~ error:', error)
    handleHttp(res, 'ERROR_POST_ITEM', error)
  }
}
const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const response = await deleteCar(params.id)
    return res.send(response)
  } catch (error) {
    console.log('🚀 ~ file: items.controllers.ts:40 ~ deleteItem ~ error:', error)
    handleHttp(res, 'ERROR_DELETE_ITEM', error)
  }
}

export { deleteItem, getItem, getItems, postItem, updateItem }
// eslint-disable-next-line no-multiple-empty-lines

