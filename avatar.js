module.exports = function showAvatar(message) {
  if (message.mentions && message.mentions.users.first()) {
    const Embed = {
      image:{
        url: message.mentions.users.first().avatarURL()
      }
    };
    message.channel.send({ embed: Embed });
  } else {
    const Embed = {
     image:{
        url: message.author.avatarURL();
      }
    };
    message.channel.send({ embed: Embed });
  }
};
