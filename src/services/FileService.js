const FileModel = require('../models/file')
const { uploadFile } = require('../utils/upload')
const path = require('path')
const fs = require('fs')
const serverFilePath = path.join(__dirname, '../upload-files')


class FileService {
  static async createFile(ctx) {
    // 上传文件事件
    let fileResult = await uploadFile(ctx, {
      fileType: 'album', // common or album
      path: serverFilePath
    })
    if(!fileResult.success) {
      return false
    }
    const { fileName, uploadName } = fileResult
    const file = new FileModel({
      fileName,
      uploadName
    })
    const fileRes = await file.save()
    return fileRes
  }
  static async getFile(id) {
     let res = await FileModel.findById(id)
     const { uploadName } = res
     const filePath = path.resolve(__dirname, '../upload-files/album', uploadName)
     let readStream = fs.createReadStream(filePath)
     return readStream
  }
}

module.exports = FileService