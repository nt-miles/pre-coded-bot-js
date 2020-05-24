const gradient = require('gradient-string');
console.log(gradient.fruit('Loading the bot...'));
console.log(gradient.rainbow("========================="));

const botconfig = require("./botconfig.json");
const colors = require("./colors.json");
const Discord = require("discord.js");
const { inspect } = require("util")
const bot = new Discord.Client({ disableEveryone: false });

bot.on("ready", async () => {
    bot.user.setActivity(`${bot.users.size} users!`, { type: "WATCHING" })
    console.log(gradient.cristal("Bot is online!"))
    console.log(gradient.fruit(`${bot.user.username} (${bot.user.id})`))
    console.log(gradient.retro("pre-coded bot module made by WildcatNT."))

  })

  bot.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`Splendid, I'm now in ${guild.name} (id: ${guild.id}). if all calculations are right, I'm looking at another ${guild.memberCount} members!`);
  });

  bot.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`yikes, I got the boot and was removed from ${guild.name} (id: ${guild.id})`);
  });
  bot.on('guildMemberAdd', member => {
    console.log(`${member.user.username} has joined a server I'm in!`);
  });
  bot.on("message", async message => {
    if (message.author.bot || message.channel.type === "dm") return;
  
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}ping`){
      const m = await message.channel.send("Ping?");
    m.edit(`Pong! 
> :stopwatch: ${m.createdTimestamp - message.createdTimestamp}ms 
> :hourglass_flowing_sand: ${Math.round(bot.ping)}ms`)
    }

    if(cmd === `${prefix}help`){
        let helpEm = new Discord.RichEmbed()
        .setAuthor(bot.user.username)
        .setTitle("Help menu!")
        .addField("My prefix is:", prefix)
        .addField("help:", `this`, true)
        .addField("ping", `pings the bot.`)
        .setFooter(`${bot.user.username} | Based on the pre-coded bot script from WildcatNT!`)
        let helpM = await message.channel.send("Help Menu!")
        helpM.edit({ embed: helpEm })
    }

    if((message.content).includes("<:MSBear:666128276061945909>")){
        message.channel.send("What a very peculiar bear... Only WildcatNT could send that so...")
    }

  })  

 
  if(!botconfig.token || botconfig.token === `Insert_token_here`){
    console.log(gradient.retro(`please provide a token!`))
    console.log(gradient.teen(`Refer to the discord developer portal (https://discord.com/developers/applications/) and the developer docs (https://discord.com/developers/docs/) on how to set up a bot and grab it's token.`))
  }else{
  bot.login(botconfig.token);
  }
