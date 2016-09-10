var printf=require('printf');

function Table(id, max) {
    this.id=id;
    this.max=max;
    this.users={};
    this.count=0;
} 
Table.prototype.enter=function(user) {
    if (typeof (this.max)!='number' || this.count<this.max) {
        this.users[user.id]=user;
        this.count++;
        return true;
    }
    return false;
}
Table.prototype.leave=function(user) {
    delete this.users[user.id];
    this.count--;
    
}
var gdb;
function User(ws, dbuser) {
    this.ws=ws;this.dbuser=dbuser;this.id=dbuser._id;
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
            if (pack.useVipChanel) {
                if (!this.dbuser.vipChanel) return ws.sendp({c:'buyDiamond', err:'你不能使用特别VIP购买通道'});
                g_db.createDbJson(g_db.p, {col:g_db.bills, alwaycreate:true}, function(err, bill) {
                    bill._id=createBill(pack);
                    ws.sendp({c:'pay', tag:bill._id, title:'钻石', desc:printf('%d个钻石', pack.amount)});
                })
            }
        break;
        case 'mkmail':
        break;
        case 'rcvmail':
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
var default_user={
    coin:0, diamond:0, mails:[], friends:[], sdr:{day:0, last:0}
};
module.exports=function (db, createDbJson, wss) {
    g_db={p:db, createDbJson:createDbJson};
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
                createDbJson(db, {col:db.users, key:pack.id, default:default_user}, function(err, dbuser) {
                    if (err) return ws.sendp({err:err});
                    if (dbuser.pwd!=pack.pwd) {
                        return ws.send({lgerr:'用户名密码不匹配'});
                    }
                    c.user=new User(ws, dbuser);
                    onlinecount++;
                });
            } else if (pack.c=='reg') {
                createDbJson(db, {col:db.users, key:pack.id, alwaycreate:true, default:default_user}, function(err, dbuser) {
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
