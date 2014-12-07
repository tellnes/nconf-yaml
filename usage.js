var nconf = require('nconf')

nconf.formats.yaml = require('./')

nconf.file(__dirname + '/package.yaml')

console.log(nconf.get('name')) // nconf-yaml
