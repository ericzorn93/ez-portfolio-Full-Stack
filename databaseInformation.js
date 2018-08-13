const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    year: {type: Number, required: true},
}, {collection: 'games'});

const orderSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    description: {type: String, required: true},
    item: {type: String, required: true},
}, {collection: 'orders'});


// Exported Information
module.exports = {
    models: {
        gameModel: mongoose.model('Game', gameSchema),
        orderModel: mongoose.model('Order', orderSchema)
    }
};

