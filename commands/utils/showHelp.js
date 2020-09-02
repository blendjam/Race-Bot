const { MessageEmbed } = require('discord.js');
module.exports.execute = (message, args, bot) => {

  if (!args[1] || args[1] == "help") {
    const embed = {
      title: "List of command",
      fields: [],
    }
    bot.commands.forEach(command => {
      if (command.help.name != "help" && command.help.name != "Scribble" && command.help.name != "dwoo" && command.help.name != "toggle")
        embed.fields.push({ name: command.help.name, value: command.help.description });
    })
    message.channel.send({ embed });
    return;
  }

  const embed = new MessageEmbed()
    .setColor("#2C2F33")
    .setAuthor(`${bot.user.username} Help`, bot.user.displayAvatarURL)
    .setFooter(`Requested by ${message.author.tag} at`, message.author.displayAvatarURL)
    .setTimestamp();
  if (args[1] && args[1] != "list") {
    let command = args[1];
    let cmd;
    if (bot.commands.has(command)) {
      cmd = bot.commands.get(command);
    }
    else if (bot.aliases.has(command)) {
      cmd = bot.commands.get(bot.aliases.get(command));
    }
    if (!cmd) return message.channel.send(embed.setTitle("Invalid Command.").setDescription(`Do \`${bot.config.PREFIX}help\` for the list of the commands.`));
    command = cmd.help;
    embed.setTitle(`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)} command help`);
    embed.setDescription([
      `❯ **Command:** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}`,
      `❯ **Description:** ${command.description || "No Description provided."}`,
      `❯ **Usage:** ${command.usage} `,
      `❯ **Aliases:** ${command.aliases ? command.aliases.join(", ") : "None"}`,
      `❯ **Category:** ${command.category ? command.category : "General" || "Misc"}`,
    ].join("\n"));
    message.channel.send(embed);
  }
  switch (args[1]) {
    case "list":
      embedMsg = {
        title: "List of Command \t\t\t\t\t\t\t\t\t\t\t\t\t\tUse Cases",
        fields: [
          {
            name:
              "ls\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t`ls",
            value: "To view the list",
          },
          {
            name:
              "dls\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t`dls",
            value: "View List with Index",
          },
          {
            name:
              "rml\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t`rml",
            value: "Remove Element at last Index",
          },
          {
            name:
              "add\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t`add Name",
            value: "To add to the list",
          },
          {
            name:
              "rm\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t`rm Name",
            value: "Remove the specified element",
          },
          {
            name:
              "rmi\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t`rmi 12",
            value: "Remove at specific Index",
          },
          {
            name:
              "rep\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t`rep OldWord, NewWord",
            value: "Replace a word with another word",
          },
          {
            name:
              "repi\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t`repi 12, New Word",
            value: "Replace word at specific Index",
          },
        ],
      };
      message.channel.send({ embed: embedMsg });
      break;
  }
};

module.exports.help = {
  name: "help",
  aliases: ["h", "commands"],
  usage: "`help",
  category: "utils",
  description: "To show the help embed",

}