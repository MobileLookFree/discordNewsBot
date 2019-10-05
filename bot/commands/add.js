const mongo = require('../databaseScripts/mongoCommands.js');
const translation = require('../translation.js');

module.exports = {
  name: 'add',
  async execute(msg) {
    let addString = msg.content;
    let siteURL = addString.split(' ')[1];
    const operation = 'added';

    try {
      let userSettings = await mongo.getData(msg);

      if (userSettings !== undefined) {
        userSettings.rssLinks.push(siteURL);
        await mongo.replaceData(msg, userSettings, siteURL, operation);
      } else {
        userSettings = {
          userTag: msg.author.tag,
          rssLinks: [siteURL],
          language: 'en'
        };
        await mongo.insertData(userSettings);
      }

      msg.channel.send(`${translation[userSettings.language].add.text} ${siteURL}`);
    } catch (err) {
      console.log(err);
      return;
    }
  }
};
