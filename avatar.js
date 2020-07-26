module.exports = function showAvatar(message) {
  if (message.mentions && message.mentions.users.first()) {
    const avatar = message.mentions.users.first().avatarURL();
    message.channel.send(avatar);
  } else {
    message.channel.send(message.author.avatarURL());
  }
};
