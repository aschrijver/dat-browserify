var memdb = require('memdb')
var dat = require('dat')
var browserfs = require('./fs.js')

module.exports = function (opts) {
  if (!opts) opts = {}
  if (!opts.db) opts.db = memdb('dat-data')
  if (!opts.fs) opts.fs = browserfs
  opts.discovery = false
  return dat(opts)
}
