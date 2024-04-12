const express = require('express');
const router = express.Router();
const membershipController = require('../controllers/membershipController');
const validateCreateMembership = require('../middlewares/validateCreateMembership');
const validateUpdateMembership = require('../middlewares/validateUpdateMembership');

/**
 * @swagger
 * components:
 *   schemas:
 *     Membership:
 *       type: object
 *       properties:
 *         customerId:
 *           type: string
 *           description: ID del cliente asociado a la membresía
 *         type:
 *           type: string
 *           enum: ['GOLD', 'PLUS', 'CLASSIC']
 *           description: Tipo de membresía
 *         creationDate:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación de la membresía
 *         beginDate:
 *           type: string
 *           format: date-time
 *           description: Fecha de inicio de vigencia de la membresía
 *         endDate:
 *           type: string
 *           format: date-time
 *           description: Fecha de fin de vigencia de la membresía
 *     NewMembership:
 *       type: object
 *       properties:
 *         customerId:
 *           type: string
 *           description: ID del cliente asociado a la membresía
 *         type:
 *           type: string
 *           enum: ['GOLD', 'PLUS', 'CLASSIC']
 *           description: Tipo de membresía
 *       required:
 *         - customerId
 *         - type
 *     UpdateMembership:
 *       type: object
 *       properties:
 *         customerId:
 *           type: string
 *           description: Nuevo ID del cliente asociado a la membresía
 *         type:
 *           type: string
 *           enum: ['GOLD', 'PLUS', 'CLASSIC']
 *           description: Nuevo tipo de membresía
 */

/**
 * @swagger
 * /memberships:
 *   get:
 *     tags:
 *       - Memberships
 *     summary: Obtiene todas las membresías
 *     description: Endpoint para obtener todas las membresías.
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Membership'
 */
router.get('/', membershipController.getMemberships);

/**
 * @swagger
 * /memberships/{membershipId}:
 *   get:
 *     tags:
 *       - Memberships
 *     summary: Obtiene una membresía
 *     description: Endpoint para obtener una membresía.
 *     parameters:
 *       - in: path
 *         name: membershipId
 *         required: true
 *         description: ID de la membresía
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Membership'
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
router.get('/:id', membershipController.getMembership);

/**
 * @swagger
 * /memberships:
 *   post:
 *     tags:
 *       - Memberships
 *     summary: Crea una nueva membresía
 *     description: Endpoint para crear una nueva membresía.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewMembership'
 *     responses:
 *       201:
 *         description: Membresía creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Membership'
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
router.post('/', validateCreateMembership, membershipController.createMembership);

/**
 * @swagger
 * /memberships/{membershipId}:
 *   put:
 *     tags:
 *       - Memberships
 *     summary: Actualiza una membresía existente
 *     description: Endpoint para actualizar una membresía existente.
 *     parameters:
 *       - in: path
 *         name: membershipId
 *         required: true
 *         description: ID de la membresía
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateMembership'
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', validateUpdateMembership, membershipController.updateMembership);

/**
 * @swagger
 * /memberships/{membershipId}:
 *   delete:
 *     tags:
 *       - Memberships
 *     summary: Elimina una membresía existente
 *     description: Endpoint para eliminar una membresía existente.
 *     parameters:
 *       - in: path
 *         name: membershipId
 *         required: true
 *         description: ID de la membresía
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
router.delete('/:id', membershipController.deleteMembership);

module.exports = router;
