import mongoose, { Schema } from 'mongoose'

export interface ILectureInterface {
  title: String
  description: String
  duration: Number
  link: String
}

const lectureSchema: Schema<ILectureInterface> = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    duration: {
      type: Number,
      required: true
    },
    link: {
      type: String,
      required: false
    }
  },
  {
    timestamps: {
      createdAt: 'dateCreated',
      updatedAt: 'dateUpdated'
    }
  }
)

export const Lecture = mongoose.model<ILectureInterface>('Lecture', lectureSchema)
