const gifs = require("../json/gifs.json");
module.exports = {
  name: "baka",
  description: "To show baka gif",
  execute(message, args, fs) {
    const randomGIF = gifs.baka[Math.floor(Math.random() * gifs.baka.length)];
    if (args[1]) {
      if (args[1] === "<@!744851704909922335>") {
        message.channel.send("You can't baka me. You are baka :angry:");
      } else {
        message.channel.send(`${args[1]} is baka :rofl:`);
      }
    } else {
      message.channel.send("You are baka :rofl:");
    }
    message.channel.send(randomGIF);
  },
};
