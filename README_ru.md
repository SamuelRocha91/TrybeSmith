# <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" /> Проект Trybe Smith <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ar.md)

![Предварительный просмотр приложения](./assets/trybeSmith.png)

<details>
  <summary><h2>📜 Описание</h2></summary>

  Это оценочный проект, разработанный в модуле BackEnd курса веб-разработки Trybe. Проект включает использование **Typescript**, **Sequelize** и **JWT**. В ходе разработки были улучшены различные навыки:

  - Работа с тестами
  - Использование архитектуры MSC (Модель-Сервис-Контроллер)
  - Создание маршрутов для создания, чтения и обновления информации
  - Аутентификация маршрутов

  Этот проект заключался в создании магазина средневековых предметов с использованием **Typescript** и **Sequelize**. Основное внимание было уделено разработке слоев **Service** и **Controllers**.

</details>

<details>
  <summary><h2>🛠️ Используемые Технологии</h2></summary>

  - **Node.js**
  - **Express**
  - **Typescript**
  - **Sequelize**
  - **MySQL**
  - **JWT (JSON Web Token)**
  - **Docker и Docker Compose**

</details>

<details>
  <summary><h2>📂 Структура Проекта</h2></summary>

  Проект структурирован в соответствии с архитектурой MSC, где ответственность разделена между Моделью, Сервисом и Контроллером. Ниже представлены некоторые из основных реализованных маршрутов:

  ### Маршруты

  - **POST /login**: Выполняет вход пользователя.
  - **POST /products**: Добавляет новый продукт (валидирует имя и цену).
  - **GET /products**: Возвращает все зарегистрированные продукты.
  - **GET /orders**: Возвращает все зарегистрированные заказы.
  - **POST /orders**: Создает новый заказ (валидирует JWT, ID пользователя и ID продукта).

  ### Middleware

  Проект использует несколько middleware для валидации, включая:

  - `validateProducts`: Валидация данных продукта (имя и цена).
  - `validateUser`: Валидация данных пользователя.
  - `validateProductById`: Валидация существования продукта по ID.
  - `validateJWT`: Валидация JWT-токена для аутентификации.

</details>

<details>
  <summary><h2>🚀 Запуск Проекта</h2></summary>

  Чтобы запустить проект, выполните следующие шаги:

  ### Предварительные Требования

  - Установите **Docker** и **Docker Compose**.
  - Установите **Node.js** (необязательно, если вы хотите запускать локально без Docker).

  ### Шаги для Запуска

  1. Клонируйте репозиторий:
     ```bash
     git clone https://github.com/seu_usuario/trybe-smith.git
     cd trybe-smith
     ```

  2. Создайте файл `.env` в корне проекта с следующими переменными окружения:
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

</details>

<details>
  <summary><h2>🔗 Другие Проекты</h2></summary>

  - ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ru.md)
  - 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ru.md)
  - 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ru.md)

</details>
