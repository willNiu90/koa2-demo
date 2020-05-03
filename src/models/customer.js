const mongoose = require('mongoose')
const { Schema } = mongoose

const customerSchema = new Schema({
  // customerId: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'customer_info',
  //   required: true
  // },
  code: {
    type: String,
    required: true,
    index: true
  },
  companyName: {
    type: String,
    required: true,
  },
  standard: {
    type: String,
    required: true,
  },
  manager: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tel: {
    type: Number,
    validate: {
      validator: function(v) {
        return /^1[3456789]\d{9}$/.test(v);
      },
      message: '{VALUE} is not a valid phone number!'
    },
    required: false
  },
  comment: {
    type: String,
    required: false,
    default: ''
  }
}, { 
  timestamps: {
    createdAt: 'createdTime',
    updatedAt: 'updatedTime'
  }
})
module.exports = mongoose.model('Customer', customerSchema)