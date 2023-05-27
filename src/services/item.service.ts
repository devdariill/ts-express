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

export { getCars, insertCar }
// eslint-disable-next-line no-multiple-empty-lines

