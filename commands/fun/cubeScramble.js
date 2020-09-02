const scrambleGenerator = require('rubiks-cube-scramble');

module.exports.execute = (message, args, bot) => {
  message.channel.send(scrambleGenerator.default());
};

module.exports.help = {
  name: "scramble",
  category: "fun",
  aliases: ["scr"],
  description: "To get random scramble of cube",
  usage: "`scramble",
};