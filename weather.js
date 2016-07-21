var request = require('request');

module.exports = function (location) {
	return new Promise(function (resolve, reject) {
		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=metric&APPID=f7010dceedc9ad58857b3c276cad96fe';

		if (!location) {
			return reject('No location provided');
		}

		request({
			url: url,
			json: true
		}, function (error, response, body) {
			if (error) {
				reject('Unable to fetch weather.');
			} else {
				resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
			}
		});
	});
}