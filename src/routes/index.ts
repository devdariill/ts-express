import { Router } from 'express'
import { readdirSync } from 'node:fs'

const router = Router()

const cleanFileName = (fileName: string) => {
  const name = fileName.split('.').shift()
  return name
}

const PATH_ROUTESR = `${__dirname}`
readdirSync(PATH_ROUTESR).filter((file) => {
  console.log('🚀 ~ file: index.ts:13 ~ readdirSync ~ file:', file)
  const fileName = cleanFileName(file)
  if (fileName == null) return false
  if (fileName !== 'index') {
    import (`./${fileName}.routes`).then((module) => {
      router.use(`/${fileName}`, module.router)
    }).catch((e) => {
      console.log('🚀 ~ file: index.ts:20 ~ import ~ e:', e)
    })
  }
  console.log('🚀 ~ file: index.ts:15 ~ readdirSync ~ fileName:', fileName)
  return true
})

export { router }
// eslint-disable-next-line no-multiple-empty-lines

