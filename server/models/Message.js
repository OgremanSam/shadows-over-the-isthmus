const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

const { String, ObjectId } = Schema.Types;

const messageSchema = new Schema({

    description: {
        type: String,
        required: true,
    },

    author: {
        type: ObjectId,
        ref: "User"
    },

    character: {
        type: String,
        default: "Kindred"
    },

    location: {
        type: ObjectId,
        ref: "Location"
    },
    
    color: {
        type: String,
        default: "black"
    }

});

module.exports = new Model('Message', messageSchema);