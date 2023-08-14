const {Builder, Browser} = require('selenium-webdriver')

let driver

const driverSetup = (brwsr) => {

    switch(brwsr){

        case "chrome": {

            driver =  new Builder()
                            .forBrowser(Browser.CHROME)
                            .build()

            break
        }

        case "edge": {

            driver =  new Builder()
                            .forBrowser(Browser.EDGE)
                            .build()
            
            break
        }


        default: (console.error('invalid browser'))
    }

    return driver
}


module.exports = {
    driverSetup
}