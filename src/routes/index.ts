import { Router } from 'express'
import { readdirSync } from 'node:fs'

const router = Router()

const cleanFileName = (fileName: string) => {
  const name = fileName.split('.').shift()
  return name
}

const PATH_ROUTESR = `${__dirname}`
readdirSync(PATH_ROUTESR).filter((file) => {
  console.log(file)
  const fileName = cleanFileName(file)
  if (fileName === 'index') return false
  console.log(fileName)
  return true
})

export { router }
// eslint-disable-next-line no-multiple-empty-lines

