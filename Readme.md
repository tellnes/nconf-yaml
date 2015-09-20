# nconf-yaml

[![Version Badge](https://img.shields.io/npm/v/nconf-yaml.svg)](https://npmjs.org/package/nconf-yaml)
[![Dependency Status](https://david-dm.org/tellnes/nconf-yaml.png)](https://david-dm.org/tellnes/nconf-yaml)
[![Tips](https://img.shields.io/gratipay/tellnes.svg)](https://gratipay.com/tellnes/)

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
