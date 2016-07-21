var request = require('request');
var url = 'http://ipinfo.io/';
var browserLocation = request.connection.remoteAddress;

module.exports = function () {
	return new Promise(function (resolve, reject) {
		request({
			url: url + browserLocation,
			json: true
		}, function (error, response, body) {
			if (error) {
				reject('Unable to guess location');
			} else {
				resolve(body);
			}
		});
	});
};