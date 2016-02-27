'use strict'

const lib = require('..')
const assert = require('assert')

assert(typeof lib.stringify === 'function')
assert(typeof lib.parse === 'function')

const obj = { foo: 'bar' }
assert.deepEqual(obj, lib.parse(lib.stringify(obj)))

