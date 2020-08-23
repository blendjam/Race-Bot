const Canvas = require('canvas');
const { MessageAttachment } = require("discord.js");

module.exports = {
    draw: async (message, text) => {
        const textChunks = getChunks(text);

        const canvas = Canvas.createCanvas(800, textChunks.length * 50);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage('./bg.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.font = '28px sans-serif';
        ctx.fillStyle = '#ffffff';
        var x = 30;
        var y = 40;
        var lineheight = 40;

        for (var i = 0; i < textChunks.length; i++)
            ctx.fillText(textChunks[i], x, y + (i * lineheight));

        const attachment = new MessageAttachment(canvas.toBuffer(), "Race-Text.png");

        return message.channel.send("Type this fast!!", attachment);
    }
}

function getChunks(text) {
    text = text.split(" ");
    const chunks = [];
    const lineLength = 9;
    for (let i = 0; i < text.length; i += lineLength) {
        const newText = text.slice(i, i + lineLength);
        chunks.push(newText.join(" "));
    }
    return chunks;
}