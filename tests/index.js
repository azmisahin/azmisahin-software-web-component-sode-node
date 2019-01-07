/// Test Manager
var TestManager = require('test-management')

/// Test Instance
var t = new TestManager(true)

/// Test Referance
var Sode = require('../src')

/// Is Sode ready to use? Test
var isInstanceTest = function () {
  // Instanse name
  var expected = 'Sode'
  var actual = new Sode().name
  t.Test('Is Sode ready to use?', expected, actual)
}
isInstanceTest()
