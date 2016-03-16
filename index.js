var level = require('level-browserify')
var pump = require('pump')
var debug = require('debug')('dat-browserify')
var hyperdrive = require('hyperdrive')
var webrtcSwarm = require('webrtc-swarm')
var signalhub = require('signalhub')

var DEFAULT_SIGNALHUB = 'https://signalhub.publicbits.org'

module.exports = Dat

function Dat (opts) {
  if (!(this instanceof Dat)) return new Dat(opts)
  if (!opts) opts = {}
  if (!opts.db) opts.db = level('./dat')
  this.drive = hyperdrive(opts.db)
}

Dat.prototype.join = function (link, opts) {
  var self = this
  if (!opts) opts = {}
  opts.signalhub = opts.signalhub || DEFAULT_SIGNALHUB
  link = link.replace('dat://', '').replace('dat:', '')
  var key = link.toString('hex')
  var hub = signalhub('hyperdrive/' + key, [opts.signalhub])
  var swarm = webrtcSwarm(hub, opts)

  swarm.on('peer', function (peer) {
    console.log('got a peer', 'peer')
    pump(peer, self.drive.createPeerStream(), peer, function (err) {
      if (err) throw err
    })
  })

  return swarm
}
