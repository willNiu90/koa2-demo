const supertest = require('supertest')
const chai = require('chai')
const app = require('../app')
const path = require('path')

const expect = chai.expect
const request = supertest(app.listen())


describe('start create request', () => {
  it('create a file', done => {
    request
      .post(`/api/v1/files`)
      .attach('file', path.resolve(__dirname, './123.jpg'))
      .expect(200)
      .end((err, res) => {
        console.log('create a file', res.body)
        expect(res.body).to.be.an('object')
        expect(res.body.code).to.be.equal(200)
        expect(res.body.result).to.be.an('object')
        done()
      })
  })
})
