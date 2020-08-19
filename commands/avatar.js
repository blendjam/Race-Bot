module.exports = {
  name: "avatar",
  description: "To show avatar of user",

  execute(message, args, fs) {
    if (message.mentions && message.mentions.users.first()) {
      const userEmbed = {
        image: {
          url: message.mentions.users
            .first()
            .displayAvatarURL({ dynamic: true, size: 1024 }),
        },
      };
      message.channel.send({ embed: userEmbed });
    } else {
      const userEmbed = {
        image: {
          url: message.author.displayAvatarURL({
            dynamic: true,
            size: 1024,
          }),
        },
      };
      message.channel.send({ embed: userEmbed });
    }
  },
};
