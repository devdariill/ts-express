import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'

const getItem = (req: Request, res: Response) => {
  try {
    const id = req.params.id
    console.log('🚀 ~ file: items.controllers.ts:5 ~ getItem ~ id', id)
    res.json({ id })
  } catch (error) {
    console.log('🚀 ~ file: items.controllers.ts:7 ~ getItem ~ error:', error)
    handleHttp(res, 'ERROR_GET_ITEM')
  }
}
const getItems = (req: Request, res: Response) => {
  try {
    res.json({ items: [] })
  } catch (error) {
    console.log('🚀 ~ file: items.controllers.ts:16 ~ getItems ~ error:', error)
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
}
const updateItem = (req: Request, res: Response) => {
  try {
    const body = req.body
    res.json({ body })
  } catch (error) {
    console.log('🚀 ~ file: items.controllers.ts:24 ~ updateItem ~ error:', error)
    handleHttp(res, 'ERROR_UPDATE_ITEM')
  }
}
const postItem = (req: Request, res: Response) => {
  try {
    res.json('postItem')
  } catch (error) {
    console.log('🚀 ~ file: items.controllers.ts:32 ~ postItem ~ error:', error)
    handleHttp(res, 'ERROR_POST_ITEM')
  }
}
const deleteItem = (req: Request, res: Response) => {
  try {
    res.json('deleteItem')
  } catch (error) {
    console.log('🚀 ~ file: items.controllers.ts:40 ~ deleteItem ~ error:', error)
    handleHttp(res, 'ERROR_DELETE_ITEM')
  }
}

export { deleteItem, getItem, getItems, postItem, updateItem }
// eslint-disable-next-line no-multiple-empty-lines

