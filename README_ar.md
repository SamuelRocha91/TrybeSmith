# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> Trybe Smith Project <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ar.md)

![Application Preview](./assets/trybeSmith.png)

## Description

This is an evaluative project developed in the BackEnd module of the Web Development course at Trybe. The project involved the use of **Typescript**, **Sequelize**, and **JWT**. Throughout the development, various skills were enhanced:

- Test manipulation
- Use of the MSC (Model-Service-Controller) architecture
- Creation of routes for creating, reading, and updating information
- Route authentication

This project consists of creating a store for medieval items using **Typescript** and **Sequelize**. The main focus was on developing the **Service** and **Controllers** layers.

## Technologies Used

- **Node.js**
- **Express**
- **Typescript**
- **Sequelize**
- **MySQL**
- **JWT (JSON Web Token)**
- **Docker and Docker Compose**

## Project Structure

The project is structured according to the MSC architecture, where responsibilities are separated between Model, Service, and Controller. Below are some of the main implemented routes:

### Routes

- **POST /login**: Performs user login.
- **POST /products**: Adds a new product (validates name and price).
- **GET /products**: Returns all registered products.
- **GET /orders**: Returns all registered orders.
- **POST /orders**: Creates a new order (validates JWT, user ID, and product ID).

### Middlewares

The project utilizes various middlewares for validation, including:

- `validateProducts`: Validates product data (name and price).
- `validateUser`: Validates user data.
- `validateProductById`: Validates the existence of the product by ID.
- `validateJWT`: Validates the JWT token for authentication.

## Running the Project

To run the project, follow the steps below:

### Prerequisites

- Have **Docker** and **Docker Compose** installed.
- Have **Node.js** installed (optional if you want to run locally without Docker).

### Steps to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/SamuelRocha91/TrybeSmith.git
   cd TrybeSmith
   ```

2. Create a `.env` file at the root of the project with the following environment variables:
   ```plaintext
   DB_USER=root
   DB_PASSWORD=password
   DB_HOST=db
   DB_PORT=3306
   DB_NAME=Trybesmith
   JWT_SECRET=secret
   ```

3. Run Docker Compose to build and start the containers:
   ```bash
   docker-compose up --build
   ```

4. Access the API in your browser or API tool (like Postman) at `http://localhost:3001`.

## Other Projects

- ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_en.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_en.md)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_en.md)
- 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_en.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_en.md)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_en.md)
- 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_en.md)
- 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_en.md)
