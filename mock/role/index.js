const Mock = require('mockjs')

module.exports = [
  {
    url: '/test',
    type: 'get',
    response: config=>{
      return {
        status: 0,
        data: {
          message:'success'
        }
      }
    }
  }
]
