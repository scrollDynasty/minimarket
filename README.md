# Mini Marketplace

Интернет-магазин с каталогом товаров и корзиной.

Дизайн: [Figma](https://www.figma.com/design/boeewfAVOnkjpbEjKoxwsg/mini-Marketplace?node-id=4-91&t=ZOkjmC6Q8EAmYTfc-0)

## Запуск

```bash
npm install
npm run dev
```

## Технологии

- React + Vite
- Vanilla JS для каталога
- CSS без библиотек
- API: https://fakestoreapi.com/products

## Функционал

- Просмотр товаров из API
- Добавление в корзину
- Изменение количества
- Удаление из корзины
- Сохранение в localStorage

## Скриншоты

![Desktop](demo/demo1.png)
![Mobile](demo/demo2.png)

## Время выполнения

Около 6-8 часов

## Что было сложным

Связывание Vanilla JS каталога с React корзиной через Custom Events. Адаптивность корзины - на desktop sticky, на mobile обычный блок.

## Как опубликовать на GitHub

1. Создай новый репозиторий на GitHub с именем `mini-marketplace`
2. Выполни в терминале:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/твой-username/mini-marketplace.git
git push -u origin main
```

3. Отправь ссылку: `https://github.com/твой-username/mini-marketplace`
