export enum Gas {
  Gasoline = 'gasoline',
  Electric = 'electric',
}
export interface Car {
  color: string
  gas: Gas
  year: number
  description: string
  price: number
}
