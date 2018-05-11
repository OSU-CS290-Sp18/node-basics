var http = require('http');

function requestHandler(req, res) {
  console.log("== Got a request");
  console.log("  -- method:", req.method);
  console.log("  -- url:", req.url);
}

var server = http.createServer(requestHandler);

server.listen(8000, function () {
  console.log("== Server is listening on port 8000");
});
