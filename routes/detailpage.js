var express = require('express');

var router = express.Router();

var database = require('../database');



router.get("/", function(request, response, next){

	var query = "SELECT * FROM defpicwales ";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('detailpage', {title:'Database', action:'list', sampleData:data});
		}

	});

});

module.exports = router