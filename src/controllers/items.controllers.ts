import { Request, Response } from 'express'
import { getCars, insertCar } from '../services/item.service'
import { handleHttp } from '../utils/error.handle'

const getItem = (req: Request, res: Response) => {
  try {
    const id = req.params.id
    console.log('🚀 ~ file: items.controllers.ts:5 ~ getItem ~ id', id)
    res.json({ id })
  } catch (error) {
    console.log('🚀 ~ file: items.controllers.ts:7 ~ getItem ~ error:', error)
    handleHttp(res, 'ERROR_GET_ITEM', error)
  }
}
const getItems = async (req: Request, res: Response) => {
  try {
    const items = await getCars()
    res.json({ items })
    // res.send(items)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS', error)
    console.log('🚀 ~ file: items.controllers.ts:16 ~ getItems ~ error:', error)
  }
}
const updateItem = (req: Request, res: Response) => {
  try {
    const body = req.body
    res.json({ body })
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
const deleteItem = (req: Request, res: Response) => {
  try {
    res.json('deleteItem')
  } catch (error) {
    console.log('🚀 ~ file: items.controllers.ts:40 ~ deleteItem ~ error:', error)
    handleHttp(res, 'ERROR_DELETE_ITEM', error)
  }
}

export { deleteItem, getItem, getItems, postItem, updateItem }
// eslint-disable-next-line no-multiple-empty-lines

