const Channel = require("./channel.model");
const User = require("../users/user.model");
const Message = require("../messages/message.model");


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
                //console.log(req.body.Link)
                res.sendStatus(404);
            } else {
                res.send(result);
            }
        })
    },

    invite: (req,res) => {
        const { id, userID } = req.params;
        const channel = new Channel();
        let channelTemp = new Channel();
        //const channel = channelTemp.getOne( id );
        channel.getOne(id).then(result => {
            if(result) {
                channelTemp = result;
                channelTemp.Members.push(userID);
                console.log(channel)

                channel.joinChannel(channelTemp).then(result => {
                    if(result) {
                        res.send(result);
                    } else {
                        res.sendStatus(404);
                    }
                })
            } else {
                res.sendStatus(404);
            }
        });

    },


    pushMessage: (req, res) => {
        const { id, msgID } = req.params;
        const channel = new Channel();
        let channelTemp = new Channel();
        //const channel = channelTemp.getOne( id );
        channel.getOne(id).then(result => {
            if(result) {
                channelTemp = result;
                channelTemp.Messages.push(msgID);
                console.log(channel)

                channel.addMessages(channelTemp).then(result => {
                    if(result) {
                        res.send(result);
                    } else {
                        res.sendStatus(404);
                    }
                })
            } else {
                res.sendStatus(404);
            }
        });
    }

   
}

module.exports = ChannelsController;