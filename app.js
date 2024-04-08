var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const customerRoutes = require('./routes/customerRoutes');
const membershipRoutes = require('./routes/membershipRoutes');

var app = express();
app.use(bodyParser.json());

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gestión de Clientes y Membresías con Node.js y Express',
      version: '1.0.0',
      description: 'Esta documentación proporciona información detallada sobre los servicios y recursos disponibles en la API de gestión de clientes y membresías. La API permite a los usuarios realizar operaciones CRUD (crear, leer, actualizar y eliminar) en clientes y membresías, así como gestionar sus relaciones.',
    },
    servers: [
      { url: '/api/' }
    ],
    tags: [
      {
        name: 'Customers',
        description: 'Operaciones relacionadas con los clientes',
      },
      {
        name: 'Memberships',
        description: 'Operaciones relacionadas con las membresías',
      }
    ]
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/api-docs-json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(specs);
});

mongoose.connect('mongodb://127.0.0.1:27017/clientes_membresias_db', { auth: { username: "admin", password: "1234" } })
  .then(() => console.log('Conexión a MongoDB establecida'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/api/customers', customerRoutes);
app.use('/api/memberships', membershipRoutes);

module.exports = app;
