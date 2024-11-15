const axios = require('axios');
const cheerio = require('cheerio');
const inquirer = require('@inquirer/prompts');

const baseRepo = `https://39k.pro/`;
let armyRepo = `https://github.com/BSData/wh40k-10e/blob/main/`;

async function scrapeSite(url, element, keyword) {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const scriptContent = $('script[src="/assets/index-ff7110e2.js"]').text();
    console.log(scriptContent)
    if (element) {
        let elements = [];
        $(`${element}`).each((_idx, el) => {
            const element = $(el).html();
            console.log(element)
            if (!elements.includes(element)) {
                elements.push(element);
            }
        });

        if (keyword) {
            elements = elements.filter(x => x.includes(keyword))
        }

        return elements;
    } else {
        return data;
    }

}

async function inquire(result) {
    const answer = await inquirer.select({
        message: 'Select an entry',
        choices: result
    });

    return answer;
}

scrapeSite(baseRepo, 'script').then(result => {
    console.log(result)
    //inquire(result).then(answer => {
        //console.log(answer);
        // const armyUrl = answer.replaceAll(' ', '%20');
        // armyRepo += armyUrl;
        // console.log(armyRepo);
        // scrapeSite(armyRepo, 'div', 'blob').then(result2 => {
        //     console.log(result2)
        // })
    //})
}).catch(err => console.log(err));