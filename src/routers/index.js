const router = require('koa-router')()
const fs = require('fs')
const files = fs.readdirSync(__dirname)

files.forEach(file => {
  if(file.includes('index')) return
  const currentRouter = require(`./${file}`)
  router.use('/api/v1', currentRouter.routes(), currentRouter.allowedMethods())
})

module.exports = router


