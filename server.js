var path = require('path'),
  express = require('express'),
  server = {},
  staticPath = path.join(__dirname, 'public');

server.start = function () {
  this.app = express();

  this.app.use('/static', express.static(staticPath));

  this.app.get('/', function (req, res) {

    res.sendFile(path.join(staticPath, '/index.html'));
  });

  this.app.listen(process.env.PORT || 1337, function () {

    console.log('listening on port: 1337!');
  });
};

module.exports = server;
