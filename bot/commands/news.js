const Parser = require('rss-parser');
const parser = new Parser();
const mongo = require('../databaseScripts/mongoCommands.js');
const translation = require('../translation.js');

module.exports = {
  name: 'news',
  async execute(msg) {
    let newsString = msg.content;
    let selectedLink = Number(newsString.split(' ')[1]);

    try {
      let userSettings = await mongo.getData(msg);

      if (userSettings === undefined) {
        userSettings = {
          userTag: msg.author.tag,
          rssLinks: [],
          language: 'en'
        };
        await mongo.insertData(userSettings);
      }

      if (userSettings.rssLinks.length === 0) {
        msg.channel.send(translation[userSettings.language].news.errorLinks);
      }

      if (userSettings.rssLinks[selectedLink - 1] === undefined) {
        msg.channel.send(`${translation[userSettings.language].news.errorLinkNumber}${selectedLink}`);
      }

      feed = await parser.parseURL(userSettings.rssLinks[selectedLink - 1]);
      msg.channel.send({
        embed: {
          color: 7506394,
          title: feed.title,
          description: translation[userSettings.language].news.description,
          fields: [
            {
              name: feed.items[0].title,
              value: feed.items[0].link
            },
            {
              name: feed.items[1].title,
              value: feed.items[1].link
            },
            {
              name: feed.items[2].title,
              value: feed.items[2].link
            },
            {
              name: feed.items[3].title,
              value: feed.items[3].link
            },
            {
              name: feed.items[4].title,
              value: feed.items[4].link
            }
          ],
          timestamp: new Date()
        }
      });
    } catch (err) {
      console.log(err);
      return;
    }
  }
};
