const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           description: Primer nombre del cliente
 *         lastName:
 *           type: string
 *           description: Apellido del cliente
 *         document:
 *           type: string
 *           description: Número de documento del cliente
 *         phoneNumber:
 *           type: string
 *           description: Número de teléfono del cliente
 *         birthDate:
 *           type: string
 *           format: date
 *           description: Fecha de nacimiento del cliente
 *         memberships:
 *           type: array
 *           items:
 *             type: string
 *             description: ID de la membresía asociada al cliente
 *     CustomerWithMemberships:
 *       allOf:
 *         - $ref: '#/components/schemas/Customer'
 *         - type: object
 *           properties:
 *             memberships:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Membership'
 *     NewCustomer:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           description: Primer nombre del cliente
 *         lastName:
 *           type: string
 *           description: Apellido del cliente
 *         document:
 *           type: string
 *           description: Número de documento del cliente
 *         phoneNumber:
 *           type: string
 *           description: Número de teléfono del cliente
 *         birthDate:
 *           type: string
 *           format: date
 *           description: Fecha de nacimiento del cliente
 *       required:
 *         - firstName
 *         - lastName
 *         - document
 *         - phoneNumber
 *         - birthDate
 *     UpdateCustomer:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           description: Nuevo primer nombre del cliente
 *         lastName:
 *           type: string
 *           description: Nuevo apellido del cliente
 *         document:
 *           type: string
 *           description: Nuevo número de documento del cliente
 *         phoneNumber:
 *           type: string
 *           description: Nuevo número de teléfono del cliente
 *         birthDate:
 *           type: string
 *           format: date
 *           description: Nueva fecha de nacimiento del cliente
 */

/**
 * @swagger
 * /customers/with-memberships:
 *   get:
 *     tags:
 *       - Customers
 *     summary: Obtiene todos los clientes con sus miembresías
 *     description: Endpoint para obtener todos los clientes con sus membresías.
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CustomerWithMemberships'
 */
router.get('/with-memberships', customerController.getCustomersWithMemberships);

/**
 * @swagger
 * /customers:
 *   get:
 *     tags:
 *       - Customers
 *     summary: Obtiene todos los clientes
 *     description: Endpoint para obtener todos los clientes.
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Customer'
 */
router.get('/', customerController.getCustomers);

/**
 * @swagger
 * /customers/{customerId}:
 *   get:
 *     tags:
 *       - Customers
 *     summary: Obtiene todos los clientes
 *     description: Endpoint para obtener todos los clientes.
 *     parameters:
 *       - in: path
 *         name: customerId
 *         required: true
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
router.get('/:id', customerController.getCustomer);

/**
 * @swagger
 * /customers:
 *   post:
 *     tags:
 *       - Customers
 *     summary: Crea un nuevo cliente
 *     description: Endpoint para crear un nuevo cliente.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewCustomer'
 *     responses:
 *       201:
 *         description: Cliente creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */

router.post('/', customerController.createCustomer);

/**
 * @swagger
 * /customers/{customerId}:
 *   put:
 *     tags:
 *       - Customers
 *     summary: Actualiza un cliente por ID
 *     description: Endpoint para actualizar un cliente por su ID.
 *     parameters:
 *       - in: path
 *         name: customerId
 *         required: true
 *         description: ID del cliente
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateCustomer'
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', customerController.updateCustomer);

/**
 * @swagger
 * /customers/{customerId}:
 *   delete:
 *     tags:
 *       - Customers
 *     summary: Elimina un cliente por ID
 *     description: Endpoint para eliminar un cliente por su ID.
 *     parameters:
 *       - in: path
 *         name: customerId
 *         required: true
 *         description: ID del cliente
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
