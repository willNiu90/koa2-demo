const UserModel = require('../models/user')

class UserService {
  static async createUser(data) {
    let user = new UserModel(data)
    const res = await user.save()
    return res
  }
  static async createUsers(data) {
    const array = []
    for(let i = 0; i < 10000; i++) {
      let obj = Object.assign({}, data)
      obj.name = obj.name + i
      obj.age = i
      array.push(obj)
    }
    const res = await UserModel.create(array)
    return res
  }
  static async getUsers() {
    const res = await UserModel.find()
    return res
  }
  static async getUser(id) {
    const res = await UserModel.findOne({_id: id})
    return res
  }
  static async login(obj) {
    const res = await UserModel.findOne(obj)
    return res
  }
}

module.exports = UserService