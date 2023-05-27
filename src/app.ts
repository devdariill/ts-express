import cors from 'cors'
import express from 'express'
import authsRoutes from './routes/auth.routes'
import itemsRoutes from './routes/items.routes'

import 'dotenv/config'

import dbConnect from './config/mongo'

const PORT = process.env.PORT ?? 3000

const app = express()
app.use(cors())
app.use(express.json())

dbConnect().then(() => console.log('Database connected')).catch((e) => console.log('Database error', e))

app.use('/items', itemsRoutes)
app.use('/users', authsRoutes)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
