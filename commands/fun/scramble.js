const scrambleGenerator = require('rubiks-cube-scramble');
const Draw = require('../../helpers/drawScramble');

module.exports.execute = (message, args, bot) => {
  Draw.draw(message, scrambleGenerator.default());
  // message.channel.send(scrambleGenerator.default());
};

module.exports.help = {
  name: "scramble",
  category: "fun",
  aliases: ["scr"],
  description: "To get random scramble of cube",
  usage: "`scramble",
};