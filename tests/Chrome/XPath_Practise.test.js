const { driverSetup, xPathPractise } = require('../index')

let result, driver = driverSetup('chrome')

describe('practising the XPATHS in HYR tutorials using chrome browser', ()=> {

    test('practising the xpaths in HYR tutorials using chrome browser', async ()=>{
        result = await xPathPractise(driver)
        expect(result).toBe(true)
    }, 200000)
})

