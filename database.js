const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	database : 'demo_shema',
	user : 'root',
	password : '9856122408'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection