
var yaml = require('js-yaml')

exports.stringify = function (obj, options) {
  return yaml.safeDump(obj, options)
}

exports.parse = function (obj, options) {
  return yaml.safeLoad(obj, options)
}
