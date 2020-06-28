# Pre-coded bot
a discord.js starting base.

# preperation
PLEASE RUN `npm install` OR `yarn` to install all packages.

# readme.txt
PRE-CODED BOT

Constructed by WildcatNT

1: Using special colors

To use a special color, make sure that color IS in colors.json. 
To use that in am embed, use .setColor(colors.colorname) in the 
emded field where colorname is the color's name from colors.json.

2: running the bot 

Running the bot is as simple as placing your token in botconfig.json
and using node.js! with the command prompt, type in "npm install" 
(or yarn), strike ENTER/RETURN, then type "node bot.js" and hit enter 
to see the bot come to life!

3: adding/removing commands

Adding commands is simple, just put if(cmd === \`${prefix}commandname\`){}
in bot.js, where commandname is the name of the command. be sure to edit
the help command properly when you add your command! categories are also
permitted if your command is in a different category.

4: testing the bot

once the bot is online, I highly suggest running the ping command to see if
the bot is online and working. if not, check your token, ensure the ping cmd
is there, and rerun your test. otherwise DM me on Discord (WildcatNT#2005) with
an invite to your testing server. 

5: Triggers

adding triggers is as easy as adding commands. use if((message.content).includes("Trigger")){}
instead of if(cmd === \`${prefix}commandname\`){}, where Trigger is the trigger word. there is already
a trigger on the bot (if((message.content).includes("<:MSBear:666128276061945909>"))). do NOT remove
that one, as that allows me to test the bot if it isn't working.

DO NOT EDIT, MOVE, OR DELETE PACKAGE.JSON, YARN.LOCK OR PACKAGE-LOCK.JSON. THAT IS FOR NPM/YARN TO SEE WHAT YOU NEED.