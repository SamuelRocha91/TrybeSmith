# <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" /> Trybe Smith 项目 <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ar.md)

![应用预览](./assets/trybeSmith.png)

<details>
  <summary><h2>📜 描述</h2></summary>

  这是一个在 Trybe 网络开发课程的后端模块中开发的评估项目。该项目使用了 **Typescript**、**Sequelize** 和 **JWT**。在开发过程中提升了多项技能：

  - 测试处理
  - 使用 MSC (模型-服务-控制器) 架构
  - 创建用于创建、读取和更新信息的路由
  - 路由认证

  本项目涉及创建一个中世纪物品商店，使用 **Typescript** 和 **Sequelize**。主要集中在 **Service** 和 **Controllers** 层的开发上。

</details>

<details>
  <summary><h2>🛠️ 使用的技术</h2></summary>

  - **Node.js**
  - **Express**
  - **Typescript**
  - **Sequelize**
  - **MySQL**
  - **JWT (JSON Web Token)**
  - **Docker 和 Docker Compose**

</details>

<details>
  <summary><h2>📂 项目结构</h2></summary>

  项目根据 MSC 架构进行结构设计，其中模型、服务和控制器之间的责任被分开。以下是一些主要实现的路由：

  ### 路由

  - **POST /login**: 用户登录。
  - **POST /products**: 添加新产品（验证名称和价格）。
  - **GET /products**: 返回所有已注册的产品。
  - **GET /orders**: 返回所有已注册的订单。
  - **POST /orders**: 创建新订单（验证 JWT、用户 ID 和产品 ID）。

  ### 中间件

  项目使用多个中间件进行验证，包括：

  - `validateProducts`: 验证产品数据（名称和价格）。
  - `validateUser`: 验证用户数据。
  - `validateProductById`: 根据 ID 验证产品是否存在。
  - `validateJWT`: 验证 JWT 令牌进行身份验证。

</details>

<details>
  <summary><h2>🚀 运行项目</h2></summary>

  要运行项目，请按照以下步骤操作：

  ### 先决条件

  - 安装 **Docker** 和 **Docker Compose**。
  - 安装 **Node.js**（可选，如果您希望在不使用 Docker 的情况下本地运行）。

  ### 运行步骤

  1. 克隆仓库：
     ```bash
     git clone https://github.com/seu_usuario/trybe-smith.git
     cd trybe-smith
     ```

  2. 在项目根目录下创建一个 `.env` 文件，内容如下：
     ```plaintext
     DB_USER=root
     DB_PASSWORD=password
     DB_HOST=db
     DB_PORT=3306
     DB_NAME=Trybesmith
     JWT_SECRET=secret
     ```

  3. 运行 Docker Compose 构建并启动容器：
     ```bash
     docker-compose up --build
     ```

  4. 在浏览器或 API 工具（如 Postman）中访问 API，地址为 `http://localhost:3001`。

</details>

<details>
  <summary><h2>🔗 其他项目</h2></summary>

  - ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ch.md)
  - 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ch.md)
  - 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ch.md)

</details>
