const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');

const botconfig = require('./botconfig.json');
global.feed; // !add https://beardycast.com/feed https://news.yandex.ru/internet.rss
global.userSettings;

const commandFiles = fs.readdirSync('./commands/').filter((file) => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!\nVersion: ${botconfig.version}`);
});

client.on('message', (msg) => {
  if (msg.content.startsWith(botconfig.prefix + 'about')) {
    client.commands.get('about').execute(msg);
  } else if (msg.content.startsWith(botconfig.prefix + 'add')) {
    client.commands.get('add').execute(msg);
  } else if (msg.content.startsWith(botconfig.prefix + 'clear')) {
    client.commands.get('clearRSS').execute(msg);
  } else if (msg.content.startsWith(botconfig.prefix + 'help')) {
    client.commands.get('help').execute(msg);
  } else if (msg.content.startsWith(botconfig.prefix + 'how')) {
    client.commands.get('how').execute(msg);
  } else if (msg.content.startsWith(botconfig.prefix + 'language')) {
    client.commands.get('language').execute(msg);
  } else if (msg.content.startsWith(botconfig.prefix + 'news')) {
    client.commands.get('news').execute(msg);
  } else if (msg.content.startsWith(botconfig.prefix + 'ping')) {
    client.commands.get('ping').execute(msg);
  } else if (msg.content.startsWith(botconfig.prefix + 'settings')) {
    client.commands.get('settings').execute(msg);
  }
});

client.login(botconfig.token);
