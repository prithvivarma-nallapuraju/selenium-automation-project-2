const { driverSetup, xPathPractise } = require('../index')

let result, driver = driverSetup('edge')

describe('practising the XPATHS in HYR tutorials using edge browser', ()=> {

    test('practising the xpaths in HYR tutorials using edge browser', async ()=>{
        result = await xPathPractise(driver)
        expect(result).toBe(true)
    }, 200000)
})

