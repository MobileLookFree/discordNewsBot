let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';
const translation = require('../translation.js');

module.exports = {
  name: 'how',
  async execute(msg) {
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
          language: 'en'
        };
        
        client
          .db('userSettings')
          .collection('users')
          .insertOne(userSettings, function(err, res) {
            if (err) throw err;
            client.close();
          });
      }

      msg.channel.send({
        embed: {
          color: 7506394,
          title: translation[userSettings.language].how.title,
          fields: [
            {
              name: translation[userSettings.language].how.languageName,
              value: translation[userSettings.language].how.languageValue
            },
            {
              name: translation[userSettings.language].how.whatRSSname,
              value: translation[userSettings.language].how.whatRSSvalue
            },
            {
              name: translation[userSettings.language].how.whereRSSname,
              value: translation[userSettings.language].how.whereRSSvalue
            }
          ]
        }
      });
    } catch (err) {
      console.log(err);
      return;
    }
  }
};
