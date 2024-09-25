# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> Проект Trybe Smith <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ar.md)

![Предварительный просмотр приложения](./assets/trybeSmith.png)

## Описание

Это оценочный проект, разработанный в модуле BackEnd курса веб-разработки Trybe. Проект включает использование **Typescript**, **Sequelize** и **JWT**. В ходе разработки были улучшены различные навыки:

- Работа с тестами
- Использование архитектуры MSC (Модель-Сервис-Контроллер)
- Создание маршрутов для создания, чтения и обновления информации
- Аутентификация маршрутов

Этот проект состоит в создании магазина средневековых предметов с использованием **Typescript** и **Sequelize**. Основное внимание уделялось разработке слоев **Service** и **Controllers**.

## Используемые технологии

- **Node.js**
- **Express**
- **Typescript**
- **Sequelize**
- **MySQL**
- **JWT (JSON Web Token)**
- **Docker и Docker Compose**

## Структура проекта

Проект структурирован в соответствии с архитектурой MSC, где ответственности разделены между Model, Service и Controller. Ниже приведены некоторые из основных реализованных маршрутов:

### Маршруты

- **POST /login**: Выполняет вход пользователя.
- **POST /products**: Добавляет новый продукт (валидирует имя и цену).
- **GET /products**: Возвращает все зарегистрированные продукты.
- **GET /orders**: Возвращает все зарегистрированные заказы.
- **POST /orders**: Создает новый заказ (валидирует JWT, ID пользователя и ID продукта).

### Middleware

Проект использует различные middleware для валидации, включая:

- `validateProducts`: Валидация данных продукта (имя и цена).
- `validateUser`: Валидация данных пользователя.
- `validateProductById`: Валидация существования продукта по ID.
- `validateJWT`: Валидация JWT токена для аутентификации.

## Запуск проекта

Для запуска проекта выполните следующие шаги:

### Предварительные требования

- Установите **Docker** и **Docker Compose**.
- Установите **Node.js** (опционально, если хотите запустить локально без Docker).

### Шаги для выполнения

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/SamuelRocha91/TrybeSmith.git
   cd TrybeSmith
   ```

2. Создайте файл `.env` в корне проекта со следующими переменными окружения:
   ```plaintext
   DB_USER=root
   DB_PASSWORD=password
   DB_HOST=db
   DB_PORT=3306
   DB_NAME=Trybesmith
   JWT_SECRET=secret
   ```

3. Запустите Docker Compose для сборки и запуска контейнеров:
   ```bash
   docker-compose up --build
   ```

4. Доступ к API через браузер или инструмент API (например, Postman) по адресу `http://localhost:3001`.

## Другие проекты

- ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ru.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ru.md)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ru.md)
- 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ru.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_ru.md)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ru.md)
- 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ru.md)
- 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ru.md)
