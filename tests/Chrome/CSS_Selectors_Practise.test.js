const { driverSetup, cssSelectorsPractise } = require('../index')

let result, driver = driverSetup('chrome')

describe('practising the css selectors in HYR tutorials using chrome browser', ()=> {

    test('practising the css selectors in HYR tutorials using chrome browser', async ()=>{
        result = await cssSelectorsPractise(driver)
        expect(result).toBe(true)
    }, 200000)
})

