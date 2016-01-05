var level = require('level-browserify')
var dat = require('dat')
var swarm = require('./swarm.js')
var browserfs = require('./fs.js')

module.exports = function (opts) {
  if (!opts) opts = {}
  if (!opts.signalhub) throw new Error('Requires signalhub.')
  if (!opts.db) opts.db = level('./datdb')
  if (!opts.fs) opts.fs = browserfs
  opts.discovery = swarm(opts.signalhub)
  return dat(opts)
}
