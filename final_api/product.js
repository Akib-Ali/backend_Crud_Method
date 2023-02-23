const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    name: String,
    age: Number,
    city: String
})


module.exports = mongoose.model("products", productSchema);