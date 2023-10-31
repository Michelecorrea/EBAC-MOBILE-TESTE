const { join } = require('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "9",
        "deviceName": "motoe(6)",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), "./app/android/app-webdriverio.apk"),
        "appWaitActivity": "com.wdiodemoapp.MainActivity"       
      }]
}

"app"; "/path/to/my.app"