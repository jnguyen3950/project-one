var express = require('express');
var app = express();

app.use(express.static('./'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

var port = process.env.PORT || 1337;
app.listen(port, function() {
 console.log("listening on port " + port);
});
