const puppeteer = require('puppeteer');
const inquirer = require('@inquirer/prompts');

async function scrapeSite(keyword) {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto(`https://39k.pro/`);

    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 });

    //console.log(await page.content());

    if (keyword) {
        console.log('Keyword: ' + keyword);
        let factions = await page.$$eval('a', options => {
            return options.map(option => option = {name: option.textContent, link: option.href});
        });

        const faction = factions.find((element) => element.name == keyword);

        await browser.close();

        return faction
    } else {
        let factions = await page.$$eval('a', options => {
            return options.map(option => option.textContent);
        });

        await browser.close();

        return factions
    }
}

async function inquire(result) {
    const answer = await inquirer.select({
        message: 'Select an entry',
        choices: result
    });

    return answer;
}

scrapeSite().then(result => {
    console.log(result)
    inquire(result).then(answer => {
        console.log(answer);
        scrapeSite(answer).then(result2 => {
            console.log(result2)
        })
    })
}).catch(err => console.log(err));