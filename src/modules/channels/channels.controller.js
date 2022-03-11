const Channel = require("./channel.model");
const User = require("../users/user.model");


const ChannelsController = {
    getAll: (req, res) => {
        const channel = new Channel();
        channel.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const channel = new Channel();
        channel.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        const channel = new Channel();
        channel.createChannel(req.body).then(result => { //No es un query, necesitas body
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        })
    },

    delete: (req, res) => {
        const channel = new Channel();
        channel.deleteByID(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },

    createInvitationLink: (req, res) => {
        const channel = new Channel();
        channel.createInvitation(req.body.id, req.body.ChannelOwnerID ).then(result => {
            if(!result) {
                res.sendStatus(404);
            } else {
                res.send(result);
            }
        })
    }

   
}

module.exports = ChannelsController;