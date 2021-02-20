# weight-controll-app

Приложение для контроля веса. Разработана командой "Вали кабана !!!" как заочный кейс к предпрофессиональной олимпиаде 2020-2021. Ремарка: данная документация была написана на языке Markdown и может не совсем красиво выглядеть после интерпретации в PDF. С непосредственной версии в Markdown можно ознакомиться с папке [репозитория](https://github.com/VALI-KABANA/weight-controll-app)

## Папки с кодом

* Интерфейс - src/frontend/weight-controll-app
* Сервер - src/backend/src

## Инструкция для установки

## Запуск интерфейс

1. Склонировать репозиторий
2. Перейти в папку с веб-приложением `cd src/frontend/weight-controll-app`
3. Установить пакеты: `npm install package.json`
4. Запустить приложение на локальном компьютере `npm start`
5. Открыть `localhost:3000`

## Запуск базы данных

1. Установить себе на компьютер MongoDB и запустить её сервер слушать порт `localhost:27017`

## Запуск сервера

1. Склонировать репозиторий
2. Перейти в папку с сервером `cd src/backend/`
3. Установить пакеты: `pip install requirements.txt`
4. Запустить сервер на локальном компьютере `pythhon src/app.py`


## Использованные технологии

* Сервер:

  * [Python language](https://en.wikipedia.org/wiki/Python_%28programming_language%29)
  * [MongoDB](https://en.wikipedia.org/wiki/MongoDB)
  * [Flask web framework](https://en.wikipedia.org/wiki/Flask_(web_framework))
  * [Bcrypt hashing library](https://en.wikipedia.org/wiki/bcrypt)

* Интерфейс:
  
  * [React framework](https://en.wikipedia.org/wiki/React_(web_framework))
  * [Redux]((https://en.wikipedia.org/wiki/Redux_(JavaScript_library))
  * [Material UI](https://material-ui.com/)
  * [Google Charts](https://en.wikipedia.org/wiki/Google_Charts) 

## Более подробная документация серверной и интерфейсной частей

* [Сервер](https://github.com/VALI-KABANA/weight-controll-app/blob/main/docs/back.md)
* [Интерфейс](https://github.com/VALI-KABANA/weight-controll-app/blob/main/docs/front.md)

