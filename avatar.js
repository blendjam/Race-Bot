module.exports = function showAvatar(message) {
  if (message.mentions && message.mentions.users.first()) {
    const userEmbed = {
      image:{
        url: message.mentions.users.first().avatarURL(),
      }
    };
    message.channel.send({ embed: userEmbed });
  } else {
    const userEmbed = {
     image:{
        url: message.author.avatarURL(),
      }
    };
    message.channel.send({ embed: userEmbed });
  }
};
