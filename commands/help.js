const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    //We have to set a argument for the help command beacuse its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Custom Help command by using the second argument.
    if(helpArgs[0] === 'gaming') {
        return message.reply("This is a Gaming information Command.")
    }

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`Here is the Avaible Commands to use:`)
            .setDescription('```help  | avatar | cat | r6stats | ccsgo | csgofloat | dogs | duckduckgo | f | fart | feed | high-five | img | '+
            'kiss | kitsune | marry | math | moe | neko | owoify | pat | ping | rps | russianroulette | say | serverinfo | spank | flatearth  | '+
            'minecraft | mcachievement | meme | kick | ban```')
            .addFields({ name: 'Prefix', value: '```h.```', inline: true})
            .setColor('#00FFF3')
            
        message.channel.send(embed);
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(bot.commands.has(command)) {
            
            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.config.name} Command`)
            .setDescription(`
            - **Command's Description** ${command.config.description || "There is no Description for this command."}
            - **Command's Usage:** ${command.config.usage || "No Usage"}
            - **Command's Permissions:** ${command.config.accessableby || "Members"}
            - **Command's Aliases:** ${command.config.aliases || "No Aliases"}
            `)
            .setColor('#2EFF00')

        message.channel.send(embed);
    }}
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "h.help",
    accessableby: "Members",
    aliases: []
}