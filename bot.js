const Discord = require('discord.js')
const bot = new Discord.Client()
client.user.setGame('#GDT2RC Soon !')
console.log(`Game is done`).catch(console.error);



bot.login(process.env.BOT_TOKEN)
