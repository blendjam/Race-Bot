const Canvas = require('canvas');
const { MessageAttachment } = require("discord.js");
Canvas.registerFont('./Roboto-Regular.ttf', { family: "Roboto" });

module.exports = {
  draw: async (message, text) => {

    const canvas = Canvas.createCanvas(1280, 100)
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('./bg.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.font = '50px Roboto';
    ctx.fillStyle = '#ffffff';
    var x = 48;
    var y = 64;

    ctx.fillText(text, x, y);

    const attachment = new MessageAttachment(canvas.toBuffer(), "Race-Text.png");

    return message.channel.send("Scramble: ", attachment);
  }
}
