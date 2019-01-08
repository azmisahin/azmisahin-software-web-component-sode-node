/**
 * Sode
 *
 * Browser Node
 */
class Sode {

  /**
   * Browser Node
   */
  constructor(config) {

    /**
     * Sode Short Name
     */
    this.name = 'Sode'

    /**
     * Sode Configuration
     */
    this.Configuration = config ? config.Configuration : require('./config').Configuration
  }
}

module.exports = Sode

/**
 * Compile
 */
Sode.prototype.Compile = function () {

  /// All content
  this.Contents = require('./search')(this.Configuration)

  /// This
  return this
}

/**
 * To Web Module
 */
Sode.prototype.ToWeb = function () {

  /// Node String
  var nodeSode = require('./reader')('src/shema', 'node.sode')

  /// Virtual String
  var virtualSode = require('./reader')('src/shema', 'virtual.sode')

  /// Init String
  var initSode = require('./reader')('src/shema', 'init.sode')

  /// Shema
  var shema = `${nodeSode}\n${virtualSode}`

  /// Virtual Files Scan
  this.Contents.forEach(item => {

    // Module Single File
    shema += `\n"${item.filename}":(function(module, exports) {\n${item.content}}),\n`
  })

  /// Shema Fix
  shema = shema.substring(0, shema.length - 2)
  shema += "\n}\n"

  /// Init
  shema += initSode

  /// Application main program 'requared'
  var app = this.Configuration.inputs.files.app

  /// Startup Shema
  shema += `
  /// Start Main Program
  require('${app}')
  `
  /// Write Shema
  var result = require('./write')
    (`${this.Configuration.output.folder}/${this.Configuration.output.filename}`, shema)

  /// Return Sode
  return this
}
