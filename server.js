const TelegramBot = require('node-telegram-bot-api');
const token = 'token api';
const bot = new TelegramBot(token , {polling : {interval: 200, autoStart: true}});
bot.onText(/\/start(.+)/, msg,match=>{
    const chatId = msg.chat.id;
    const username = match[1];
    bot.getChat('my channel').then(channel=>{
        bot.addChatMember(channel.id, username);
        bot.sendMessage(chatId ,User `${username} added to channel successfully`);
    })
    .catch(error=>{
        console.error(error);
        bot.sendMessage(chatId, 'Error adding user to channel');
    })
})