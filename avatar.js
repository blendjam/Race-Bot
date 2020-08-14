module.exports = function showAvatar(message) {
  if (message.mentions && message.mentions.users.first()) {
    const userEmbed = {
      image:{
        url: message.mentions.users.first().avatarURL({dynamic:true, format:'png', size:1024}),
      }
    };
    message.channel.send({ embed: userEmbed });
  } else {
    const userEmbed = {
     image:{
        url: message.author.avatarURL({dynamic:true, format:'png', size:1024}),
      }
    };
    message.channel.send({ embed: userEmbed });
  }
};
