const User = require("./user.model");
const Channel = require("../channels/channel.model");



const UsersController = {
    getAll: (req, res) => {
        const user = new User();
        user.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const user = new User();
        user.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        const user = new User();
        user.createUser(req.body).then(result => { 
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        })
    },

    delete: (req, res) => {
        const user = new User();
        user.deleteByID(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },

    findUser: (req,res) => {
        const user = new User();
        user.findByEmail(req.body.email).then(result => { 
            if(result) {
                res.send(result).status(201);
            } else {
                res.sendStatus(404);
            }
        }).catch(Error => {
            console.log(Error)
            return res.send(Error);
        })
    }

    
    
}

module.exports = UsersController;