import { Router } from 'express'
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/items.controllers'
import { logMiddleware } from '../middleware/log'

const router = Router()

router.get('/', logMiddleware, getItems)
router.get('/:id', getItem)
router.put('/', updateItem)
router.post('/', postItem)
router.delete('/:id', deleteItem)

export default router
// eslint-disable-next-line no-multiple-empty-lines

