var level = require('level-browserify')
var dat = require('dat')
var browserfs = require('./fs.js')

module.exports = function (opts) {
  if (!opts) opts = {}
  if (!opts.db) opts.db = level('./datdata')
  if (!opts.fs) opts.fs = browserfs
  opts.discovery = false
  return dat(opts)
}
