const _ = require('lodash')
const helper = require('../app/extend/helper.js');

const fullObj = {
  name: 'ycy',
  age: '27',
  gender: 'male',
  empty_1: '',
  empty_2: ''
}

/*const omitedObj = _.omitBy(fullObj, (val, key) => {
  return helper.isEmpty(val)
})*/




helper.delEmptyGivenKey(fullObj, [])
console.log(fullObj)
