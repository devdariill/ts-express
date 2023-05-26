import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'

const getItem = (req: Request, res: Response) => {
  try {

  } catch (error) {
    console.log('🚀 ~ file: items.controllers.ts:7 ~ getItem ~ error:', error)
    handleHttp(res, 'ERROR_GET_ITEM')
  }
}
const getItems = (req: Request, res: Response) => {
  try {

  } catch (error) {
    console.log('🚀 ~ file: items.controllers.ts:16 ~ getItems ~ error:', error)
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
}
const updateItem = (req: Request, res: Response) => {
  try {

  } catch (error) {
    console.log('🚀 ~ file: items.controllers.ts:24 ~ updateItem ~ error:', error)
    handleHttp(res, 'ERROR_UPDATE_ITEM')
  }
}
const posetItem = (req: Request, res: Response) => {
  try {

  } catch (error) {
    console.log('🚀 ~ file: items.controllers.ts:32 ~ posetItem ~ error:', error)
    handleHttp(res, 'ERROR_POSET_ITEM')
  }
}
const deleteItem = (req: Request, res: Response) => {
  try {

  } catch (error) {
    console.log('🚀 ~ file: items.controllers.ts:40 ~ deleteItem ~ error:', error)
    handleHttp(res, 'ERROR_DELETE_ITEM')
  }
}

export { deleteItem, getItem, getItems, posetItem, updateItem }
// eslint-disable-next-line no-multiple-empty-lines

