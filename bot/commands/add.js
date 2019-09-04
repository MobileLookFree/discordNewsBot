var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

const translation = require('../translation.js');

module.exports = {
  name: 'add',
  async execute(msg) {
    let addString = msg.content;
    let siteURL = addString.split(' ')[1];

    try {
      let client = await MongoClient.connect(url, { useNewUrlParser: true });
      let result = await client
        .db('userSettings')
        .collection('users')
        .find({ userTag: `${msg.author.tag}` })
        .toArray();
      let userSettings = result[0];

      if (userSettings !== undefined) {
        userSettings.rssLinks.push(siteURL);

        client
        .db('userSettings')
        .collection('users')
        .replaceOne({ userTag: `${msg.author.tag}` }, userSettings, function(err, res) {
          if (err) throw err;
          console.log(`RSS ${siteURL} for ${msg.author.tag} added`);
          client.close();
        });

      } else {
        userSettings = {
          userTag: msg.author.tag,
          rssLinks: [siteURL],
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

      msg.channel.send(`${translation[userSettings.language].add.text} ${siteURL}`);
    } catch (err) {
      console.log(err);
      return;
    }
  }
};
