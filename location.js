var request = require('request');
var url = 'http://ipinfo.io/';
var ip = socket.remoteAddress;
console.log(ip);

module.exports = function () {
	return new Promise(function (resolve, reject) {
		request({
			url: url + ip,
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