/// Application Referance's
var Logger = require('./logger')
var Web = require('./web')

/// Init
var web = new Web()

/// Add a module
web.AddModule(new Logger())
