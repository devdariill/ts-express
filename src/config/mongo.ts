import 'dotenv/config'
import { connect } from 'mongoose'

const DB_URI = process.env.DB_URI ?? 'mongodb://localhost:27017/ts-express'

async function dbConnect (): Promise<void> {
  await connect(DB_URI)
}

export default dbConnect
