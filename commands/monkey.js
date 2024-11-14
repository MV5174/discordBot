// import flame from "../arrays/flameStrings";
//comment for the sake of pushing to heroku
const { SlashCommandBuilder } = require('discord.js');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

const monkeys = {
    skyman: {
        name: 'Skyman',
    },
    zero: {
        name: 'Zero'
    },
    arthur: {
        name: 'Arthur'
    },
    ricky: {
        name: 'Rickster'
    }
};

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('monkey')
        .setDescription('Gives you the name of a random monkey'),
    async execute(interaction) {
        const member = interaction?.member
        if (member.id == '252652654155530240') {
            await interaction.reply('Skyman is a monkey');
        } else {
            const names = Object.keys(monkeys)
            const stringNum = Math.floor(Math.random() * (names.length - 1));
            const string = names[stringNum];
            console.log(string);
            console.log(interaction.toJSON());
            await interaction.reply(monkeys[string].name + ' is a monkey');
        }

    },
};