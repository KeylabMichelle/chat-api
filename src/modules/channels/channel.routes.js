const router = require('express').Router();
const controller = require('./channels.controller');

/**
 * @swagger
 *   /api/channels:
 *     get:
 *       tags:
 *       - Channels
 *       description: Get all channels
 *       responses:
 *         200:
 *           description: Array with a list of channels
 */
 router.get('/', controller.getAll);

 /**
  * @swagger
  *   /api/channels/{id}:
  *     get:
  *       tags:
  *       - Channels
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
 *   /api/channels/newChannel:
 *     post:
 *       tags:
 *       - Channels
 *       description: Creates new channel with owner
 *       parameters:
 *         - in: body
 *           name: user
 *           schema:
 *             type: object
 *             properties:
 *               ChannelName:
 *                type: string
 *               ChannelOwnerID:
 *                type: string
 *       responses:
 *         200:
 *           description: An object with a single channel's data
 */
 router.post('/newChannel', controller.create);

/**
 * @swagger
 *   /api/channels/delete:
 *     delete:
 *       tags:
 *       - Channels
 *       description: Deletes channel by ID
 *       parameters:
 *         - in: body
 *           name: channel
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                type: string
 *       responses:
 *         200:
 *           description: An object with a single channel's data
 */
 router.delete('/delete', controller.delete);

 /**
 * @swagger
 *   /api/channels/invitationLink:
 *     put:
 *       tags:
 *       - Channels
 *       description: Creates invitation link if owner 
 *       parameters:
 *         - in: body
 *           name: user
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                type: string
 *               ChannelOwnerID:
 *                type: string
 *       responses:
 *         200:
 *           description: An object with a single channel's data
 */
  router.put('/invitationLink', controller.createInvitationLink);


/**
 * @swagger
 *   /api/channels/invitation/{id}/{userID}:
 *     put:
 *       tags:
 *       - Channels
 *       description: Join new member to channel
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The channel's unique ID
 *         - in: path
 *           name: userID
 *           required: true
 *           description: The user's ID
 *       responses:
 *         200:
 *           description: An object with a single channel's data
 */
 router.put('/invitation/:id/:userID', controller.invite);



/**
 * @swagger
 *   /api/channels/addMessage/{id}/{msgID}:
 *     put:
 *       tags:
 *       - Channels
 *       description: Add message to channel
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The channel's unique ID
 *         - in: path
 *           name: msgID
 *           required: true
 *           description: The message's ID
 *       responses:
 *         200:
 *           description: An object with a single channel's data
 */
 router.put('/addMessage/:id/:msgID', controller.pushMessage);


module.exports = router;

