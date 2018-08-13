const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    year: Number,
});

const orderSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    description: String,
    item: String,
});


// Exported Information
module.exports = {
    models: {
        gameModel: mongoose.model('Game', gameSchema),
        orderModel: mongoose.model('Order', orderSchema)
    }
};

