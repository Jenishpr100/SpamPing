const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const botsFolder = path.join(__dirname, 'bots');

const MESSAGE = "@everyone UwU UwU Nyaa Nyaa";
const SEND_INTERVAL = 2000; // 5 min
const DELETE_AFTER = 0;

let totalSent = 0;

const botFiles = fs.readdirSync(botsFolder).filter(f => f.endsWith('.env'));

botFiles.forEach(file => {
    const envPath = path.join(botsFolder, file);

    // load env file properly
    const env = require('dotenv').parse(
        fs.readFileSync(envPath)
    );

    const client = new Client({
        intents: [GatewayIntentBits.Guilds]
    });

    client.once('ready', () => {
        console.log(`${client.user.tag} online (${file})`);

        setInterval(async () => {
            try {
                const channel = await client.channels.fetch(env.CHANNEL_ID);

                const msg = await channel.send(MESSAGE);

                totalSent++;

                if (totalSent % 50 === 0) {
                    console.log(`${totalSent} messages sent`);
                }

                setTimeout(() => {
            
                }, DELETE_AFTER);

            } catch (err) {
                console.log(`[${file}] error: ${err.message}`);
            }
        }, SEND_INTERVAL);
    });

    client.login(env.TOKEN).catch(err => {
        console.log(`[${file}] login failed: ${err.message}`);
    });
});