const { By, until } = require("selenium-webdriver")


const cssSelectorsPractise = async (driver) => {

    const scrollLength = 500
    await driver.manage().setTimeouts({ implicit : 10000 })

    try{

        await driver.manage().window().maximize()
        await driver.get('https://www.hyrtutorials.com/p/css-selectors-practice.html')
        
        await driver.findElement(By.css('#firstName')).sendKeys('Prithvi Varma')
        await driver.sleep(1000)
        await driver.findElement(By.css('#lastName')).sendKeys('Nallapuraju')
        await driver.sleep(1000)
        await driver.executeScript(`window.scrollTo(0, ${scrollLength})`)
        await driver.findElement(By.css('.gender')).sendKeys('Male')
        await driver.sleep(1000)
        await driver.findElement(By.css('.city')).sendKeys('Visakhapatnam')
        await driver.sleep(1000)
        await driver.findElement(By.css('input[placeholder="Country"]')).sendKeys('India')
        await driver.sleep(1000)
        await driver.findElement(By.css('input[placeholder="Enter your security question"]')).sendKeys('Who is my favourite cricketer?')
        await driver.sleep(1000)
        await driver.findElement(By.css('input[placeholder="Enter your security answer"]')).sendKeys('Virat Kohli')
        await driver.sleep(1000)
        await driver.findElement(By.css('input[placeholder="Verify your personal details"]')).sendKeys('I verified my personal details')
        await driver.sleep(1000)
        await driver.findElement(By.css('select option[value="apple"]')).click() // replace apple with grape if your want grape
        await driver.sleep(1000)
        await driver.executeScript(`window.scrollTo(${scrollLength}, ${scrollLength+300})`)
        await driver.findElement(By.css('input[class="confirm"]')).click()
        await driver.sleep(1000)
        await driver.findElement(By.css('select option[value="js"]')).click() // replace apple with java, net, python if your want them
        await driver.sleep(1000)
        await driver.findElement(By.css('input.button[type="submit"]'))
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
    cssSelectorsPractise
}