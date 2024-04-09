# API de Gestión de Clientes y Membresías

![Screenshot](/images/Screenshot.png)

## Descripción general:
- Este proyecto consiste en una API desarrollada con Node.js y Express para gestionar clientes y membresías. Proporciona endpoints para realizar operaciones CRUD en clientes y membresías, así como consultas adicionales para listar clientes con sus respectivas membresías.

## Características principales:
- Implementación de una API RESTful con Node.js y Express.
- Manejo de entidades de Clientes y Membresías con Mongoose.
- Endpoints para realizar operaciones CRUD en Clientes y Membresías.
- Consulta personalizada para listar clientes con sus respectivas membresías.
- Validación de solicitudes utilizando Joi en las rutas.
- Dockerización de la base de datos MongoDB para facilitar el despliegue y la gestión del entorno de desarrollo.
- Dockerización del servidor Node.js para facilitar el despliegue y la gestión de la aplicación.
- Autodocumentación de la API con Swagger.

## Tecnologías utilizadas:
- [Node.js](https://nodejs.org/) - Entorno de ejecución de JavaScript.
- [Express](https://expressjs.com/) - Framework de Node.js para construir aplicaciones web y APIs.
- [MongoDB](https://www.mongodb.com/) - Base de datos NoSQL utilizada para almacenar los datos de clientes y membresías.
- [Mongoose](https://www.mongodb.com/) - ODM (Object Data Modeling) para MongoDB en Node.js.
- [Docker](https://www.docker.com/) - Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.
- [Joi](https://github.com/hapijs/joi) - Biblioteca de validación de datos para Node.js.
- [Swagger](https://swagger.io/) - Herramienta para documentar APIs RESTful.

## Requisitos:
- Node.js y npm instalados en el sistema.
- MongoDB instalado y en ejecución en el sistema.
- Docker instalado en el sistema (opcional, solo si deseas utilizar la dockerización).

## Documentación:
- Puedes acceder a la documentación de la API en [http://localhost:3000/api-docs](http://localhost:3000/api-docs) una vez que la aplicación esté en ejecución.

## Importación en Postman:
- Abre Postman.
- Ve a la pestaña "Import" en la esquina superior izquierda.
- Selecciona la opción "Import File".
- Busca y selecciona el archivo de especificación de OpenAPI descargado.
- Postman importará automáticamente la especificación y generará una nueva colección con todas las solicitudes y rutas definidas.
- [Descargar la colección de Postman](openapi-postman-collection/openapi-postman-collection.json)

## Autor:
- [Humberto Fernández (Github)](https://github.com/hfernandezdev)

## Soporte:

Si tienes algún problema o pregunta, por favor [contacta conmigo](mailto:humbertof44@gmail.com).
