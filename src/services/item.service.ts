import { Car } from '../interfaces/car.interface'
import ItemModel from '../models/item.model'

const insertCar = async (item: Car) => {
  const responseInsert = await ItemModel.create(item)
  return responseInsert
}
const getCars = async () => {
  const response = await ItemModel.find({})
  return response
}
const getCar = async (id: string) => {
  const response = await ItemModel.findOne({ _id: id })
  return response
}
const updateCar = async (id: string, item: Car) => {
  const response = await ItemModel.findOneAndUpdate(
    { _id: id },
    item,
    { new: true }
  )
  return response
}
const deleteCar = async (id: string) => {
  const response = await ItemModel.findOneAndRemove({ _id: id })
  return response
}

export { deleteCar, getCar, getCars, insertCar, updateCar }
// eslint-disable-next-line no-multiple-empty-lines

