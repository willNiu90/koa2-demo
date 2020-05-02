const mongoose = require('mongoose')
const { Schema } = mongoose

const customerInfoSchema = new Schema({
  info: {
    type: Object,
    required: true
  }
}, { 
  timestamps: true 
})
module.exports = mongoose.model('Customer_Info', customerInfoSchema)