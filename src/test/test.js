const axios = require('axios')
console.time('test')
let arr = []
for(let i = 0; i < 10; i++) {
  arr.push(axios.get('http://127.0.0.1:3000/api/v1/testTime'))
}
Promise.all(arr).then(res => {
  console.timeEnd('test')
}).catch(reason => {
  console.log('reason is', reason)
  console.timeEnd('test')
})