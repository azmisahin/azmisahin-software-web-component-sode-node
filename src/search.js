module.exports = function (configuration) {

  /// Items
  var result = []

  /// Search
  for (var item in configuration.inputs.files) {

    // entry name
    let name = item

    // file name
    let filename = configuration.inputs.files[name]

    // read file
    var content = require('./reader')(configuration.inputs.folder,filename)

    // add a content
    result.push({
      name: name,
      filename: filename,
      content: content
    })
  }

  /// return
  return result
}
