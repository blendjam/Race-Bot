const { variables } = require("../../config.json");
module.exports.execute = (message, args, bot) => {

  const arg = args[1];
  if (!arg) {
    const msgEmbed = {
      title: "Variables",
      fields: [],
    };

    Object.keys(variables).forEach(name => {
      msgEmbed.fields.push({ name, value: variables[name] });
    });

    message.channel.send({ embed: msgEmbed });
    return variables;
  }

  if (message.author.id == "621977065712910336") {
    variables[arg] = !variables[arg];
    message.reply(variables[arg]);
    return variables;
  }
};

module.exports.help = {
  name: "toggle",
  category: "admin",
  description: "To toggle the variables",
  aliases: ["t"],
  usage: "`toggle variable",
}