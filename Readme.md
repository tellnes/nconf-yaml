# nconf-yaml

[![Version npm](https://img.shields.io/npm/v/nconf-yaml.svg?style=flat-square)](https://www.npmjs.com/package/nconf-yaml)[![npm Downloads](https://img.shields.io/npm/dm/nconf-yaml.svg?style=flat-square)](https://www.npmjs.com/package/nconf-yaml)[![Dependencies](https://img.shields.io/david/tellnes/nconf-yaml.svg?style=flat-square)](https://david-dm.org/tellnes/nconf-yaml)[![Build Status](https://img.shields.io/travis/tellnes/nconf-yaml/master.svg?style=flat-square)](https://travis-ci.org/tellnes/nconf-yaml)[![Tips](http://img.shields.io/gratipay/tellnes.png?style=flat-square)](https://gratipay.com/~tellnes/)


YAML format plugin for [nconf](https://www.npmjs.org/package/nconf)

## Usage

```js
var nconf = require('nconf')

nconf.file({
  file: '/path/to/some/file.yaml',
  format: require('nconf-yaml')
})
```

or to add general YAML file support

```js
var nconf = require('nconf')

nconf.formats.yaml = require('nconf-yaml')

// and then you can do

nconf.file({ file: '/path/to/some/file.yaml', format: nconf.formats.yaml })
```

## Install

```bash
npm install nconf nconf-yaml
```

## License

MIT
