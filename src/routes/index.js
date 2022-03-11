const router = require('express').Router();

const userRoutes = require('./../modules/users/user.routes');
const channelRoutes = require('./../modules/channels/channel.routes');
const messageRoutes = require('./../modules/messages/message.routes');

/* Cada módulo tiene sus propias rutas */

//Configuración de rutas para cada modulo
//Siempre que se crea un módulo se tiene que crear su ruta 

router.use('/users', userRoutes);
router.use('/channels', channelRoutes);
router.use('/messages', messageRoutes);

module.exports = router;