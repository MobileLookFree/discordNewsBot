var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

const translation = require('../translation.js');
const { sleep } = require('./sleepFunction.js');

module.exports = {
  name: 'add',
  async execute(msg) {
    let addString = msg.content;
    let siteURL = addString.split(' ')[1];

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
        userSettings.rssLinks.push(siteURL);

        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          let dbo = db.db('userSettings');
          dbo
            .collection('users')
            .replaceOne({ userTag: `${msg.author.tag}` }, userSettings, function(err, res) {
              if (err) throw err;
              console.log(`RSS ${siteURL} for ${msg.author.tag} added`);
              db.close();
            });
        });
      } else {
        userSettings = {
          userTag: msg.author.tag,
          rssLinks: [siteURL],
          language: 0
        };

        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          let dbo = db.db('userSettings');
          dbo.collection('users').insertOne(userSettings, function(err, res) {
            if (err) throw err;
            console.log(`RSS ${siteURL} for ${msg.author.tag} added`);
            db.close();
          });
        });
      }

      msg.channel.send(`${translation[userSettings.language].add.text} ${siteURL}`);

    } catch (err) {
      console.log(err);
      return;
    }
  }
};
