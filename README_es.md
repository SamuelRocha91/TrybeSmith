
# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> Proyecto Trybe Smith <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ar.md)

![Vista previa de la aplicación](./assets/trybeSmith.png)

## Descripción

Este es un proyecto evaluativo desarrollado en el módulo de BackEnd del curso de Desarrollo Web de Trybe. El proyecto involucró el uso de **Typescript**, **Sequelize** y **JWT**. A lo largo del desarrollo, se mejoraron diversas habilidades:

- Manipulación de pruebas
- Uso de la arquitectura MSC (Modelo-Servicio-Controlador)
- Creación de rutas para crear, leer y actualizar información
- Autenticación de rutas

Este proyecto consiste en crear una tienda de artículos medievales utilizando **Typescript** y **Sequelize**. El enfoque principal fue en el desarrollo de las capas de **Service** y **Controllers**.

## Tecnologías Utilizadas

- **Node.js**
- **Express**
- **Typescript**
- **Sequelize**
- **MySQL**
- **JWT (JSON Web Token)**
- **Docker y Docker Compose**

## Estructura del Proyecto

El proyecto está estructurado de acuerdo con la arquitectura MSC, donde las responsabilidades están separadas entre Model, Service y Controller. A continuación, se presentan algunas de las principales rutas implementadas:

### Rutas

- **POST /login**: Realiza el inicio de sesión del usuario.
- **POST /products**: Agrega un nuevo producto (valida nombre y precio).
- **GET /products**: Devuelve todos los productos registrados.
- **GET /orders**: Devuelve todos los pedidos registrados.
- **POST /orders**: Crea un nuevo pedido (valida JWT, ID de usuario e ID de producto).

### Middlewares

El proyecto utiliza diversos middlewares para la validación, incluyendo:

- `validateProducts`: Valida los datos del producto (nombre y precio).
- `validateUser`: Valida los datos del usuario.
- `validateProductById`: Valida la existencia del producto por ID.
- `validateJWT`: Valida el token JWT para la autenticación.

## Ejecución del Proyecto

Para ejecutar el proyecto, sigue los pasos a continuación:

### Requisitos Previos

- Tener **Docker** y **Docker Compose** instalados.
- Tener **Node.js** instalado (opcional si deseas ejecutar localmente sin Docker).

### Pasos para Ejecutar

1. Clona el repositorio:
   ```bash
   git clone https://github.com/SamuelRocha91/TrybeSmith.git
   cd TrybeSmith
   ```

2. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:
   ```plaintext
   DB_USER=root
   DB_PASSWORD=password
   DB_HOST=db
   DB_PORT=3306
   DB_NAME=Trybesmith
   JWT_SECRET=secret
   ```

3. Ejecuta Docker Compose para construir e iniciar los contenedores:
   ```bash
   docker-compose up --build
   ```

4. Accede a la API en tu navegador o herramienta de API (como Postman) en `http://localhost:3001`.

## Otros Proyectos

- ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_es.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_es.md)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_es.md)
- 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_es.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_es.md)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_es.md)
- 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_es.md)
- 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_es.md)
