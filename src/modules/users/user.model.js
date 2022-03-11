/* 
* El modelo es una clase que te deja manipular los datos de la base de datos 
*/

const Model = require('../../core/model');

class User extends Model {
    constructor() {
        super('users');
    }

    /* Sign up */
    createUser(data) { 
        return new Promise((resolve, reject) => {
                this.collection.insertOne({
                    email: data.email,
                    password: data.password
                }).then(result => resolve (result)).catch(error => reject(error));
            }
        );
    }

    /* For log in */
    findByEmail(email) {
        return new Promise((resolve, reject) => {
            this.collection.findOne({ email }).then(result => {
                //console.log(result)

                if(!result) {
                    reject(new Error('User not found'));
                }
                resolve(result);
            })               
        })
    }

    /* delete */
    deleteByID(id) {
        return new Promise((resolve, reject) => {
            this.collection.deleteOne({ id }).then(result => {
                //console.log(result)

                if(!result) {
                    reject(new Error('User not found'));
                }
                resolve(result);
            })               
        })
    }

}

module.exports = User;