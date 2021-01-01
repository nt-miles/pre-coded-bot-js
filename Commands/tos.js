const Discord = require("discord.js")

module.exports.run = async (client, message, args,) => {
    
  
  message.channel.send("Hey! you can see the TOS at <https://dis.gd/tos>.")
}
module.exports.help = {
  name: "tos",
  category: "util",
  description: "Terms of Service."
}