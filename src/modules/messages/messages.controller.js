const Message = require("./message.model");

const MessagesController = {
    getAll: (req, res) => {
        const message = new Message();
        message.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const message = new Message();
        message.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        const message = new Message();
        message.createMessage(req.body).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        })
    },

    delete: (req, res) => {
        const message = new Message();
        message.deleteByID(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    }
}

module.exports = MessagesController;