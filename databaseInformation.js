const mongoose = require('mongoose');

const exports = module.exports = {};

exports.gameSchema = new mongoose.Schema({
    title: String,
    description: String,
    year: Number,
});