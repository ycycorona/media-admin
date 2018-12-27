const squel = require('squel');

const str = squel.insert().into('users').set('date', {
  data: new Date(),
})
  .toString();

console.log(str);
