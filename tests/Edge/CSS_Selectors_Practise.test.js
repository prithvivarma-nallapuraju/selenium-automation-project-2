const { driverSetup, cssSelectorsPractise } = require('../index')

let result, driver = driverSetup('edge')

describe('practising the css selectors in HYR tutorials using edge browser', ()=> {

    test('practising the css selectors in HYR tutorials using edge browser', async ()=>{
        result = await cssSelectorsPractise(driver)
        expect(result).toBe(true)
    }, 200000)
})

