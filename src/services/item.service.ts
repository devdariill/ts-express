import { Car } from '../interfaces/car.interface'
import ItemModeel from '../models/item.model'

const insertCar = async (item: Car) => {
  const responseInsert = await ItemModeel.create(item)
  return responseInsert
}
const getCars = async () => {
  const response = await ItemModeel.find({})
  return response
}
const getCar = async (id: string) => {
  const response = await ItemModeel.findOne({ _id: id })
  return response
}

export { getCar, getCars, insertCar }
// eslint-disable-next-line no-multiple-empty-lines

