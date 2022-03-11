const router = require('express').Router();
const controller = require('./messages.controller');

/**
 * @swagger
 *   /api/messages:
 *     get:
 *       tags:
 *       - Messages
 *       description: Get all messages
 *       responses:
 *         200:
 *           description: Array with a list of messages
 */
 router.get('/', controller.getAll);

 /**
  * @swagger
  *   /api/messages/{id}:
  *     get:
  *       tags:
  *       - Messages
  *       description: Get one message by ID
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The message's unique ID
  *       responses:
  *         200:
  *           description: An object with a single message's data
  */
 router.get('/:id', controller.getOne);
 

 /**
 * @swagger
 *   /api/messages/newMessage:
 *     post:
 *       tags:
 *       - Messages
 *       description: Creates new message
 *       parameters:
 *         - in: body
 *           name: message
 *           schema:
 *             type: object
 *             properties:
 *               CreatedByEmail:
 *                type: string
 *               ChannelID:
 *                type: string
 *               Message:
 *                type: string
 *               Date:
 *                type: string
 *       responses:
 *         200:
 *           description: An object with a single message's data
 */
  router.post('/newMessage', controller.create);

  /**
   * @swagger
   *   /api/messages/delete:
   *     delete:
   *       tags:
   *       - Messages
   *       description: Deletes message by ID
   *       parameters:
   *         - in: body
   *           name: message
   *           schema:
   *             type: object
   *             properties:
   *               _id:
   *                type: string
   *       responses:
   *         200:
   *           description: An object with a single message's data
   */
   router.delete('/delete', controller.delete);
   
 module.exports = router;
