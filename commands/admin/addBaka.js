const fs = require('fs');
module.exports.execute = (message, args, bot) => {

  if (!args[1]) {
    message.channel.send("Please provide a word after ``abaka` ");
    return;
  }

  const link = args[1].trim();
  const file_dec = fs.openSync("./json/gifs.json");
  const gifs = JSON.parse(fs.readFileSync("./json/gifs.json"));

  if (gifs.baka.includes(link)) {
    message.channel.send(`GIF already exists in the list`);
  } else {
    gifs.baka.push(link);
    if (writeToFile(gifs, fs)) {
      message.channel.send(`Added the GIF`);
    }
  }

  fs.close(file_dec, err => {
    if (err) console.log("Failed Closing");
  });
};

function writeToFile(gifs, fs) {
  const newData = JSON.stringify(gifs, null, 2);
  fs.writeFile("./json/gifs.json", newData, error => {
    if (error) {
      message.channel.send("Faild up update the list");
      return false;
    }
  });
  return true;
}


module.exports.help = {
  name: "abaka",
  aliases: [],
  usage: "`abaka <link>",
  category: "admin",
  description: "To add baka gifs",
}