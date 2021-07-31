const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

const { String, ObjectId } = Schema.Types;

const characterSchema = new Schema({

    name: {
        type: String,
        required: true,
    },

    owner: {
        type: ObjectId,
        required: true,
        ref: "User"
    },

    color: {
        type: String
    }

});

module.exports = new Model('Character', characterSchema);