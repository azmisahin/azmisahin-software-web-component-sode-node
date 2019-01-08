module.exports = function (folder, file) {

  /// File Stream
  var fs = require('fs')

  /// Path
  var path = require('path')

  // file location
  var fullPath = path.join(process.cwd(), folder, file)

  // read file
  var result = fs.readFileSync(`${fullPath}`)

  // return
  return result
}
