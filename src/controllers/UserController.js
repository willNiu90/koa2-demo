const jwt = require('jsonwebtoken')
const UserService = require('../services/UserService')
const ResponseObj = require('../utils/response')
class UserControler {
  static async login(ctx) {
    const { name, password } = ctx.request.body;
    const result = await UserService.login({
      name,
      password,
    })
    console.log('result is', result)
    if (result !== null) {
      const token = jwt.sign({
        name: result.name,
        _id: result._id
      }, 'my_token', { expiresIn: '30d' })
      const retObj = new ResponseObj({result: token})
      return ctx.body = retObj
    } else {
      const retObj = new ResponseObj({
        code: 202,
        msg: '用户名或密码错误'
      })
      return ctx.body = retObj
    }
  }
  static logout(ctx) {
    ctx.response.body = 'logout'
  }
  static async create(ctx) {
    const data = ctx.request.body
    const result = await UserService.createUser(data)
    const retObj = new ResponseObj({result})
    retObj.res = res
    ctx.body = retObj
  }
  static async list(ctx) {
    const result = await UserService.getUsers()
    const retObj = new ResponseObj({result})
    ctx.body = retObj
  }
  static async show(ctx) {
    const { id } = ctx.params
    const result = await UserService.getUser(id)
    const retObj = new ResponseObj({result})
    ctx.body = retObj
  }
}

module.exports = UserControler