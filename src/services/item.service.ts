import { Car } from '../interfaces/car.interface'
import ItemModeel from '../models/item.model'

const insertCar = async (item: Car) => {
  const responseInsert = await ItemModeel.create(item)
  return responseInsert
}
export { insertCar }
// eslint-disable-next-line no-multiple-empty-lines

