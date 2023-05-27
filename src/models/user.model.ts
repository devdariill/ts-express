import { Schema, model } from 'mongoose'
import { User } from '../interfaces/user.interface'

const UserSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    description: { type: String, default: 'defauult' },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: false }
  },
  {
    timestamps: true,
    versionKey: false // data by version like github
  }
)

const UserModel = model<User>('User', UserSchema)
export default UserModel
