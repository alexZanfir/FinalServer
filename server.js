var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');
var location = require('./location.js');
var weather = require('./weather.js');
var a = location().then(function (loc) {
	console.log(loc.city);
		return (loc.city);
	})

var a =request.connection.remoteAddress;
console.log('ip'+a);
var form = '<form><input name="q" placeholder="City name" /><button>Go</button></form>';


app.use(middleware.logger);

app.get('/', function (req, res) {
	var city = req.query.q;
    console.log('city: ' +city);
    if (city === undefined) {
		location().then(function (loc) {
			return weather(loc.city);
		}).then(function (currentWeather) {
			console.log(currentWeather);
			res.send(currentWeather + form );
		}).catch(function (error) {
			console.log(error)
		});
	}else {
		weather(city).then(function (currentWeather) {
			console.log(currentWeather);
			res.send(currentWeather + form );
		}).catch(function (error) {
			console.log(error)
		});
	}
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Server started on port ' + PORT + '!');
});

