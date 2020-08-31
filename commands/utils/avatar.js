module.exports.execute = (message, args, bot) => {
  if (message.mentions && message.mentions.users.first()) {
    const user = message.mentions.users.first();
    const img = user.displayAvatarURL({ dynamic: true, format: "png", size: 4096 });
    const userEmbed = {
      title: "URL",
      url: img,
      image: {
        url: img
      },
    };
    message.channel.send({ embed: userEmbed });
  } else {
    const user = message.author
    const img = user.displayAvatarURL({ dynamic: true, size: 4096, });
    const userEmbed = {
      title: "URL",
      url: img,
      image: {
        url: img
      },
    };
    message.channel.send({ embed: userEmbed });
  }
};

module.exports.help = {
  name: "avatar",
  category: "utils",
  aliases: ["pfp", "icon"],
  usage: "`avatar @mention",
  description: "To show avatar of user",
}