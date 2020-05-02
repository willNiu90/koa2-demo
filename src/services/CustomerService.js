const CustomerModel = require('../models/customer')

class CustomerService {
  static async createCustomer(data) {
    console.log('data -> ', data)
    const customer = new CustomerModel(data)
    const customerRes = await customer.save()
    return customerRes
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
  static async getCustomer(_id) {
    const data = await CustomerModel.findById({_id})
    return data
  }
  static async getCustomers(params) {
    console.log('params -> ', params)
    const { skip, limit, seachKey } = params
    const seachKeyRe = seachKey && new RegExp(`${seachKey}`)
    console.log('seachKeyRe -> ', seachKeyRe)
    const seachObj = {}
    seachKeyRe && Object.assign(seachObj, {
      companyName: seachKeyRe
    })
    const data = await CustomerModel.find(seachObj, null, {
      skip: Number(skip),
      limit: Number(limit),
      sort: {
        createdAt: -1,
      },
    }).populate('manager')
    const count = await CustomerModel.count(seachObj)
    return {
      data,
      count
    }
  }
}

module.exports = CustomerService