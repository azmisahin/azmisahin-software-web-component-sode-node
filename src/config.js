/**
 * Default Configuration
 */
var Default = {
  /**
   * Node Module's
   */
  inputs: {
    folder: 'example/web',
    files:{
      /// Example web project `name : location`
      app: './index.js',
      web: './web.js',
      logger: './logger.js'
    }
  },
  /**
   * Browser Module
   */
  output: {
    /// Public
    folder: 'dist',
    filename: 'app.js'
  }
}

/**
 * Sode
 *
 * Configuration
 */
class Config {

  /**
   * Config initalize
   */
  constructor(configFile) {

    /**
     * Config Short Name
     */
    this.name = 'Config'

    /**
     * Default Configuration
     */
    this.Configuration = configFile ? require(configFile) : Default
  }
}

module.exports = Config
