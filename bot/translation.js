module.exports = [
  {
    about: {
      title: 'About me:',
      description:
        'My name is Newser. I was created to keep you up to date with the latest news. Just add RSS and get the latest news without leaving Discord.'
    },
    add: {
      text: 'Added RSS source'
    },
    clear: {
      text: 'Deleted RSS',
      errorLinks: 'You have not added any news sources yet',
      errorLinkNumber: 'No source #',
    },
    help: {
      title: 'I can:',
      description:
        '[!about](https://mobilelookfree.github.io/discordNewsBot/#commands) – Show basic information about bot\n' +
        '[!add "RSS link"](https://mobilelookfree.github.io/discordNewsBot/#commands) – Add RSS-source (5 maximum)\n' +
        '[!clear "RSS number"](https://mobilelookfree.github.io/discordNewsBot/#commands) – Remove settings for RSS sources with selected number (RSS numbers available via command !settings)\n' +
        '[!help](https://mobilelookfree.github.io/discordNewsBot/#commands) – Show help-list of bot`s commands and link to the official site\n' +
        '[!how](https://mobilelookfree.github.io/discordNewsBot/#commands) – Show information about RSS and instructions on how to find RSS of your favorite site\n' +
        '[!language en/ru](https://mobilelookfree.github.io/discordNewsBot/#commands) - Set language of the bot\n' +
        '[!news "RSS number"](https://mobilelookfree.github.io/discordNewsBot/#commands) – Show the latest news from the RSS-source with selected number (RSS numbers available via command!settings)\n' +
        '[!ping](https://mobilelookfree.github.io/discordNewsBot/#commands) – Check the activity of the bot\n' +
        '[!settings](https://mobilelookfree.github.io/discordNewsBot/#commands) – Show language and RSS settings\n' +
        'Full list of commands available on [bot website](https://mobilelookfree.github.io/discordNewsBot)'
    },
    how: {
      title: 'How setup bot:',
      languageName: '1. Language:',
      languageValue:
        'Set bot language with command "!language en for English" and "!language ru" for Russian.',
      whatRSSname: '1. What is a RSS?',
      whatRSSvalue: 'RSS – special file describing the news feed of the Internet resource.',
      whereRSSname: '3. How to find RSS?',
      whereRSSvalue:
        'You can find a link to the RSS you are interested in by simply searching "<your favorite site> RSS". feed:RSS is not supported.'
    },
    news: {
      errorLinks: 'You have not added any news sources yet',
      errorLinkNumber: 'No source #',
      description: 'News for today:'
    },
    ping: {
      text: 'I am here:)'
    },
    settings: {
      title: 'Settings',
      language: 'Language',
      name: 'RSS Source #',
      errorMessage: 'You haven`t added any news sources yet'
    }
  },
  {
    about: {
      title: 'Обо мне:',
      description:
        'Меня зовут Newser. Я создан для того, чтобы держать тебя в курсе последний новостей. Просто добавь RSS и получай последние новости, не выходя из Discord.'
    },
    add: {
      text: 'Добавлен источник новостей'
    },
    clear: {
      text: 'Удален источник RSS',
      errorLinks: 'Пока Вы не добавили ни одного источника новостей',
      errorLinkNumber: 'Нет источника №'
    },
    help: {
      title: 'Вот что я умею:',
      description:
        '[!about](https://mobilelookfree.github.io/discordNewsBot/#commands) – О проекте\n' +
        '[!add "Ссылка на RSS"](https://mobilelookfree.github.io/discordNewsBot/#commands) – Добавить новый RSS (не более 5 источников)\n' +
        '[!clear "Номер RSS"](https://mobilelookfree.github.io/discordNewsBot/#commands) – Удалить RSS с выбранным номером (номера RSS доступны в функции !settings)\n' +
        '[!help](https://mobilelookfree.github.io/discordNewsBot/#commands) – Вызов раздела help\n' +
        '[!how](https://mobilelookfree.github.io/discordNewsBot/#commands) – Что такое RSS и где его найти\n' +
        '[!language ru/en](https://mobilelookfree.github.io/discordNewsBot/#commands) - Выбор русского или английского языка для бота\n' +
        '[!news "Номер RSS"](https://mobilelookfree.github.io/discordNewsBot/#commands) – Показать новости из RSS c выбранным номером(номера RSS доступны в функции !settings)\n' +
        '[!ping](https://mobilelookfree.github.io/discordNewsBot/#commands) – Позвать Бота\n' +
        '[!settings](https://mobilelookfree.github.io/discordNewsBot/#commands) – Настройки языка и добавленных RSS\n' +
        'С полным списком команд можно ознакомится на [нашем сайте](https://mobilelookfree.github.io/discordNewsBot)'
    },
    how: {
      title: 'Как настроить бота:',
      languageName: '1. Язык:',
      languageValue:
        'Установите язык бота командой "!language ru для русского" и "!language en" для английского.',
      whatRSSname: '2. Что такое RSS?',
      whatRSSvalue: 'RSS – специальный файл, описывающий новостную ленту интернет-ресурса.',
      whereRSSname: '3. Как найти RSS?',
      whereRSSvalue:
        'Вы можете найти ссылку на интересующий Вас RSS, просто поискав в поисковике "<ваш любимый сайт> RSS". feed:RSS не поддерживаются.'
    },
    news: {
      errorLinks: 'Пока Вы не добавили ни одного источника новостей',
      errorLinkNumber: 'Нет источника №',
      description: 'Новости на сегодня:'
    },
    ping: {
      text: 'Я здесь:)'
    },
    settings: {
      title: 'Настройки',
      language: 'Язык',
      name: 'Источник RSS №',
      errorMessage: 'Пока Вы не добавили ни одного источника новостей'
    }
  }
];
