const app = require('../app')
const request = require('supertest')(app)

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTIzIiwidXNlcl9uYW1lIjoieHVnYW95YW5nIiwiZXhwIjoxNTgwNTE1MjAwMDAwfQ.Zm0l0pNdSqszmPVcuY0dxWLA1tGhuAODgS0KOWvrVdQ'
const expirationToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTIzIiwidXNlcl9uYW1lIjoieHVnYW95YW5nIiwiZXhwIjoxNDg1OTA3MjAwMDAwfQ.PW5J1lCt0_2pmTHEKngk_MgvttuTmVc0f8VRUUST2i0'
const illegalToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTIzIiwiZXhwIjoxNTgwNTE1MjAwMDAwfQ.vxJIXTp9jYqOKr0rI6MbU97Hp-kA_6BB9gunH_F0TJI'

describe('api', function () {
  describe('GET /user/123/info', function () {
    it('should request user service', done => {
      request.get(`/user/123/info`).expect(200, done)
    })
  })

  describe('POST /post/123/info', function () {
    it('should request post service -- valid token', done => {
      request.post(`/post/123/info`)
        .set('x-access-token', token)
        .expect(200, done)
    })
  })

  describe('POST /post/123/info', function () {
    it('should request post service -- expiration token', done => {
      request.post(`/post/123/info`)
        .set('x-access-token', expirationToken)
        .expect(401, done)
    })
  })

  describe('POST /post/123/info', function () {
    it('should request post service -- illegal token', done => {
      request.post(`/post/123/info`)
        .set('x-access-token', illegalToken)
        .expect(401, done)
    })
  })

  describe('POST /post/123/info', function () {
    it('should request post service -- no token', done => {
      request.post(`/post/123/info`)
        .expect(401, done)
    })
  })

  describe('PUT /message/123/info', function () {
    it('should request message service -- valid token', done => {
      request.put(`/message/123/info`)
        .set('x-access-token', token)
        .expect(200, done)
    })
  })

  describe('PUT /message/123/info', function () {
    it('should request message service -- expiration token', done => {
      request.put(`/message/123/info`)
        .set('x-access-token', expirationToken)
        .expect(401, done)
    })
  })

  describe('PUT /message/123/info', function () {
    it('should request message service -- no token', done => {
      request.put(`/message/123/info`)
        .expect(401, done)
    })
  })
})
