const signup = require('./controllers/signup');


module.exports = function(app) {
  app.post('/signup', signup);

  app.get('/', function (req, res) {
    res.send('Hello World!');
  });
}
