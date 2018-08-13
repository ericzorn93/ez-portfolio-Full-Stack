const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    year: Number,
}, {collection: 'games'});

const orderSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    description: String,
    item: String,
}, {collection: 'orders'});


// Exported Information
module.exports = {
    models: {
        gameModel: mongoose.model('Game', gameSchema),
        orderModel: mongoose.model('Order', orderSchema)
    }
};

