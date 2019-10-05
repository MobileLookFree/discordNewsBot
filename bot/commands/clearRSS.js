const mongo = require('../databaseScripts/mongoCommands.js');
const translation = require('../translation.js');

module.exports = {
  name: 'clearRSS',
  async execute(msg) {
    let clearString = msg.content;
    let deletedItem = Number(clearString.split(' ')[1]);
    const operation = 'deleted';
    
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

      let deletedURL = userSettings.rssLinks[deletedItem-1];

      if (userSettings.rssLinks.length === 0) {
        msg.channel.send(translation[userSettings.language].clear.errorLinks);
      } else if (userSettings.rssLinks[deletedItem - 1] === undefined) {
        msg.channel.send(`${translation[userSettings.language].clear.errorLinkNumber}${deletedItem}`);
      } else {
        userSettings.rssLinks.splice(deletedItem-1, 1);

        await mongo.replaceData(msg, userSettings, deletedURL, operation);
        
        msg.channel.send(`${translation[userSettings.language].clear.text} ${deletedURL}`);
      }
    } catch (err) {
      console.log(err);
      return;
    }
  }
};
