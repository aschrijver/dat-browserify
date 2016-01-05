# dat-browserify

Use dat in the browser.

## TODO

- [ ] webrtcswarm + signalhub support
- [ ] implement adding files for fs.js

This is a work in progress, test it out with:

```js
var tar = require('tar-stream')
var Dat = require('dat-browserify')

var db = Dat({
  signalhub: ['myapp', 'http://signalhub.myexternalip.com']
})

var link = 'dat://asdf34dnf1dfsfj'
var pack = tar.pack()
db.download(link, pack, function (err, link, port, close) {
  console.log('Done!')
})

```
