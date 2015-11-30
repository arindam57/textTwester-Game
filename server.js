var http = require('http');
var fs = require('fs');

var requestHandler = function (request, response) {
	var filePath = '.' + request.url;
	console.log(request.url,request.connection.remoteAddress);
	
	(filePath == './') && (filePath = './start.html');

	fs.readFile(filePath, function(error, content) {
		if (error) {
			response.writeHead(404)
			response.end("<html><center><h2>404:Not Found</h2></center></html>")
		};
        response.end(content);
	});
}

http.createServer(requestHandler).listen(4000);