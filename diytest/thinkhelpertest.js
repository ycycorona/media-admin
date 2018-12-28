const thinkhelp = require('think-helper')
const _ = require('lodash');

/*const snake = thinkhelp.snakeCase('idPJavbus')*/
console.log(_.pick({name:'ycy',age:''}, ['name', 'age']))
