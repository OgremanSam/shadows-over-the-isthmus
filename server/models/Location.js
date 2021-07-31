const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

const { String } = Schema.Types;

const locationSchema = new Schema({

    name: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        default: "streetlight",
        required: true
    }

});

module.exports = new Model('Location', locationSchema);