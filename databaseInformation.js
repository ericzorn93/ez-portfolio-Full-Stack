// Imports
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const gameSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    year: {type: Number, required: true},
}, {collection: 'games'});

gameSchema.plugin(uniqueValidator);

const orderSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    description: {type: String, required: true},
    item: {type: String, required: true},
    numberOfItems: {type: Number, required: true},
}, {collection: 'orders'});

orderSchema.plugin(uniqueValidator);


// Exported Information
module.exports = {
    models: {
        gameModel: mongoose.model('Game', gameSchema),
        orderModel: mongoose.model('Order', orderSchema)
    }
};

