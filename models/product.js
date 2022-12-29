var mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {type:string, required:true , unique:true},
  desc: {type:string, required:true },
  img:{type:string, required:true },
  categories:{type: Array},
  size:{type:string },
  color:{type:string},
  price:{type:Number, required:true },
  
           
   
  },
  {timestamps :true}
  );
  
  
module.exports = mongoose.model('product', productSchema);