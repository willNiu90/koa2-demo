const TestService = require('../services/TestService')
const fs = require('fs')
const path = require('path')
const urlPath = path.resolve(__dirname, '../../test.txt')
class TestControler {
  static async test(ctx) {
    let res = await new Promise(res => {
      fs.readFile(urlPath, (err, data) => {
        res(data.toString())
      })
    })
    ctx.body = res
  }
}

module.exports = TestControler