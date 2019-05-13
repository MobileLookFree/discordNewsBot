const translations = [
  {
    language: 'en',
    header: {
      logoTitle: 'Discord Home page',
      menu: {
        commands: 'Commands',
        about: 'About',
        scrollDown: 'Just scroll down(¬‿¬)'
      },
      languageSwitcherTitle: 'Language',
      languageHint: 'Language'
    },
    addSection: {
      title: 'News RSS-bot for your server',
      info: 'Free, Open-Source, NodeJS-based',
      addButton: 'Add Bot to server',
      downloadButton: 'Download Discord'
    },
    commandSection: {
      title: 'Avaliable commands:',
      commands: [
        {
          commandID: 'about',
          discription: 'Shows basic information about bot.',
          message: '!about'
        },
        {
          commandID: 'add',
          discription: 'Adding RSS-source (5 maximum).',
          message: '!add https://beardycast.com/feed'
        },
        {
          commandID: 'clearRSS',
          discription: 'Removes settings for RSS sources with selected number.',
          message: '!clear 1'
        },
        {
          commandID: 'help',
          discription: 'Shows help-list of bot`s commands and link to the official site.',
          message: '!help'
        },
        {
          commandID: 'how',
          discription:
            'Shows information about RSS and instructions on how to find RSS of your favorite site.',
          message: '!how'
        },
        {
          commandID: 'news',
          discription:
            'Shows the latest news from the RSS-source with selected number. If the source is not specified , it will report it.',
          message: '!news 1'
        },
        {
          commandID: 'ping',
          discription: 'Checks the activity of the bot.',
          message: '!ping'
        },
        {
          commandID: 'settings',
          discription: 'Shows a list of current RSS sources.',
          message: '!settings'
        }
      ]
    },
    aboutSection: {
      title: 'About Project',
      discription: ' is a news RSS-bot created as part of my Degree Project in the RTU MIREA. It`s based on discord.js API, uses Node JS and store user data in MongoDB. The bot`s source code is available to everyone on my GitHub. A link to GitHub and ways to communication with me can be found below. The project will be evolve.'
    },
    footer: {
      iconsTitle: {
        vk: 'VK',
        twitter: 'Twitter',
        facebook: 'Facebook',
        linkedIn: 'LinkedIn',
        github: 'GitHub',
        discord: 'Discord Bots',
        email: 'Email'
      },
      copyright: '© 2019 Andrei Prokhorov'
    }
  },
  {
    language: 'ru',
    header: {
      logoTitle: 'Cайт Discord',
      menu: {
        commands: 'Команды',
        about: 'О проекте',
        scrollDown: 'Листай вниз(¬‿¬)'
      },
      languageSwitcherTitle: 'Выбрать язык',
      languageHint: 'Язык'
    },
    addSection: {
      title: 'Новостной RSS-бот для вашего сервера',
      info: 'Бесплатный, с открытым исходным кодом, основан на NodeJS',
      addButton: 'Добавить бота на сервер',
      downloadButton: 'Загрузить Discord'
    },
    commandSection: {
      title: 'Доступные команды:',
      commands: [
        {
          commandID: 'about',
          discription: 'Выводит основную информацию о боте.',
          message: '!about'
        },
        {
          commandID: 'add',
          discription: 'Добавляет RSS-источник новостей (всего не более 5).',
          message: '!add https://beardycast.com/feed'
        },
        {
          commandID: 'clear',
          discription: 'Удаляет настройки RSS-источника с выбранным номером.',
          message: '!clear 1'
        },
        {
          commandID: 'help',
          discription: 'Выводит справку со списком команд бота и ссылкой на офицальный сайт.',
          message: '!help'
        },
        {
          commandID: 'how',
          discription:
            'Выводит информацию о RSS и инструкцию, как найти RSS вашего любимого сайта.',
          message: '!how'
        },
        {
          commandID: 'news',
          discription:
            'Выводит последние новости из RSS-источника с выбранным номером. Если источник не задан - сообщит об этом.',
          message: '!news 1'
        },
        {
          commandID: 'ping',
          discription: 'Проверяет активность бота.',
          message: '!ping'
        },
        {
          commandID: 'settings',
          discription: 'Отображает список текущих RSS-источников.',
          message: '!settings'
        }
      ]
    },
    aboutSection: {
      title: 'О проекте',
      discription:
        ' - новостной RSS-бот, созданный в рамках моего дипломного проекта в РТУ МИРЭА. Он основан на discord.js API, использует NodeJS и хранит пользовательские данные в MingoDB. Исходный код бота доступен всем в моем GitHub. Ссылка на него и способы связи со мной можно найти ниже. Проект будет развиваться.'
    },
    footer: {
      iconsTitle: {
        vk: 'ВКонтакте',
        twitter: 'Twitter',
        facebook: 'Facebook',
        linkedIn: 'LinkedIn',
        github: 'GitHub',
        discord: 'Discord Bots',
        email: 'Email'
      },
      copyright: '© 2019 Андрей Прохоров'
    }
  }
];

export default translations;
