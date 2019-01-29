var http = require('http');
const delay = require('delay');

//create a server object:
http.createServer(async function (req, res) {

  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return;
  }
  
  await delay(3000);
  res.write(JSON.stringify('Hello World!')); //write a response to the client
  res.end(); //end the response
}).listen(9090);
