import { Schema, model } from 'mongoose'
import { User } from '../interfaces/user.interface'

const UserSchema = new Schema<User>(
  {

  },
  {
    timestamps: true,
    versionKey: false // data by version like github
  }
)

const UserModel = model<User>('User', UserSchema)
export default UserModel
