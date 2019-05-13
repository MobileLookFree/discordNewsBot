const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

const translation = require('../translation.js');
const { sleep } = require('./sleepFunction.js');

module.exports = {
  name: 'settings',
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
        msg.channel.send(translation[userSettings.language].settings.errorMessage);
      } else {
        let links = [];
        for (let i = 0; i < 5; i++) {
          if (userSettings.rssLinks[i] !== undefined) {
            links.push(userSettings.rssLinks[i]);
          }
          else {
            links.push('---');
          }
        }

        let languageName;
        if (userSettings.language === 0) {
          languageName = 'English'
        } else if (userSettings.language === 1) {
          languageName = 'Русский'
        }
        
        msg.channel.send({
          embed: {
            color: 7506394,
            title: translation[userSettings.language].settings.title,
            fields: [
              {
                name: translation[userSettings.language].settings.language,
                value: languageName
              },
              {
                name: translation[userSettings.language].settings.name + '1:',
                value: links[0]
              },
              {
                name: translation[userSettings.language].settings.name + '2:',
                value: links[1]
              },
              {
                name: translation[userSettings.language].settings.name + '3:',
                value: links[2]
              },
              {
                name: translation[userSettings.language].settings.name + '4:',
                value: links[3]
              },
              {
                name: translation[userSettings.language].settings.name + '5:',
                value: links[4]
              }
            ]
          }
        });
      }
    } catch (err) {
      console.log(err);
      return;
    }
  }
};