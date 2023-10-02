# Apgard

## Особенности конфигурации Gulp
Node version v16.14.0
1) Автоматическая генерация шрифтов из .otf и .ttf
2) Автоматическая генерация _fonts.scss файла с подключением шрифтов, 
а также миксинами для использования этих шрифтов.
При уже существующем файле _fonts.scss новый файл генерироваться не будет
3) Автоматическая генерация .webp изображений из форматов {.jpg, .jpeg, .png, .gif}.
Также предусмотрено их автоматическое подключение.
(Оборачивайте значение атрибута src в теге img в двойные кавычки, т.к плагин gulp-webp-html-nosvg распознает только их)
4) Скрипты поддерживают ES6-module imports
5) Существует отдельная папка utilsScripts, в которой находятся все скрипты-помощники.
К примеру, по умолчанию там лежит скрипт checkSupportedWebp, который говорит, поддерживает браузер формат .webp изображений или нет.
Если да, то к тегу body добавляется класс "webp", а если нет, то "no-webp".
Благодаря этим классам css понимает, подключать .webp формат изображений или более традиционный
6) Реализован функционал автоматического деплоя на удаленный сервер.
Для этого следует создать .env файл в корневой папке проекта.
Примером должен послужить файл .env.template, в котором описано, чем являются переменные окружения

###По мере улучшения конфигурации и добавления новых скриптов-помощников, добавляйте их в шаблон Gulp-конфигурации, а также актуализируйте документацию