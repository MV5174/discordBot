const puppeteer = require('puppeteer');
const inquirer = require('@inquirer/prompts');
const fs = require('fs');

// const data = {
//     name: "John Doe",
//     age: 30,
//     city: "New York"
// };

// const jsonData = JSON.stringify(data);

// fs.writeFileSync('data.json', jsonData);

const baseSite = `https://39k.pro/`;

async function scrapeSite(url, keyword, scrapeAll) {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto(url);

    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 });

    //console.log(await page.content());
    if (url) {
        if (keyword) {
            console.log('Keyword: ' + keyword);
            let factions = await page.$$eval('a', options => {
                return options.map(option => option = { name: option.textContent, link: option.href });
            });

            const faction = factions.find((element) => element.name == keyword);

            await browser.close();

            return faction

        } else if (scrapeAll) {
            let data = {};
            let rules = {};
            let detachments = {};
            let datasheets = {};

            //Grab all Faction elements
            let factionsData = await page.$$eval('a', options => {
                return options.map(option => option = { name: option.textContent, link: option.href });
            });

            //Iterate through Faction pages
            for (let faction = 0; faction < factionsData.length; faction++) {
                const element = factionsData[faction];
                
                //Go to page
                await page.goto(element.link);

                //Click Rules divs
                const armyRule = await page.$$('army_rule_header');

                for (let index = 0; index < array.length; index++) {
                    const element = array[index];
                    
                    const submitBtn = await page.$('input[type=submit]');
                    await submitBtn.evaluate(btn => btn.click());
                }
                
                //Grab Rules data
            
                    //Set Rules to Faction object

                //Grab Detachments data

                    //Set Detachments to Faction object

                //Grab Datasheets data

                    //Set Datasheets to Faction object

                //Set Faction object to Data object
            }
        } else {
            let factions = await page.$$eval('a', options => {
                return options.map(option => option.textContent);
            });

            await browser.close();

            return factions
        }
    }

}

async function inquire(result) {
    const answer = await inquirer.select({
        message: 'Select an entry',
        choices: result
    });

    return answer;
}

async function scrapeFaction() {
    scrapeSite(baseSite).then(result => {
        console.log(result)
        inquire(result).then(answer => {
            console.log(answer);
            scrapeSite(baseSite, answer).then(result2 => {
                console.log(result2)
            })
        })
    }).catch(err => console.log(err));
}

async function scrapeAll() {
    const scrapeAll = true;
    scrapeSite(baseSite, null, scrapeAll).then(result => {
        result
    })
}

scrapeFaction();