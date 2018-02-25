const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
      .setThumbnail(sicon)
      .setColor("#48f442")
      .addField("Server ID", "ID : "+message.guild.id)
      .addField("Server Name", message.guild.name)
      .addField("Created On", message.guild.createdAt)
      .addField("Members Count", message.guild.memberCount)
      
     

      message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
