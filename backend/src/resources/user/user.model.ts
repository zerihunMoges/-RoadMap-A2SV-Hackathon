import mongoose, { Schema } from 'mongoose'

export interface IUserInterface {
  firstName: String
  lastName: String
  email: String
  password: String
  role: String
  roadmaps: [mongoose.Schema.Types.ObjectId]
  enrolled: [mongoose.Schema.Types.ObjectId]
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
      required: true
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 1024
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
      required: false
    },
    roadmaps: {
      type: [mongoose.Schema.Types.ObjectId],
      ref:"Roadmap",
      required: false
    },
    enrolled: {
      type: [mongoose.Schema.Types.ObjectId],
      ref:"Roadmap",
      required: false
    },
  },
  {
    timestamps: {
      createdAt: 'dateCreated',
      updatedAt: 'dateUpdated'
    }
  }
)

export const User = mongoose.model<IUserInterface>('User', userSchema)
