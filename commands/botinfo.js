const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let sicon = bot.user.avatarURL;
    let botembed = new Discord.RichEmbed()
      .addField("Name", bot.user.username)
      .setDescription("GDT Clan Bot")
      .setColor("#48f442")
      .setThumbnail(sicon)
      .addField("Created On", bot.user.createdAt)
      
      
      message.channel.send(botembed);

}

module.exports.help = {
    name: "botinfo"
}