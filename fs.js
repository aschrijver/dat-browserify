var through = require('through2')
var pump = require('pump')

module.exports.listEach = function (opts, onEach, cb) {
  throw new Error('Unimplemented')
}

module.exports.createDownloadStream = function (drive, pack) {
  return through.obj(function (entry, enc, next) {
    var content = drive.get(entry)
    var writable = pack.entry(entry)
    pump(content.createStream(), writable, function (err) {
      next(err)
    })
  })
}
