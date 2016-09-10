function User(ws, dbuser) {
    this.ws=ws;this.dbuser=dbuser;
}
User.prototype.msg=function(pack) {
    switch(pack.c) {
        case 'entergame':
        break;
        case 'leavegame':
        break;
        case 'getuserinfo':

        break;
        case 'sdr':
        break;
        case 'buyCoin':
        break;
        case 'buyDiamond':
        break;
        case 'makemail':
        break;
        case 'recvmail':
        break;
        default:
            this.ws.sendp({err:'unknown cmd', pack:pack});
        break;
    }
}
function send(ws, data) {
    var payload=JSON.stringify(data);
    if (payload.length>100) return ws.send(payload, {compress:true});
    ws.send(payload);
}
module.exports=function (db, createDbJson, wss) {
    var gs={};
    var onlinecount=0, socks={};

    wss.on('connection', function connection(ws) {
        var sockkey=ws.upgradeReq.socket.remoteAddress+':'+ws.upgradeReq.socket.remotePort;
        var c=socks[sockkey]={};
        ws.sendp=ws.sendjson=send;

        ws.on('message', function(data) {
            try {
                var pack=JSON.parse(data);
            } catch(e) {
                return ws.sendp({err:e});
            }
            if (c.user) return c.user.msg(pack);
            if (pack.c=='login') {
                createDbJson(db, {key:pack.id}, function(err, dbuser) {
                    if (err) return ws.sendp({err:err});
                    if (dbuser.pwd!=pack.pwd) {
                        return ws.send({lgerr:'用户名密码不匹配'});
                    }
                    c.user=new User(ws, dbuser);
                    onlinecount++;
                });
            } else if (pack.c=='reg') {
                createDbJson(db, {key:pack.id, alwaycreate:true}, function(err, dbuser) {
                    if (err) return ws.sendp({err:err});
                    if (!dbuser.__created) return ws.sendp({regerr:'用户已存在'});
                    dbuser.pwd=pack.pwd;
                    c.user=new User(ws, dbuser);
                    onlinecount++;
                });
            }
        })
        .on('error', console.log)
        .on('close', function() {
            if (socks[sockkey].user) onlinecount--;
            delete socks[sockkey];
        })
    });
};
