import { Router } from 'express'
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/items.controllers'

const router = Router()

router.get('/:id', getItem)
router.get('/', getItems)
router.put('/', updateItem)
router.post('/', postItem)
router.delete('/:id', deleteItem)

export default router
// eslint-disable-next-line no-multiple-empty-lines

