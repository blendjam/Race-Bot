module.exports = (link, message, gifs, fs) => {
  if (!link) {
    message.channel.send("Please provide a word after ``abaka` ");
    return;
  }
  let count = 0;
  gifs.baka.forEach(gif => {
    if (gif == link) {
      count++;
      return;
    }
  });
  if (count === 1) {
    message.channel.send(`GIF already exists in the list`);
  } else {
    gifs.baka.push(link);
    if (writeToFile(gifs, fs)) {
      message.channel.send(`Added the GIF`);
    }
  }
};

function writeToFile(gifs, fs) {
  const newData = JSON.stringify(gifs, null, 2);
  fs.writeFile("./gifs.json", newData, error => {
    if (error) {
      message.channel.send("Faild up update the list");
      return false;
    }
  });
  return true;
}
