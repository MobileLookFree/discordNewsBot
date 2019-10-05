const mongo = require('../databaseScripts/mongoCommands.js');

module.exports = {
  name: 'language',
  async execute(msg) {
    let languageString = msg.content;
    let languageCode = languageString.split(' ')[1];

    try {
      let userSettings = await mongo.getData(msg);

      if (userSettings !== undefined) {
        userSettings.language = languageCode;
        await mongo.replaceData(
          msg,
          userSettings,
          (siteURL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'),
          (operation = undefined)
        );
        console.log(`Language '${languageCode}' selected for ${msg.author.tag}`);
      } else {
        userSettings = {
          userTag: msg.author.tag,
          rssLinks: [],
          language: languageCode
        };
        await mongo.insertData(userSettings);
      }

      msg.channel.send(`Language '${languageCode}' selected`);
    } catch (err) {
      console.log(err);
      return;
    }
  }
};
