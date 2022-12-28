var mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    token: String
  });
  
module.exports = mongoose.model('product', productSchema);