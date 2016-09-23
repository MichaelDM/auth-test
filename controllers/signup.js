var User = require('../models/users');


module.exports = function(req, res, err){

  const email = req.body.email.toLowerCase(),
        password = req.body.password;

  //checking for email and password
  if (!password || !email){
    return console.log('Both email and password are required');
  }

  // checking if email alread exists
  User.findOne({ email: email}, function (err, userExists) {
    if (err) return console.log(err);
    if (userExists){
      return res.send('user already exists');
    } else {
      const newUser = new User({
        email: email,
        password: req.body.password
      });

      // Saving to MongoDB
      newUser.save(function (err){
        if (err) return console.error(err);
        return res.send('saved our email and password to database');
      });
    }
  });
}
