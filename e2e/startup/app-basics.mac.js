const TAG = " | APP_BASIC | "
const Application = require('spectron').Application
const assert = require('assert')
const log = require("@pioneer-platform/loggerdog")()


let app = new Application({
  path: '../../dist/electron/Packaged/mac/pioneer-desktop.app/Contents/MacOS/pioneer-desktop',
})


let run_test = async function(){
  let tag = TAG + " | run_test | "
  try{
    let startResp = await app.start()
    log.info(tag,"startResp: ",startResp)

    //


  }catch(e){
    log.error(e)
  }
}

run_test()
