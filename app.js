// Load http module
var http = require('http');
// Load fs module
var fs = require('fs');

// Configuring server to write some content to the file and then read it's content and display it
var server = http.createServer(function(request, response){
    fs.writeFile('hello.txt', "Hello! This is Nodejs", 'utf-8', function(err) {
        if (err) throw err;
        console.log("File is created and saved");
        fs.readFile('hello.txt', 'utf-8', function(error, data) {
            response.writeHead('200', {'Content-Type': 'text/plain'});
            response.write(data);
            console.log(data);
            response.end();
        });
    });
});

// Listening to the port
server.listen(8000);