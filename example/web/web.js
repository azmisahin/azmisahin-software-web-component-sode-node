/**
 * Wep Application
 */
class Web {

  /**
   * Web application
   *
   * @public
   */
  constructor(name) {

    /**
     * Application Name
     */
    this.name = name ? name : 'sample.com'

    /// Init
    console.log(`${this.name} start.`)

    /**
     * Module List
     */
    this.Modules = []
  }

  /**
   * Add a module
   *
   * @param {class} module Class module
   */
  AddModule(module) {

    /// Add a model
    this.Modules.push(module)

    /// Init
    console.log(`${module.name} start.`)
  }

}
module.exports = Web
