const mongoose = require('mongoose');

module.exports = {
    gameSchema: new mongoose.Schema({
        id: Number,
        title: String,
        description: String,
        year: Number,
    }),
    orderSchema: new mongoose.Schema({
        id: Number,
        first_name: String,
        last_name: String,
        description: String,
        item: String,
    })
};

