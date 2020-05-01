const CustomerService = require('../services/CustomerService')
class CustomerControler {
  static async create(ctx) {
    const data = ctx.request.body
    const res = Array.isArray(data) ? 
          await CustomerService.createCustomers(data) : 
          await CustomerService.createCustomer(data)
    ctx.body = res
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
    const res = await CustomerService.getCustomers(id)
    ctx.body = res
  }
  static async list(ctx) {
    const data = ctx.qs
    const res = await CustomerService.getCustomers(data)
    ctx.body = res
  }
}
module.exports = CustomerControler