const mongoose = require('mongoose')
const { Schema } = mongoose

const fileSchema = new Schema({
  // 原始文件名
  fileName: { 
    type: String,
    required: true,
  },
  // 服务器上的文件名
  uploadName: {
    type: String,
    required: true,
  }
}, { 
  timestamps: {
    createdAt: 'createdTime',
    updatedAt: 'updatedTime'
  }
})
module.exports = mongoose.model('File', fileSchema)