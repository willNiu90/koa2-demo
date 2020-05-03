const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  organization: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'Organization'
  }
}, { 
  timestamps: {
    createdAt: 'createdTime',
    updatedAt: 'updatedTime'
  } 
})

module.exports = mongoose.model('User', userSchema)