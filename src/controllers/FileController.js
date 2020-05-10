const FileService = require('../services/FileService')
const ResponseObj = require('../utils/response')

class FileControler {
  static async create(ctx) {
    const result = await FileService.createFile(ctx)
    let retObj = new ResponseObj({})
    if(result) {
      retObj.result = result
    } else {
      retObj.msg = '上传失败'
    }
    ctx.body = retObj
  }
  static async show(ctx) {
    const { id } = ctx.params
    const readStream = await FileService.getFile(id)
    ctx.body = readStream
  }
  static async showByBase64(ctx) {
    const { id } = ctx.params
    const readStream = await FileService.getFile(id)
    let base64Data = ''
    readStream.on('data',(str)=>{
      let res = str.toString('base64')
      base64Data+=res
    })
    let p = new Promise((res) => {
      readStream.on('end', () => {
        console.log('stream is end', base64Data)
        res(base64Data)
      })
    })
    ctx.body = await p
  }
  static async list(ctx) {

  }
}

module.exports = FileControler