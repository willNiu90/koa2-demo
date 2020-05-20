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
  static async testTime(ctx) {
    let startTimer = Date.now()
    let timer = startTimer
    while(timer < startTimer + 100) {
      timer = Date.now()
    }
    ctx.body = 'success'
  }
}

module.exports = TestControler