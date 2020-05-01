const path = require('path')
const { uploadFile } = require('../utils/upload')

class UploadControler {
  static async upload(ctx) {
    let result = { success: false }
    let serverFilePath = path.join(__dirname, '../upload-files')

    // 上传文件事件
    result = await uploadFile(ctx, {
      fileType: 'album', // common or album
      path: serverFilePath
    })

    ctx.body = result
  }
}

module.exports = UploadControler