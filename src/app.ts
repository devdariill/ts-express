import cors from 'cors'
import express from 'express'
import { router } from './routes/'

import 'dotenv/config'

const PORT = process.env.PORT ?? 3000

const app = express()
app.use(cors())
app.use(express.json())

app.use(router)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
