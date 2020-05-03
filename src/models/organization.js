const mongoose = require('mongoose')
const { Schema } = mongoose

const organizationSchema = new Schema({
  code: {
    type: String,
    required: true,
    index: true
  },
  parentCode: {
    type: String,
    required: false,
    default: ''
  },
  name: {
    type: String,
    required: true,
  },
  members: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    required: false
  },
  manager: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: true
  }
}, { 
  timestamps: {
    createdAt: 'createdTime',
    updatedAt: 'updatedTime'
  }
})
module.exports = mongoose.model('Organization', organizationSchema)