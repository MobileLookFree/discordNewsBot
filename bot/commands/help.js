const mongo = require('../databaseScripts/mongoCommands.js');
const translation = require('../translation.js');

module.exports = {
  name: 'help',
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
          title: translation[userSettings.language].help.title,
          description: translation[userSettings.language].help.description
        }
      });
      
    } catch (err) {
      console.log(err);
      return;
    }
  }
};
