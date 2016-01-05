var level = require('level-browserify')
var memdb = require('memdb')
var dat = require('dat')
var browserfs = require('./fs.js')

module.exports = function (opts) {
  opts.db = level(memdb())
  opts.fs = browserfs
  return dat(opts)
}
