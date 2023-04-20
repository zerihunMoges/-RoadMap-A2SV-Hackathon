import mongoose, { Schema } from 'mongoose'

export interface IRoadmapInterface {
  title: String
  description: String
  duration: Number
  image: String
  organization: mongoose.Schema.Types.ObjectId
  rating: Number
  enrolled: Number
  rateCount: Number
  pitstops: [mongoose.Schema.Types.ObjectId]
}

const roadmapSchema: Schema<IRoadmapInterface> = new mongoose.Schema(
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
    image: {
      type: String,
      required: false
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    enrolled: {
      type: Number,
      default: 0
    },
    rateCount: {
      type: Number,
      default: 0
    },
    pitstops: {
      type: [mongoose.Schema.Types.ObjectId],
      ref:"Pitstop",
      required: true
  },
  },
  {
    timestamps: {
      createdAt: 'dateCreated',
      updatedAt: 'dateUpdated'
    }
  }
)

export const Roadmap = mongoose.model<IRoadmapInterface>('Roadmap', roadmapSchema)
