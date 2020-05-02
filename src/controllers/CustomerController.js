const CustomerService = require('../services/CustomerService')
const ResponseObj = require('../utils/response')
class CustomerControler {
  static async create(ctx) {
    const data = ctx.request.body
    const result = Array.isArray(data) ? 
          await CustomerService.createCustomers(data) : 
          await CustomerService.createCustomer(data)
    const retObj = new ResponseObj({result})
    ctx.body = retObj
  }
  static async update(ctx) {
    const data = ctx.request.body
    const { id } = ctx.params
    const res = await CustomerService.updateCustomer(id, data, {
      new: true
    })
    ctx.body = res
  }
  static async remove(ctx) {
    const { id } = ctx.params
    const res = await CustomerService.getCustomers(id)
    ctx.body = res
  }
  static async show(ctx) {
    const { id } = ctx.params
    const result = await CustomerService.getCustomer(id)
    const retObj = new ResponseObj({result})
    ctx.body = retObj
  }
  static async list(ctx) {
    const data = ctx.qs
    const result = await CustomerService.getCustomers(data)
    const retObj = new ResponseObj({result})
    ctx.body = retObj
  }
}
module.exports = CustomerControler