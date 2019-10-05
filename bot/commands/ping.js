const mongo = require('../databaseScripts/mongoCommands.js');
const translation = require('../translation.js');

module.exports = {
  name: 'ping',
  async execute(msg) {
    try {
      let userSettings = await mongo.getData(msg);

      if (userSettings === undefined) {
        userSettings = {
          userTag: msg.author.tag,
          rssLinks: [],
          language: 'en'
        }; 
        await mongo.insertData(userSettings);
      }

      msg.channel.send(translation[userSettings.language].ping.text);
    } catch (err) {
      console.log(err);
      return;
    }
  }
};
