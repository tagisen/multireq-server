var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
	baseUrl = 'http://' + req.headers.host;
	requests = Object.keys(req.query)
	index = 0;
	res.data = {}

	callRequest = function(){	
		key = requests[index];
		requestUrl = baseUrl + '/' + req.query[key]

		request( requestUrl, function (error, response, body) {

			index++;
	    if (!error && response.statusCode == 200) {
	    	res.data[key] = JSON.parse(body);
	    	callRequest();
	    }else{
	    	// All the requeast are made by now. We can continue.
	    	next()
	    }
	  });
	}
	callRequest()

});

router.get('/', function(req, res) {
	res.send(JSON.stringify(res.data));
});
module.exports = router;
