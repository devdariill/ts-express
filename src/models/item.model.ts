import { Schema, model } from 'mongoose'
import { Car, Gas } from '../interfaces/car.interface'

const ItemSchema = new Schema<Car>(
  {
    color: {
      type: String,
      required: true
    },
    gas: {
      type: String,
      enum: Gas,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    description: {
      type: String
    },
    price: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const ItemModeel = model<Car>('Items', ItemSchema)
export default ItemModeel
