let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';

const { sleep } = require('./sleepFunction.js');

module.exports = {
  name: 'language',
  async execute(msg) {
    let languageString = msg.content;
    let languageName = languageString.split(' ')[1];
    var languageCode;

    if (languageName === 'en') {
      languageCode = 0;
    } else if (languageName === 'ru') {
      languageCode = 1;
    }

    try {
      await MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        const dbo = db.db('userSettings');
        dbo
          .collection('users')
          .find({ userTag: `${msg.author.tag}` })
          .toArray(function(err, result) {
            if (err) throw err;
            userSettings = result[0];
            db.close();
          });
      });

      await sleep(200);

      if (userSettings !== undefined) {
        userSettings.language = languageCode;

        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          let dbo = db.db('userSettings');
          dbo
            .collection('users')
            .replaceOne({ userTag: `${msg.author.tag}` }, userSettings, function(err, res) {
              if (err) throw err;
              console.log(`Language '${languageName}' selected for ${msg.author.tag}`);
              db.close();
            });
        });
      } else {
        userSettings = {
          userTag: msg.author.tag,
          rssLinks: [],
          language: languageCode
        };

        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          let dbo = db.db('userSettings');
          dbo.collection('users').insertOne(userSettings, function(err, res) {
            if (err) throw err;
            console.log(`Language '${languageName}' selected for ${msg.author.tag}`);
            db.close();
          });
        });
      }

      msg.channel.send(`Language '${languageName}' selected`);
      
    } catch (err) {
      console.log(err);
      return;
    }
  }
};
