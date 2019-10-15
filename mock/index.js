const Mock = require('mockjs')
// export const DATA = Mock.mock({
//   // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//   'list|1-10': [{
//     // 属性 id 是一个自增数，起始值为 1，每次增 1
//     // 'id|+1': 1,
//     // 'id|1-10': /(1|2|35|3)/
//     'id|10': /(1|2|35|3)/,
//     'done|0-1': 0
//   }]
// })
Mock.mock(/\/home\/other\/data\/weatherInfo/g, 'get', function(options) {
  console.log(options.type)
})
