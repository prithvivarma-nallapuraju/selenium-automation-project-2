const { By } = require("selenium-webdriver")

const xPathPractise = async (driver) => {

    const scrollLength = 500
    await driver.manage().setTimeouts({ implicit : 10000 })

    try{

        await driver.manage().window().maximize()
        await driver.get('https://www.hyrtutorials.com/p/add-padding-to-containers.html')
        await driver.executeScript(`window.scrollTo(0, ${scrollLength})`)
        await driver.sleep(1000)
        await driver.findElement(By.xpath('//input[@maxlength="10" and @name="name"]')).sendKeys('Prithvi')
        await driver.sleep(1000)
        await driver.findElement(By.xpath('//input[@maxlength="15" and @name="name"]')).sendKeys('Nallapuraju')
        await driver.sleep(1000)
        await driver.findElement(By.xpath('//input[@required and @type="text"]')).sendKeys('prith@gmail.com')
        await driver.sleep(1000)
        await driver.findElement(By.xpath('(//input[@required and @type="password"])[1]')).sendKeys('abcde')
        await driver.sleep(1000)
        await driver.findElement(By.xpath('(//input[@required and @type="password"])[2]')).sendKeys('abcde')
        await driver.sleep(1000)
        await driver.findElement(By.xpath('//button[@class="btn" and @type="submit"]')).click()
        await driver.sleep(1000)
        await driver.findElement(By.xpath('//button[@class="btn" and @type="reset"]')).click()
        await driver.sleep(1000)
        await driver.findElement(By.xpath('//input[@type="submit"]')).click()
        await driver.sleep(1000)
        await driver.findElement(By.xpath('//button[@type="reset" and contains(text(),"Reset")]')).click()
        await driver.sleep(1000)
        await driver.executeScript(`window.scrollTo(0, ${scrollLength*2})`)
        await driver.sleep(1000)
        return true
    }catch(error){
        console.error
        return false

    }finally{
        driver.quit()
    }
}

module.exports = {
    xPathPractise
}