import mongoose, { Schema } from 'mongoose'

export interface IPitstopInterface {
    title: String
    lectures: [mongoose.Schema.Types.ObjectId]
}


const pitstopSchema: Schema<IPitstopInterface> = new mongoose.Schema(
    {
      title: {
        type: String,
        required: false
      },
      lectures: {
        type: [mongoose.Schema.Types.ObjectId],
        ref:"Lecture",
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
  
export const Pitstop = mongoose.model<IPitstopInterface>('Pitstop', pitstopSchema)
  

