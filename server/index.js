var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
 var users = require('../database-mongo/index.js');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/users',function(req,res){


	console.log('asdasdas',req.body)
	users.save(req.body,function(err,data){
		if(err){
			
			console.error(err)

		}else{
			console.log('my  Data' ,data)
		res.send(data)
	} 
	})
})

app.get('/users', function (req, res) {
  users.User.find(function(err, data) {
  	console.log(data)
    if(err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

/*
User.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });


  */

