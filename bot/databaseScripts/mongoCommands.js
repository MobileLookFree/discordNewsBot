const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

module.exports = {
  async getData(msg) {
    let client = await MongoClient.connect(url, { useNewUrlParser: true });
    let result = await client
      .db('userSettings')
      .collection('users')
      .find({ userTag: `${msg.author.tag}` })
      .toArray();
    return result[0];
  },
  async replaceData(msg, userSettings, siteURL, operation) {
    let client = await MongoClient.connect(url, { useNewUrlParser: true });
    client
      .db('userSettings')
      .collection('users')
      .replaceOne({ userTag: `${msg.author.tag}` }, userSettings, function(err, res) {
        if (err) throw err;
        if (operation !== undefined) {
          console.log(`RSS ${siteURL} for ${msg.author.tag} ${operation}`);
        }
        client.close();
      });
  },
  async insertData(userSettings) {
    let client = await MongoClient.connect(url, { useNewUrlParser: true });
    client
      .db('userSettings')
      .collection('users')
      .insertOne(userSettings, function(err, res) {
        if (err) throw err;
        client.close();
      });
  }
};
