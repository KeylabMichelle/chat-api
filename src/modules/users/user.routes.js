const router = require('express').Router();
const controller = require('./users.controller');

/**
 * @swagger
 *   /api/users:
 *     get:
 *       tags:
 *       - Users
 *       description: Get all users
 *       responses:
 *         200:
 *           description: Array with a list of users
 */
router.get('/', controller.getAll);

/**
 * @swagger
 *   /api/users/{id}:
 *     get:
 *       tags:
 *       - Users
 *       description: Get one user by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The user's unique ID
 *       responses:
 *         200:
 *           description: An object with a single user's data
 */
router.get('/:id', controller.getOne);

/**
 * @swagger
 *   /api/users/signup:
 *     post:
 *       tags:
 *       - Users
 *       description: Create a new user by Email & Password
 *       parameters:
 *         - in: body
 *           name: user
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                type: string
 *               password:
 *                type: string
 *       responses:
 *         200:
 *           description: An object with a single user's data
 */
 router.post('/signup', controller.create);

/**
 * @swagger
 *   /api/users/delete:
 *     delete:
 *       tags:
 *       - Users
 *       description: Deletes user by ID
 *       parameters:
 *         - in: body
 *           name: user
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                type: string
 *       responses:
 *         200:
 *           description: An object with a single user's data
 */
 router.delete('/delete', controller.delete);
 
/**
 * @swagger
 *   /api/users/login:
 *     post:
 *       tags:
 *       - Users
 *       description: Logs user, finds by email
 *       parameters:
 *         - in: body
 *           name: user
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                type: string
 *               password:
 *                type: string
 *       responses:
 *         200:
 *           description: An object with a single user's data
 */
 router.post('/login', controller.findUser);






module.exports = router;

