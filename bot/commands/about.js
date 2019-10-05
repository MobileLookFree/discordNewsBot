const mongo = require('../databaseScripts/mongoCommands.js');
const translation = require('../translation.js');

module.exports = {
  name: 'about',
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

      msg.channel.send({
        embed: {
          color: 7506394,
          title: translation[userSettings.language].about.title,
          description: translation[userSettings.language].about.description
        }
      });
    } catch (err) {
      console.error(err);
      return;
    }
  }
};
