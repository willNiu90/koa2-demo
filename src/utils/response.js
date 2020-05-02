class ResponseObj {
  constructor(opt) {
    this.code = opt.code || 200
    this.result = opt.result || null
    this.msg = opt.msg || 'success'
  }
}

module.exports = ResponseObj