const del = require('del')

var garbage = [
  'node_modules/**/*.md',
  'node_modules/**/*.MD',
  'node_modules/**/*.markdown',
  'node_modules/**/license',
  'node_modules/**/LICENSE',
  'node_modules/**/test'
]

del(garbage)
  .then(() => {
    console.log('Cleaned your node app')
  })
