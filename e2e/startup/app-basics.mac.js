var Application = require('spectron').Application
var assert = require('assert')

var app = new Application({
  path: '../../dist/electron/Packaged/mac/pioneer-desktop.app/Contents/MacOS/pioneer-desktop'
})

app.start().then(function () {
  // Check if the window is visible
  return app.browserWindow.isVisible()
}).then(function (isVisible) {
  // Verify the window is visible
  assert.equal(isVisible, true)
}).then(function () {
  // Get the window's title
  return app.client.getTitle()
}).then(function (title) {
  // Verify the window's title
  assert.equal(title, 'My App')
}).then(function () {
  // Stop the application
  return app.stop()
}).catch(function (error) {
  // Log any failures
  console.error('Test failed', error.message)
})

// const TAG = " | APP_BASIC | "
// const Application = require('spectron').Application
// const assert = require('assert')
// const log = require("@pioneer-platform/loggerdog")()
//
//
// let app = new Application({
//   path: '../../dist/electron/Packaged/mac/pioneer-desktop.app/Contents/MacOS/pioneer-desktop',
// })
//
//
// let run_test = async function(){
//   let tag = TAG + " | run_test | "
//   try{
//     let startResp = await app.start()
//     log.info(tag,"startResp: ",startResp)
//
//     //
//
//
//   }catch(e){
//     log.error(e)
//   }
// }
//
// run_test()
