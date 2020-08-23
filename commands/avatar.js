module.exports = {
  name: "avatar",
  description: "To show avatar of user",

  execute(message, args, fs) {
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
  },
};
