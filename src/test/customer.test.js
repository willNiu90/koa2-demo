const supertest = require('supertest')
const chai = require('chai')
const app = require('../app')

const expect = chai.expect
const request = supertest(app.listen())

let _id = ''

describe('start create request', () => {
  const createData = {
    code: '1122',
    companyName: '测试公司',
    standard: '222',
    manager: '5ea3cf7f77c79565484371ba',
  }
  it('create a customer', done => {
    request
      .post(`/api/v1/customers`)
      .send(createData)
      .expect(200)
      .end((err, res) => {
        console.log('create a customer', res.body)
        _id = res.body.result._id
        expect(res.body).to.be.an('object')
        expect(res.body.code).to.be.equal(200)
        expect(res.body.result).to.be.an('object')
        done()
      })
  })
})

describe('start update request', () => {
  const updateData = {
    companyName: '测试公司更新'
  }
  it('update a customer', done => {
    request
      .put(`/api/v1/customers/${_id}`)
      .send(updateData)
      .expect(200)
      .end((err, res) => {
        console.log('update a customer', res.body)
        expect(res.body).to.be.an('object')
        expect(res.body.code).to.be.equal(200)
        expect(res.body.result).to.be.an('object')
        done()
      })
  })
})

describe('start get request', () => {
  it('get all customers', done => {
    request
      .get('/api/v1/customers')
      .expect(200)
      .end((err, res) => {
        console.log('get all customers', res.body)
        expect(res.body).to.be.an('object')
        expect(res.body.code).to.be.equal(200)
        expect(res.body.result).to.be.an('object')
        done()
      })
  })
  it('get one customer', done => {
    request
      .get(`/api/v1/customers/${_id}`)
      .expect(200)
      .end((err, res) => {
        console.log('get one customer', res.body)
        expect(res.body).to.be.an('object')
        expect(res.body.code).to.be.equal(200)
        expect(res.body.result).to.be.an('object')
        expect(res.body.result._id).to.be.equal(_id)
        done()
      })
  })
})

describe('start delete request', () => {
  it('delete a customer', done => {
    request
      .delete(`/api/v1/customers/${_id}`)
      .expect(200)
      .end((err, res) => {
        console.log('delete a customer', res.body)
        expect(res.body).to.be.an('object')
        expect(res.body.code).to.be.equal(200)
        expect(res.body.result).to.be.an('object')
        done()
      })
  })
})