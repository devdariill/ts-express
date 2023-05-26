import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'

const getBlog = (req: Request, res: Response) => {
  try {
    const id = req.params.id
    res.json({ id })
  } catch (error) {
    handleHttp(res, 'ERROR_GET_BLOG')
  }
}
const getBlogs = (req: Request, res: Response) => {
  try {
    res.json({ blogs: [] })
  } catch (error) {
    handleHttp(res, 'ERROR_GET_BLOGS')
  }
}
const updateBlog = (req: Request, res: Response) => {
  try {
    const body = req.body
    res.json({ body })
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_BLOG')
  }
}
const postBlog = (req: Request, res: Response) => {
  try {
    res.json('postBlog')
  } catch (error) {
    handleHttp(res, 'ERROR_POST_BLOG')
  }
}
const deleteBlog = (req: Request, res: Response) => {
  try {
    res.json('deleteBlog')
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_BLOG')
  }
}

export { deleteBlog, getBlog, getBlogs, postBlog, updateBlog }
// eslint-disable-next-line no-multiple-empty-lines

