var server = require('http').createServer()
  , url = require('url')
  , path =require('path')
  , request =require('request')
  , WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ server: server})
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
var OAuth = require('wechat-oauth'), client = new OAuth('wx06a885d249615565', 'a84701bbed690e30ae5d83bee71c8fd9');
var httpf=require('httpf');

app.use(function(req, res, next) {
    var p=/^\/niuniu[^\/]*(\/.*)$/.exec(req.url);
    req.url=p?p[1]:'/';
    next();
});
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'bin'), {index:'index.html'}));
app.all('/weixin/verifyurl', httpf({redirect:'string'}, function(redirectUrl) {
    return client.getAuthorizeURL(redirectUrl, 'verified', 'snsapi_userinfo');
}));
function getWechatUser(code, cb) {
    client.getAccessToken(code, function (err, result) {
        if (err) return cb(err);
        var accessToken = result.data.access_token;
        var openid = result.data.openid;
        client.getUser(openid, function (err, result) {
            if (err) return cb(err);
            var userInfo = result;
            cb(null, userInfo);
        });
    });    
}
app.all('/weixin/ret', httpf({code:'string', no_return:true}, function(code) {
    getWechatUser(code, function(err, r) {
        if (err) return this.res.send({err:err});
        r.id=r.openid;
        r.face='CORS?'+qs.stringify({u:r.headimgurl});
        r.pf='wechat';
        this.res.redirect
    });
}));
app.all('/weixin/getuser', httpf({code:'string', callback:true}, getWechatUser));
app.all('/CORS', function(req, res) {
    request(req.query.u).pipe(res);
});

new easym.DbProvider().init(argv.mongo, {exists:[{users:{index:['nickname', 'coin', 'diamond']}},{bills:{size:100*1024, max:1000}},{mails:{index:['to', 'from', 'used'], size:100*1024, max:1000}}]}, function(err, db) {
    if (err) return console.log(err);
    require('./server')(db, easym.createDbJson, wss);
    server.on('request', app);
    server.listen(argv.port, function () { console.log('Listening on ' + server.address().port)});
})