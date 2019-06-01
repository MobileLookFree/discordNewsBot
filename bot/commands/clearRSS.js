const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

const translation = require('../translation.js');
const { sleep } = require('./sleepFunction.js');

module.exports = {
  name: 'clearRSS',
  async execute(msg) {

    let clearString = msg.content;
    let deletedItem = Number(clearString.split(' ')[1]);
    
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

      let deletedURL = userSettings.rssLinks[deletedItem-1];

      if (userSettings.rssLinks.length === 0) {
        msg.channel.send(translation[userSettings.language].clear.errorLinks);
      } else if (userSettings.rssLinks[deletedItem - 1] === undefined) {
        msg.channel.send(`${translation[userSettings.language].clear.errorLinkNumber}${deletedItem}`);
      } else {
        userSettings.rssLinks.splice(deletedItem-1, 1);

        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db('userSettings');
          dbo
            .collection('users')
            dbo.collection('users').replaceOne({ userTag: `${msg.author.tag}` }, userSettings, function(err, res) {
              if (err) throw err;
              console.log(`RSS ${deletedURL} for ${msg.author.tag} deleted`);
              db.close();
            });
          msg.channel.send(`${translation[userSettings.language].clear.text} ${deletedURL}`);
        });
      }
    } catch (err) {
      console.log(err);
      return;
    }
  }
};
