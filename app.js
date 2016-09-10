var server = require('http').createServer()
  , url = require('url')
  , path =require('path')
  , WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ server: server })
  , express = require('express')
  , app = express()
  , compression = require('compression')
  , bodyParser =require('body-parser')
  , argv =require('yargs')
    .default('port', 80)
    .boolean('debugout')
    .describe('ss', '--ss=ip[:port]')
    .demand('mongo')
    .describe('mongo', '--mongo=[mongodb://][usr:pwd@]ip[:port][,[usr:pwd@]ip[:port]]/db, 参考https://docs.mongodb.com/manual/reference/connection-string/')
    .argv;
var easym=require('easy-mongo');

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'bin'), 'index.html'));

new easym.DbProvider().init(argv.mongo, function(err, db) {
    if (err) return console.log(err);
    require('server')(db, easym.createDbJson, wss);
})

server.on('request', app);
server.listen(port, function () { console.log('Listening on ' + server.address().port)});