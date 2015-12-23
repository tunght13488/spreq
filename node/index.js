var app = require('http').createServer(handler);
var io = require('socket.io')(app);

var Redis = require('ioredis');
var redis = new Redis(6379, 'redis');

var counter = 0;

app.listen(80, function () {
  console.log('Server is running!');
});

function handler(req, res) {
  res.writeHead(200);
  res.end('OK');
}

io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

redis.psubscribe('*', function (err, count) {
});

redis.on('pmessage', function (subscribed, channel, message) {
  console.log(subscribed + ' - ' + channel + ': ' + message);
  if (channel == 'processing') {
    counter++;
    var mycounter = counter;
    io.emit('chat message', 'Processing Video ' + mycounter);
    setTimeout(function () {
      io.emit('chat message', 'Video ' + mycounter + ' processed');
    }, 10000);
  }
});
