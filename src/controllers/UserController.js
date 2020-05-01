const jwt = require('jsonwebtoken')
const UserService = require('../services/UserService')

class UserControler {
  static async login(ctx) {
    const { name, password } = ctx.request.body;
    if (!name || !password) {
      return ctx.body = {
        code: '000002',
        data: null,
        msg: '参数不合法'
      }
    }
    const result = UserService.getUser({
      name,
      password,
    })
    if (result !== null) {
      const token = jwt.sign({
        name: result.name,
        _id: result._id
      }, 'my_token', { expiresIn: '30d' });
      return ctx.body = {
        code: '000001',
        data: token,
        msg: '登录成功'
      }
    } else {
      return ctx.body = {
        code: '000002',
        data: null,
        msg: '用户名或密码错误'
      }
    }
  }
  static logout(ctx) {
    ctx.response.body = 'logout'
  }
  static async create(ctx) {
    const data = ctx.request.body
    const res = await UserService.createUser(data)
    ctx.body = res
  }
  static async list(ctx) {
    const data = ctx.query
    const res = await UserService.getUsers(data)
    ctx.body = res
  }
  static async show(ctx) {
    const { id } = ctx.params
    const res = await UserService.getUser(id)
    ctx.body = res
  }
}

module.exports = UserControler