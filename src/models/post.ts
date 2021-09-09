import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    unique: true,
  },
  info: {
    type: String,
    required: true,
  },
  editedNum: {
    type: Number,
    default: 0
  },
  helpful: {
    type: Number,
    default: 0
  },
  notHelpful: {
    type: Number,
    default: 0
  },
  images: {
    type: [String],
  },
  videos: {
    type: [String],
  },
}, {
  timestamps: true,
})

export const Post = mongoose.model('Post', postSchema)