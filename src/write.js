module.exports = function (file, contents) {

  /// File Stream
  var fs = require('fs')

  /// Path
  var path = require('path')

  // file location
  var fullPath = path.join(process.cwd(), file)

  var stats, result;
  var path = require('path')

  function ensureDirectoryExistence(filePath) {
    var dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
      return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
  }

  ensureDirectoryExistence(`${fullPath}`)


    fs.writeFileSync(`${fullPath}`, contents)

    return `Compile:${fullPath}`

  // return
  return result
}
