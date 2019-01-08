/**
 * Write
 *
 * @param {string} message String Message
 *
 * @protected Internal
 */
function Write(message) {

  /// Write message
  console.dir(message)
}

/**
 * Logger
 *
 * @public
 */
class Logger {

  /**
   * Logger application
   */
  constructor() {

    /**
     * Application Name
     */
    this.name = 'Logger'
  }

  /**
   * Information Message
   *
   * @param {string} message Information Message
   */
  Info(message){

    /// Return
    return Write(message)
  }

}

module.exports = Logger
