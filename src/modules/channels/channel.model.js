const Model = require('../../core/model');


/* 
*   Contenido de Channel
*       _ID
*       Nombre 
*       Mensajes
*       Miembros
*       
*       Dueño
*       Link de invitación
*/  


class Channel extends Model {
    constructor() {
        super('channels');
    }

    /* Create Channel */
    createChannel(data) { 
        return new Promise((resolve, reject) => {
                this.collection.insertOne({
                    ChannelName: data.ChannelName,
                    ChannelOwnerID: data.ChannelOwnerID,
                    Members: [],
                    Messages: [],
                    Link: data.Link
                }).then(result => resolve (result)).catch(error => reject(error));
            }
        );
    }




    /* Delete channel*/
    deleteByID(id) {
        return new Promise((resolve, reject) => {
            this.collection.deleteOne({ id }).then(result => {
                //console.log(result)

                if(!result) {
                    reject(new Error('Channel not found'));
                }
                resolve(result);
            })               
        })
    }

    /* Create invitation link */
    /* No me encuentra el canal! */
    createInvitation(id,ChannelOwner) {
        return new Promise((resolve, reject) => {
            const channel = this.collection.findOne({ id , ChannelOwner }).then(result => {
                if(!result) {
                    reject(new Error('Owner or Channel incorrect'));
                } else {
                    resolve(result);
                }
                
            })               

            this.collection.updateOne({_id:id},{ $set: {"Link" : `http://localhost:3001/api/channels/newChannel/${id}`  } }).then(result => {
                if(!result) {
                    reject(new Error('Channel incorrect'));
                } else {
                    resolve(result);
                }
                
            })   
        })
    }
}

module.exports = Channel;