# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> Projeto Trybe Smith <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />


## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ar.md)

![Preview da aplicação](./assets/trybeSmith.png)

## Descrição

Trata-se de um projeto avaliativo desenvolvido no módulo de BackEnd do curso de Desenvolvimento Web da Trybe. O projeto envolveu o uso de **Typescript**, **Sequelize** e **JWT**. Durante o desenvolvimento, diversas competências foram aprimoradas:

- Manipulação de testes
- Uso da arquitetura MSC (Model-Service-Controller)
- Criação de rotas para criação, leitura e atualização de informações
- Autenticação de rotas

Este projeto consistiu na criação de uma loja de itens medievais utilizando **Typescript** e **Sequelize**. O foco principal foi no desenvolvimento das camadas de **Service** e **Controllers**.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Typescript**
- **Sequelize**
- **MySQL**
- **JWT (JSON Web Token)**
- **Docker e Docker Compose**

## Estrutura do Projeto

O projeto está estruturado de acordo com a arquitetura MSC, onde as responsabilidades são separadas entre Model, Service e Controller. A seguir, estão algumas das principais rotas implementadas:

### Rotas

- **POST /login**: Realiza o login do usuário.
- **POST /products**: Adiciona um novo produto (valida nome e preço).
- **GET /products**: Retorna todos os produtos cadastrados.
- **GET /orders**: Retorna todos os pedidos cadastrados.
- **POST /orders**: Cria um novo pedido (valida JWT, ID do usuário e ID do produto).

### Middlewares

O projeto utiliza diversos middlewares para validação, incluindo:

- `validateProducts`: Valida os dados do produto (nome e preço).
- `validateUser`: Valida os dados do usuário.
- `validateProductById`: Valida a existência do produto pelo ID.
- `validateJWT`: Valida o token JWT para autenticação.

## Execução do Projeto

Para executar o projeto, siga os passos abaixo:

### Pré-requisitos

- Ter o **Docker** e **Docker Compose** instalados.
- Ter o **Node.js** instalado (opcional, se você deseja executar localmente sem Docker).

### Passos para Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu_usuario/trybe-smith.git
   cd trybe-smith
   ```

2. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:
   ```plaintext
   DB_USER=root
   DB_PASSWORD=password
   DB_HOST=db
   DB_PORT=3306
   DB_NAME=Trybesmith
   JWT_SECRET=secret
   ```

3. Execute o Docker Compose para construir e iniciar os containers:
   ```bash
   docker-compose up --build
   ```

4. Acesse a API no seu navegador ou ferramenta de API (como Postman) em `http://localhost:3001`.

## Outros projetos

- ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp)
- 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store)
- 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet)
- 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game)
