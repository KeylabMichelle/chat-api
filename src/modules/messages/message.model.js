const Model = require('../../core/model');

class Message extends Model {
    constructor() {
        super('messages');
    }

    /* Create Message */
    createMessage(data) { 
        return new Promise((resolve, reject) => {
                this.collection.insertOne({
                    CreatedByEmail: data.CreatedByEmail,
                    ChannelID: data.ChannelID,
                    Message: data.Message,
                    Date: data.Date
                }).then(result => resolve (result)).catch(error => reject(error));
            }
        );
    }

     /* Delete Message*/
     deleteByID(id) {
        return new Promise((resolve, reject) => {
            this.collection.deleteOne({ id }).then(result => {
                //console.log(result)

                if(!result) {
                    reject(new Error('Message not found'));
                }
                resolve(result);
            })               
        })
    }
}

module.exports = Message;