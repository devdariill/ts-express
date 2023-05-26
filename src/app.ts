import cors from 'cors'
import express from 'express'
import { router } from './routes/'

import 'dotenv/config'

import dbConnect from './config/mongo'

const PORT = process.env.PORT ?? 3000

const app = express()
app.use(cors())
app.use(express.json())

dbConnect().then(() => console.log('Database connected')).catch((e) => console.log('Database error', e))

app.use(router)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
