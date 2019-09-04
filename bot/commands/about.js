let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';

const translation = require('../translation.js');

module.exports = {
  name: 'about',
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
