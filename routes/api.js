var express = require('express');
var router = express.Router();

userList = [
	{id:'1', name: 'Alan'},
	{id:'2', name: 'Jacob'},
	{id:'3', name: 'Isen'}
]

customerList = [
  {id:'21', name: 'Alpha Client'},
  {id:'22', name: 'Mister X'},
  {id:'23', name: 'Dummy Customer'}
]

country = [
  {id:'1', name: 'Denmark'},
  {id:'2', name: 'Sweden'},
  {id:'3', name: 'Norway'}
]

findModelById = function(modelCollection, id){
  if(modelCollection !== undefined || modelName !== null){
		for(i in modelCollection){
      model = modelCollection[i]
      if(id == model.id)
				return model
		}
	}
	return -1
}

/* GET users listing. */
router.get('/users', function(req, res) {
  res.send(JSON.stringify(userList));

});

/* GET user by id. */
router.get('/users/:id', function(req, res) {
  user = findModelById(userList, req.params.id)

  if(user !== -1){
  	res.send(JSON.stringify(user))
  
  }else{
  	res.send("User not found")
  }

});

/* GET users listing. */
router.get('/customers', function(req, res) {
  res.send(JSON.stringify(customerList));

});

/* GET user by id. */
router.get('/customers/:id', function(req, res) {
  customer = findModelById(customerList, req.params.id)

  if(customer !== -1){
    res.send(JSON.stringify(customer))
  
  }else{
    res.send("User not found")
  }

});

/* GET users listing. */
router.get('/countries', function(req, res) {
  res.send(JSON.stringify(country));

});


router.get('/users', function(req, res) {
  res.send(JSON.stringify([
  	{id:'1', name: 'Alan'},
  	{id:'2', name: 'Jacob'},
  	{id:'3', name: 'Isen'}
  ]));

});

module.exports = router;
