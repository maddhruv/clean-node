#!/usr/bin/env node

const del = require('del')

var garbage = [
  'node_modules/**/*.md',
  'node_modules/**/*.MD',
  'node_modules/**/*.markdown',
  'node_modules/**/license',
  'node_modules/**/LICENSE',
  'node_modules/**/test',
  'node_modules/**/*.log'
]

del(garbage)
  .then((paths) => {
    console.log(`Cleaned about ${paths.length} of junks`)
  })
