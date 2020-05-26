let checkAuth = require('../middleware/checkAuth');

module.exports = function (app){
  app.get('/', require('./frontpage').get);

  app.get('/login', require('./login').get);
  app.post('/login', require('./login').post);
  app.post('/logout', require('./logout').post);

  app.get('/chat', checkAuth, require('./chat').get);
  



  app.get('/users', function(req, res, next){
    User.find({}, function(err, users){
      if(err) return next(err);
      res.json(users);
    });
  });
  
  app.get('/user/:id', function(req, res, next){
    let id;
    try {
      id = new ObjectID(req.params.id);
    } catch (e){
      return next(404);
    }
    User.findById(id, function(err, user){
      if(err) return next(err);
      if(!user){
        return next(404);
      }
      res.json(user);
    });
  });
}
