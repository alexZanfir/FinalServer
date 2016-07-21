var request = require('request');
var url = 'http://ip-api.com/json/';
var returnCity = '?fields=city';

module.exports = function (ip) {
	return new Promise(function (resolve, reject) {
		request({
			url: url + ip + returnCity ,
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