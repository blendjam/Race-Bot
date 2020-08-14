module.exports = (arg, message, fs) => {
  const words = JSON.parse(fs.readFileSync("./scribbleNames.json"));
  let index, array;
  switch (arg) {
    case "add":
      const newText = message.content.substring(5);
      if (!newText) {
        message.channel.send("Please provide a word after ``add` ");
        break;
      }

      let count = 0;
      words.names.forEach(word => {
        if (word.toLowerCase() == newText.toLowerCase()) {
          count++;
          return;
        }
      });
      if (count === 1) {
        message.channel.send(`${newText} already exists in the list`);
      } else {
        words.names.push(newText);
        if (writeToFile(words, fs)) {
          message.channel.send(`Added the word \`${newText}\``);
          message.channel.send(" Your List is ```css\n" + words.names + "```");
        }
      }
      break;

    case "rm":
      const wordToRemove = message.content.substring(4);
      index = words.names.indexOf(wordToRemove) + 1;
      if (removeWord(words, index, message, fs)) {
        message.channel.send(`Removed \`${wordToRemove}\``);
      } else {
        message.channel.send(
          "`" + wordToRemove + "` doesn't exist in the list "
        );
      }
      break;

    case "rmi":
      index = message.content.substring(5);
      const removedWord = words.names[index - 1];
      if (removeWord(words, index, message, fs)) {
        message.channel.send(`Removed \`${removedWord}\` index(${index}) `);
      } else {
        message.channel.send("Invalid index");
      }
      break;

    case "list":
      message.channel.send(" Your List is ```css\n" + words.names + "```");
      break;

    case "repi":
      array = message.content.substring(6).split(",");
      if (!array[1]) return;
      index = array[0].trim() - 1;
      if (index > words.names.length) {
        message.channel.send("Index out of bound");
        return;
      }
      if (words.names.includes(array[1].trim())) {
        message.channel.send("`" + array[1].trim() + "` Already Exists");
        return;
      }
      words.names[index] = array[1].trim();
      if (writeToFile(words, fs)) {
        message.channel.send(
          " Your new List is ```css\n" + words.names + "```"
        );
      }
      break;

    case "rep":
      array = message.content.substring(5).split(",");
      if (!array[1]) return;

      const newWord = array[0].trim();
      if (!words.names.includes(newWord)) {
        message.channel.send(`\`${newWord}\` doesn't exist in the list`);
        return;
      }

      index = words.names.indexOf(newWord);
      if (words.names.includes(array[1].trim())) {
        message.channel.send("`" + array[1].trim() + "` Already Exists");
        return;
      }
      words.names[index] = array[1].trim();
      if (writeToFile(words, fs)) {
        message.channel.send(
          " Your new List is ```css\n" + words.names + "```"
        );
      }
      break;

    case "dtlist":
      let string = "";
      words.names.forEach((word, i) => {
        string = string + `${word}(${i + 1}), `;
      });
      message.channel.send(" Your List is ```" + string + "```");
  }
};

function removeWord(words, givenIndex, message, fs) {
  const index = givenIndex - 1;
  if (words.names[index]) {
    for (let i = index; i <= words.names.length; i++) {
      if (words.names[i + 1]) {
        words.names[i] = words.names[i + 1];
      }
    }
    words.names.pop();
    if (writeToFile(words, fs)) {
      message.channel.send(" Your new List is ```css\n" + words.names + "```");
      return true;
    }
  }
  return false;
}

function writeToFile(words, fs) {
  const newData = JSON.stringify(words, null, 2);
  fs.writeFile("./scribbleNames.json", newData, error => {
    if (error) {
      message.channel.send("Faild up update the list");
      return false;
    }
  });
  return true;
}
