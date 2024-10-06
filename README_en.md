# <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" /> Trybe Smith Project <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ar.md)

![Application Preview](./assets/trybeSmith.png)

<details>
  <summary><h2>📜 Description</h2></summary>

  This is an evaluative project developed in the BackEnd module of the Web Development course at Trybe. The project involved the use of **Typescript**, **Sequelize**, and **JWT**. Throughout the development, various skills were enhanced:

  - Handling tests
  - Using the MSC (Model-Service-Controller) architecture
  - Creating routes for creating, reading, and updating information
  - Route authentication

  This project consisted of creating a store for medieval items using **Typescript** and **Sequelize**. The main focus was on developing the **Service** and **Controllers** layers.

</details>

<details>
  <summary><h2>🛠️ Technologies Used</h2></summary>

  - **Node.js**
  - **Express**
  - **Typescript**
  - **Sequelize**
  - **MySQL**
  - **JWT (JSON Web Token)**
  - **Docker and Docker Compose**

</details>

<details>
  <summary><h2>📂 Project Structure</h2></summary>

  The project is structured according to the MSC architecture, where responsibilities are separated among Model, Service, and Controller. Below are some of the main routes implemented:

  ### Routes

  - **POST /login**: Logs in the user.
  - **POST /products**: Adds a new product (validates name and price).
  - **GET /products**: Returns all registered products.
  - **GET /orders**: Returns all registered orders.
  - **POST /orders**: Creates a new order (validates JWT, user ID, and product ID).

  ### Middlewares

  The project uses several middlewares for validation, including:

  - `validateProducts`: Validates product data (name and price).
  - `validateUser`: Validates user data.
  - `validateProductById`: Validates the existence of the product by ID.
  - `validateJWT`: Validates the JWT token for authentication.

</details>

<details>
  <summary><h2>🚀 Running the Project</h2></summary>

  To run the project, follow the steps below:

  ### Prerequisites

  - Have **Docker** and **Docker Compose** installed.
  - Have **Node.js** installed (optional, if you want to run locally without Docker).

  ### Steps to Run

  1. Clone the repository:
     ```bash
     git clone https://github.com/seu_usuario/trybe-smith.git
     cd trybe-smith
     ```

  2. Create a `.env` file in the root of the project with the following environment variables:
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

</details>

<details>
  <summary><h2>🔗 Other Projects</h2></summary>

  - ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_en.md)
  - 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_en.md)
  - 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_en.md)

</details>
