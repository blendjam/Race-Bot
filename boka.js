module.exports = function (args, message) {
  if (args[1]) {
    if (args[1] === "<@!735709626443759620>") {
      message.channel.send("You can't baka me. You are baka :angry:");
    } else {
      message.channel.send(`${args[1]} is baka :rofl:`);
    }
  } else {
    message.channel.send("You are baka :rofl:");
  }
};
