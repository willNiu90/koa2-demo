const CustomerModel = require('../models/customer')
const CustomerInfoModel = require('../models/customerInfo')


class CustomerService {
  static async createCustomer(data) {
    console.log('data -> ', data)
    const { info } = data
    delete data.info
    console.log('customerInfo -> ', info)
    const customerInfo = new CustomerInfoModel({info})
    const customerInfoRes = await customerInfo.save()
    console.log('customerInfoRes -> ', customerInfoRes)
    data.customerId = customerInfoRes._id
    console.log('customer -> ', data)
    const customer = new CustomerModel(data)
    const customerRes = await customer.save()
    return {
      code: 200,
      result: customerRes,
      msg: 'success'
    }
  }
  static async updateCustomer(id, data, opt) {
    const res = await CustomerModel.findByIdAndUpdate(id, data, opt)
    return res
  }
  static async createCustomers(data) {
    const array = []
    for(let i = 0; i < 10000; i++) {
      let obj = {}
      obj.companyName = '公司' + i
      obj.code = i
      obj.manager = '5ea3cf9b77c79565484371bb'
      obj.tel = 13100564871
      array.push(obj)
    }
    const res = await CustomerModel.create(array)
    return res
  }
  static async getCustomers(data) {
    console.log('data -> ', data)
    const { skip, limit, seachKey } = data
    const seachKeyRe = seachKey && new RegExp(`${seachKey}`)
    console.log('seachKeyRe -> ', seachKeyRe)
    const seachObj = {}
    seachKeyRe && Object.assign(seachObj, {
      companyName: seachKeyRe
    })
    const res = await CustomerModel.find(seachObj, null, {
      skip: Number(skip),
      limit: Number(limit),
      sort: {
        createdAt: -1,
      },
    }).populate('customerId')
    return res
  }
}

module.exports = CustomerService