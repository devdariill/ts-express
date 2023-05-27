import { compare, hash } from 'bcryptjs'

const encrypt = async (pass: string) => {
  const passwordHash = hash(pass, 10)
  return await passwordHash
}
const verified = async () => {
  const verified = compare('password', 'passwordHash')
  return await verified
}
export { encrypt, verified }
// eslint-disable-next-line no-multiple-empty-lines

