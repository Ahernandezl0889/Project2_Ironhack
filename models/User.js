const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: String,
  username: String,
  password: String
})



const User = mongoose.model('User', userSchema)


module.exports = User;