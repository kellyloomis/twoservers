var http = require("http");

var fs = require("fs");

var PORT = 7000;

var server = http.createServer(handleRequest);

server.listen(PORT, function() {

	console.log("Server listening on: http://localhost:" + PORT);
});



function handleRequest(req, res) {

	var path = req.url;

	switch(path) {

		case "/index":
			return displayRoot(path, req, res);

		case "/index1":
			return displayFoods(path, req, res);

		case "/index2":
			return displayMovies(path, req, res);

		case "/index3":
			return displaySongs(path, req, res);
	}
}

function displayRoot(url, req, res) {

	fs.readFile(__dirname + "/index.html", function(err, data){

		res.end(data);

	});
}

function displayFoods(url, req, res) {

	fs.readFile(__dirname + "/index1.html", function(err, data){
		
		res.end(data);

	});
}

function displayMovies(url, req, res) {

	fs.readFile(__dirname + "/index2.html", function(err, data){
		
		res.end(data);

	});
}

function displaySongs(url, req, res) {

	fs.readFile(__dirname + "/index3.html", function(err, data){
		
		res.end(data);

	});
}

server.listen(PORT, function() {

	console.log("You're the best!");
});
