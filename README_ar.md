# <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" /> مشروع Trybe Smith <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ar.md)

![معاينة التطبيق](./assets/trybeSmith.png)

<details>
  <summary><h2>📜 الوصف</h2></summary>

  هذا مشروع تقييم تم تطويره في وحدة BackEnd من دورة تطوير الويب في Trybe. استخدم المشروع **Typescript** و **Sequelize** و **JWT**. خلال التطوير، تم تعزيز مجموعة من المهارات:

  - معالجة الاختبارات
  - استخدام بنية MSC (النموذج-الخدمة-المراقب)
  - إنشاء مسارات لإنشاء، قراءة وتحديث المعلومات
  - مصادقة المسارات

  يتضمن هذا المشروع إنشاء متجر لبيع العناصر المتوسطة باستخدام **Typescript** و **Sequelize**. كان التركيز الرئيسي على تطوير طبقات **Service** و **Controllers**.

</details>

<details>
  <summary><h2>🛠️ التقنيات المستخدمة</h2></summary>

  - **Node.js**
  - **Express**
  - **Typescript**
  - **Sequelize**
  - **MySQL**
  - **JWT (JSON Web Token)**
  - **Docker و Docker Compose**

</details>

<details>
  <summary><h2>📂 هيكل المشروع</h2></summary>

  تم هيكلة المشروع وفقًا لبنية MSC، حيث يتم فصل المسؤوليات بين النموذج والخدمة والمراقب. وفيما يلي بعض المسارات الرئيسية التي تم تنفيذها:

  ### المسارات

  - **POST /login**: تسجيل دخول المستخدم.
  - **POST /products**: إضافة منتج جديد (التحقق من الاسم والسعر).
  - **GET /products**: إرجاع جميع المنتجات المسجلة.
  - **GET /orders**: إرجاع جميع الطلبات المسجلة.
  - **POST /orders**: إنشاء طلب جديد (التحقق من JWT، ID المستخدم و ID المنتج).

  ### البرمجيات الوسيطة

  يستخدم المشروع العديد من البرمجيات الوسيطة للتحقق، بما في ذلك:

  - `validateProducts`: التحقق من بيانات المنتج (الاسم والسعر).
  - `validateUser`: التحقق من بيانات المستخدم.
  - `validateProductById`: التحقق من وجود المنتج باستخدام ID.
  - `validateJWT`: التحقق من رمز JWT لمصادقة الدخول.

</details>

<details>
  <summary><h2>🚀 تشغيل المشروع</h2></summary>

  لتشغيل المشروع، يرجى اتباع الخطوات التالية:

  ### المتطلبات المسبقة

  - تثبيت **Docker** و **Docker Compose**.
  - تثبيت **Node.js** (اختياري، إذا كنت ترغب في التشغيل محليًا بدون Docker).

  ### خطوات التشغيل

  1. استنساخ المستودع:
     ```bash
     git clone https://github.com/seu_usuario/trybe-smith.git
     cd trybe-smith
     ```

  2. إنشاء ملف `.env` في جذر المشروع مع المتغيرات البيئية التالية:
     ```plaintext
     DB_USER=root
     DB_PASSWORD=password
     DB_HOST=db
     DB_PORT=3306
     DB_NAME=Trybesmith
     JWT_SECRET=secret
     ```

  3. تشغيل Docker Compose لبناء وبدء الحاويات:
     ```bash
     docker-compose up --build
     ```

  4. الوصول إلى واجهة برمجة التطبيقات في المتصفح أو أداة API (مثل Postman) على `http://localhost:3001`.

</details>

<details>
  <summary><h2>🔗 المشاريع الأخرى</h2></summary>

  - ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ar.md)
  - 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ar.md)
  - 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ar.md)

</details>
