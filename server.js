var http = require('http');

function requestHandler(req, res) {
  console.log("== Got a request");
  console.log("  -- method:", req.method);
  console.log("  -- url:", req.url);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/style.css') {
    res.write('body { font-family: Helvetica; }');
    res.end();
  } else {
    res.write('<html>');
    res.write('<head>');
    res.write('<link rel="stylesheet" href="style.css">')
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Hello world!!!!!!</h1>');
    res.write('<p>You requested this URL:' + req.url + '</p>');
    res.write('</body>');
    res.write('</html>');
  }

  res.end();
}

var server = http.createServer(requestHandler);

server.listen(3001, function () {
  console.log("== Server is listening on port 3001");
});
