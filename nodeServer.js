var http = require('http');
const delay = require('delay');

//create a server object:
http.createServer(async function (req, res) {
  await delay(3000);
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080);
