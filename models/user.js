var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {type:string, required:true , unique:true},
  email: {type:string, required:true , unique:true},
  password:{type:string, required:true , unique:true},
  isAdmin:{type: Boolean , default: false},
           
  },
  {timestamps :true}
  );
  
  
module.exports = mongoose.model('user', userSchema);