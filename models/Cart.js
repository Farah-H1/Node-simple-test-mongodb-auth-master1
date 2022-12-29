var mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {type:string, required:true },
  products: [
    {
        productId:{type:string},
        quantity:{type:Number, default: 1,},
    },
  ],
 
  },
  {timestamps :true}
  );
  
  
module.exports = mongoose.model('cart', cartSchema);