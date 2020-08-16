function toggle(arg, message, variables) {
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
  if (message.author.id == "539368618006413363") {
    variables[arg] = !variables[arg];
    message.reply(variables[arg]);
    return variables;
  }
}

module.exports = toggle;
