const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === ';привет') {
    msg.reply('прив, я Дракончик. Как у тебя дела?');
  }
});

client.on('message', msg => {
  if (msg.content === ';помощь') {
    msg.reply('привет. Пока что у меня только одна команда (не считая эту) это команда - ;привет. В будущем будет немного больше команд. А пока так скажу, не забывай кушать и спать) А также мой создатель: Климер69#2203');
  }
});

client.login('NTg1NDA5OTIxMTkzODY5MzIy.XPZEdw.sid6n5A_2JnVSLe6DzEhX9a_5Kc');
