const botBuilder = require('claudia-bot-builder');
const telegramTemplate = botBuilder.telegramTemplate;

module.exports = botBuilder(message => {
  if (message.type === 'telegram')
    return new telegramTemplate.Photo('https://claudiajs.com/assets/claudiajs.png').get();
});