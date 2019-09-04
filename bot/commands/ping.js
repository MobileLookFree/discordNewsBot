const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

const translation = require('../translation.js');

module.exports = {
  name: 'ping',
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

      msg.channel.send(translation[userSettings.language].ping.text);
    } catch (err) {
      console.log(err);
      return;
    }
  }
};
