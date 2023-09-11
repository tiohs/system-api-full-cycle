const { omit } = require('lodash')
const data = {
  password: 'Hamilton Silva',
  name: 'Carlos Feijó',
}

console.log(omit(data, 'password'))
