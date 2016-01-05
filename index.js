var level = require('level-browserify')
var dat = require('dat')
var browserfs = require('./fs.js')

module.exports = function (opts) {
  if (!opts) opts = {}
  opts.db = level('test')
  opts.fs = browserfs
  return dat(opts)
}
