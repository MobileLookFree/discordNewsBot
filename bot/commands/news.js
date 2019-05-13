const Parser = require('rss-parser');
const parser = new Parser();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

const translation = require('../translation.js');
const { sleep } = require('./sleepFunction.js');

module.exports = {
  name: 'news',
  async execute(msg) {
    let newsString = msg.content;
    let selectedLink = Number(newsString.split(' ')[1]);

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

      if (userSettings.rssLinks.length === 0) {
        msg.channel.send(translation[userSettings.language].news.errorLinks);
      }

      if (userSettings.rssLinks[selectedLink - 1] === undefined) {
        msg.channel.send(`${translation[userSettings.language].news.errorLinkNumber}${selectedLink}`);
      }

      global.feed = await parser.parseURL(userSettings.rssLinks[selectedLink - 1]);
      msg.channel.send({
        embed: {
          color: 7506394,
          title: global.feed.title,
          description: translation[userSettings.language].news.description,
          fields: [
            {
              name: global.feed.items[0].title,
              value: global.feed.items[0].link
            },
            {
              name: global.feed.items[1].title,
              value: global.feed.items[1].link
            },
            {
              name: global.feed.items[2].title,
              value: global.feed.items[2].link
            },
            {
              name: global.feed.items[3].title,
              value: global.feed.items[3].link
            },
            {
              name: global.feed.items[4].title,
              value: global.feed.items[4].link
            }
          ],
          timestamp: new Date()
        }
      });
    } catch (err) {
      console.log(err);
    }
    return userSettings;
  }
};
