/// Sode
var Sode = require('./sode')

/// Config
var Config = require('./config')

/// sode set config
var sode = new Sode(new Config())

/// sode start
sode.Compile().ToWeb()
