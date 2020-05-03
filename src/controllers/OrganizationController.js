const OrganizationService = require('../services/OrganizationService')
const ResponseObj = require('../utils/response')

class OrganizationControler {
  static async create(ctx) {
    const data = ctx.request.body
    const result = await OrganizationService.createOrganization(data) 
    const retObj = new ResponseObj({result})
    ctx.body = retObj
  }
  static async update(ctx) {
    const data = ctx.request.body
    const { id } = ctx.params
    const result = await OrganizationService.updateOrganization(id, data, {
      new: true
    })
    const retObj = new ResponseObj({result})
    ctx.body = retObj
  }
  static async remove(ctx) {
    const { id } = ctx.params
    const result = await OrganizationService.removeOrganization(id)
    const retObj = new ResponseObj({result})
    ctx.body = retObj
  }
  static async show(ctx) {
    const { id } = ctx.params
    const result = await OrganizationService.getOrganization(id)
    const retObj = new ResponseObj({result})
    ctx.body = retObj
  }
  static async list(ctx) {
    const params = ctx.qs
    const result = await OrganizationService.getOrganizations(params)
    const retObj = new ResponseObj({result})
    ctx.body = retObj
  }
}

module.exports = OrganizationControler