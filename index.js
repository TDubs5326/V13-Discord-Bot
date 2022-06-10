const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
    client.user.setActivity('In Developement', { type: 'WATCHING' });
})

client.on("messageCreate", (message) => {
    if (message.content == "Hi"){
        message.reply("Hello!")
    }
})

client.login(process.env.TOKEN)