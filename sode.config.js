module.exports = {
  /**
   * Node Module's
   */
  inputs: {
    folder: 'example/web/',
    files: {
      /// Example web project `name : location`
      app: 'index.js',
      web: 'web.js',
      logger: 'logger.js'
    }
  },
  /**
   * Browser Module
   */
  output: {
    /// Public
    folder: 'dist'
  }
}
