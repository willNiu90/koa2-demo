const OrganizationModel = require('../models/organization')
const UserModel = require('../models/user')

class OrganizationService {
  static async createOrganization(data) {
    console.log('data -> ', data)
    const customer = new OrganizationModel(data)
    const customerRes = await customer.save()
    return customerRes
  }
  static async updateOrganization(id, data, opt) {
    const res = await OrganizationModel.findByIdAndUpdate(id, data, opt)
    return res
  }
  static async getOrganization(_id) {
    const data = await OrganizationModel.findById({_id})
    return data
  }
  static async removeOrganization(_id) {
    const data = await OrganizationModel.findByIdAndRemove(_id)
    return data
  }
  static async getOrganizations(params) {
    console.log('params -> ', params)
    const { parentCode } = params
    let seachObj = {}
    parentCode && Object.assign(seachObj, {
      parentCode
    })
    let organizations = await OrganizationModel.find(seachObj, null, {
      sort: {
        createdAt: -1,
      },
    }).populate('manager')
    let arr = []
    for(let i = 0, l = organizations.length; i < l; i++) {
      let { _id } = organizations[i]
      let obj = Object.assign({},organizations[i]._doc)
      const members = await UserModel.countDocuments({organization: _id})
      obj.members = members
      arr.push(obj)
    }
    const count = await OrganizationModel.countDocuments(seachObj)
    return {
      data: arr,
      count
    }
  }
}

module.exports = OrganizationService