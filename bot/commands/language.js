let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';

module.exports = {
  name: 'language',
  async execute(msg) {
    let languageString = msg.content;
    let languageName = languageString.split(' ')[1];
    let languageCode;

    if (languageName === 'en') {
      languageCode = 0;
    } else if (languageName === 'ru') {
      languageCode = 1;
    }

    try {
      let client = await MongoClient.connect(url, { useNewUrlParser: true });
      let result = await client
        .db('userSettings')
        .collection('users')
        .find({ userTag: `${msg.author.tag}` })
        .toArray();
      let userSettings = result[0];

      if (userSettings !== undefined) {
        userSettings.language = languageCode;

        client
          .db('userSettings')
          .collection('users')
          .replaceOne({ userTag: `${msg.author.tag}` }, userSettings, function(err, res) {
            if (err) throw err;
            console.log(`Language '${languageName}' selected for ${msg.author.tag}`);
            client.close();
          });
      } else {
        userSettings = {
          userTag: msg.author.tag,
          rssLinks: [],
          language: languageCode
        };

        client
          .db('userSettings')
          .collection('users')
          .insertOne(userSettings, function(err, res) {
            if (err) throw err;
            client.close();
          });
      }

      msg.channel.send(`Language '${languageName}' selected`);
    } catch (err) {
      console.log(err);
      return;
    }
  }
};
