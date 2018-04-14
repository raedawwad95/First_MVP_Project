var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dataUsers');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var userSchema = mongoose.Schema({
  userName:String,
  age: Number,
  country : String 
});

var User = mongoose.model('User', userSchema);

var save = function(data ,callback) {
  

  var user = new User(data);

  user.save(function(err){
    if(err){
      callback(err,null);
    }else{ 
      console.log('database data',data)
    callback(null,data);
  }
  })
};


module.exports.User = User;
module.exports.save = save;