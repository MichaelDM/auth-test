const mongoose = require('mongoose');

// Defining schema
const userSchema = mongoose.Schema({
  email: String,
  password: String
});

// Passing middleware to Schema
userSchema.pre('save', function(next){
  
  next();
});

// Defining and exporting model
module.exports = mongoose.model('User', userSchema);
