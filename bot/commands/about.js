let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';

const translation = require('../translation.js');
const { sleep } = require('./sleepFunction.js');

module.exports = {
  name: 'about',
  async execute(msg) {
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

      if (userSettings === undefined) {
        userSettings = {
          userTag: msg.author.tag,
          rssLinks: [],
          language: 0
        };

        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          let dbo = db.db('userSettings');
          dbo.collection('users').insertOne(userSettings, function(err, res) {
            if (err) throw err;
            db.close();
          });
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
      console.log(err);
      return;
    }
  }
};
