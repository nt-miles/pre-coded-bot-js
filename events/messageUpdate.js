const conf = require("../config.json")

module.exports = (client, oldMessage, newMessage) => {

    const TLC = message.content.toLowerCase()
    
    if (oldMessage.createdTimestamp < oldMessage.createdTimestamp + 30 && newMessage.content.startsWith(conf.prefix)) {
        let message = newMessage;

        if(message.author.bot) return;
        if(!message.guild) return;
      
        if (message.isMentioned(client.user)) {
            message.reply(`My prefix is \`,\`. Use \`,jshelp\` to see my commands!`);
        }
      
        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);

        if((message.content).includes("<:MSBear:666128276061945909>")){
            message.channel.send("What a very peculiar bear... Only Miles could send that so...")
        }
    
        if(!command.startsWith(client.prefix)) return;
    
        let cmd = client.commands.get(command.slice(client.prefix.length));
        if(cmd) cmd.run(client, message, args);
    }
}