const { ObjectId } = require('mongodb');
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
    createInvitation(id,ChannelOwner) {
        return new Promise((resolve, reject) => {
            this.collection.findOne({ _id:ObjectId(id), ChannelOwnerID: ChannelOwner}).then(result => {
                if(!result) {
                    reject(new Error('Owner or Channel incorrect'));
                } else {
                    this.collection.updateOne({_id:ObjectId(id)},{ $set: {"Link" : `http://localhost:3001/api/users/invitation/${id}/<insertUserEmail>`  } }).then(result2 => {
                        if(!result2) {
                            reject(new Error('Channel incorrect'));
                        } else {
                            resolve(result2);
                        }
                        
                    })   
                }
                
            })               
            
        })
    }


    /* Join Channel */
    joinChannel(channel) {
        return new Promise((resolve, reject) => {

            const channelID = channel._id.toString();
            console.log(channelID)
            console.log(channel)
            const memb = channel.Members;

            this.collection.findOne({ _id:ObjectId(channelID)}).then(result => {
                if(!result) {
                    reject(new Error('Channel incorrect'));
                } else {
                    this.collection.updateOne({_id:ObjectId(channelID)},{$set:{Members: memb}}  ).then(result2 => {
                        if(!result2) {
                            reject(new Error('Channel incorrect'));
                        } else {
                            resolve(result2);
                        }
                        
                    })     
                }
                
            })  

             
        })

    }


    /* Add msg */
    addMessages(channel) {
        return new Promise((resolve, reject) => {

            const channelID = channel._id.toString();
            console.log(channelID)
            console.log(channel)
            const msg = channel.Messages;

            this.collection.findOne({ _id:ObjectId(channelID)}).then(result => {
                if(!result) {
                    reject(new Error('Channel incorrect'));
                } else {
                    this.collection.updateOne({_id:ObjectId(channelID)},{$set:{Messages: msg}}  ).then(result2 => {
                        if(!result2) {
                            reject(new Error('Channel incorrect'));
                        } else {
                            resolve(result2);
                        }
                        
                    })     
                }
                
            })  

             
        })

    }


}

module.exports = Channel;