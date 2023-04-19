import mongoose, { Schema } from 'mongoose'

export interface IUserInterface {
  firstName: String
  lastName: String
  set: String
  nationality: String
  birthDate: Date
  phoneNumber: String
  email: String
  program: String
  level: Number
  semester: Number
  graduationYear: Date
  password: String
  photoURL: String
  isVerified: Boolean
  deleted: Boolean
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
    set: {
      type: String,
      default: 'true'
    },
    nationality: {
      type: String,
      enum: [
        'Ethiopian',
        'Kenyan',
        'Sudanese',
        'South Sudanese',
        'Eritrean',
        'Somailan'
      ],
      default: 'Ethiopian'
    },
    birthDate: {
      type: Date,
      required: false
    },

    program: {
      type: String,
      enum: [
        'Ethiopian',
        'Kenyan',
        'Sudanese',
        'South Sudanese',
        'Eritrean',
        'Somailan',
        'Finished'
      ],
      required: false
    },
    level: {
      type: Number,
      enum: [1, 2, 3, 4, 5, 0],
      default: 0,
      required: false
    },
    semester: {
      type: Number,
      enum: [1, 2, 0],
      default: 0,
      required: false
    },
    graduationYear: {
      type: Date,
      required: false
    },

    phoneNumber: {
      type: String,
      required: false
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

    photoURL: {
      type: String,
      default:
        'https://res.cloudinary.com/digitallibrary/image/upload/v1662131476/defaults/profile_qrezuo.jpg',
      required: false
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    deleted: {
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
