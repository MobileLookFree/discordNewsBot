const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

const translation = require('../translation.js');

module.exports = {
  name: 'clearRSS',
  async execute(msg) {
    let clearString = msg.content;
    let deletedItem = Number(clearString.split(' ')[1]);
    
    try {
      let client = await MongoClient.connect(url, { useNewUrlParser: true });
      let result = await client
        .db('userSettings')
        .collection('users')
        .find({ userTag: `${msg.author.tag}` })
        .toArray();
      let userSettings = result[0];

      if (userSettings === undefined) {
        userSettings = {
          userTag: msg.author.tag,
          rssLinks: [],
          language: 0
        };
        
        client
          .db('userSettings')
          .collection('users')
          .insertOne(userSettings, function(err, res) {
            if (err) throw err;
            client.close();
          });
      }

      let deletedURL = userSettings.rssLinks[deletedItem-1];

      if (userSettings.rssLinks.length === 0) {
        msg.channel.send(translation[userSettings.language].clear.errorLinks);
      } else if (userSettings.rssLinks[deletedItem - 1] === undefined) {
        msg.channel.send(`${translation[userSettings.language].clear.errorLinkNumber}${deletedItem}`);
      } else {
        userSettings.rssLinks.splice(deletedItem-1, 1);

        client
        .db('userSettings')
        .collection('users')
        .replaceOne({ userTag: `${msg.author.tag}` }, userSettings, function(err, res) {
          if (err) throw err;
          console.log(`RSS ${deletedURL} for ${msg.author.tag} deleted`);
          client.close();
        });
        
        msg.channel.send(`${translation[userSettings.language].clear.text} ${deletedURL}`);
      }
    } catch (err) {
      console.log(err);
      return;
    }
  }
};
