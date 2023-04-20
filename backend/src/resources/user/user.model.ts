import mongoose, { Schema } from 'mongoose'

export interface IUserInterface {
  firstName: String
  lastName: String
  email: String
  password: String
  isVerified: Boolean
  role: String
}

const userSchema: Schema<IUserInterface> = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },

    lastName: {
      type: String,
      required: true
    },
    
    email: {
      type: String,
      required: false
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 1024
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    role: {
      type: String,
      enum: ['student', 'admin', 'superadmin'],
      default: 'student'
    }
  },
  {
    timestamps: {
      createdAt: 'dateCreated',
      updatedAt: 'dateUpdated'
    }
  }
)

export const User = mongoose.model<IUserInterface>('User', userSchema)
