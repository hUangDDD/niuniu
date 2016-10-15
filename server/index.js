var printf=require('printf'), async=require('async'), assert=require('assert'), path=require('path');
var conf=require('../bin/conf/main.js');

function permutator(inputArr) {
  var results = [];

	function permute(arr, memo) {
		var cur, memo = memo || [];

		for (var i = 0; i < arr.length; i++) {
			cur = arr.splice(i, 1);
			if (arr.length === 0) {
			results.push(memo.concat(cur));
			}
			permute(arr.slice(), memo.concat(cur));
			arr.splice(i, 0, cur[0]);
		}

		return results;
	}

	return permute(inputArr);
}

var cardType={'黑桃':3, '红桃':2, '梅花':1, '方块':0, 'heitao':3, 'hongtao':2, 'meihua':1, 'fangkuai':0};
function cardv(c) {
	if (typeof c=='number') return {t:Math.floor(c%4), v:Math.floor(c/4), ov:c};
	if (typeof c=='string') {
		for (var k in cardType) {
			if (c.indexOf(k)==0) {
				var t=cardType[k];
				var v=c.slice(k.length);
				switch (v.toLowerCase()) {
					case 'a':
					v=0;
					break;
					case 'j':
					v=10;
					break;
					case 'q':
					v=11;
					break;
					case 'k':
					v=12;
					break;
					default:
					v=Number(v)-1;
				}
				return {t:t, v:v, ov:v*4+t};
			}
		}
	}
}
var reverseCardType=['方块', '梅花','红桃', '黑桃'];
var reverseCardValue=['A', 2, 3, 4, 5, 6, 7, 8, 9,10, 'J', 'Q', 'K'];
function parseR(r) {
	switch (r.t) {
		case 0:
		r._t='没牛';
		break;
		case 1:
		r._t='牛'+r.v;
		break;
		case 2:
		r._t='牛'+r.v;
		break;
		case 3:
		r._t='牛牛';
		break;
		case 4:
		r._t='四花';
		break;
		case 5:
		r._t='五花';
		break;
		case 7:
		r._t='炸弹';
		break;
		case 10:
		r._t='小牛牛';
		break;
		default:
		r._t='err t';
	}
	r.mc.str=reverseCardType[r.mc.t]+reverseCardValue[r.mc.v];
	return r;
}
function fixv(v) {
	if (v>=10) return 10;
	return v+1;
}
function isXiaoniuniu(arr) {
	var total=0;
	for (var i=0; i<arr.length; i++) {
		if (arr[i].v>=5) return false;
		total+=arr[i].v;
	}
	if (total>10) return false;
	return true;
}
// tao xin fei fang
function calcR(arr) {
	for (var i=0; i<arr.length; i++) arr[i].fv=fixv(arr[i].v);
	for (var i=0; i<arr.length; i++) {
		for (var j=i+1; j<arr.length; j++) {
			if (arr[i].ov>arr[j].ov) {
				var t=arr[j];
				arr[j]=arr[i]; arr[i]=t;
			}
		}
	}
	//小牛牛×10：五张牌皆小于等于5，总和小于等于10
	var mc=arr[arr.length-1];
	if (isXiaoniuniu(arr)) return {t:10, mc:mc};

	// is bomb 炸弹×7：四张同数字牌。第5张随意
	if (arr[0].v==arr[3].v || arr[1].v==arr[4].v) {
		return {t:7, mc:arr[1]};
	}
	// is 5 flower 五花×5：五张牌皆为J，Q，K中任意。
	var c=0, o=null;
	for (var i=0 ;i<arr.length; i++) {
		if (arr[i].v>=10) c++;
		else o=arr[i].v;
	}
	if (c==5) return {t:5, mc:mc};
	//四花×4：四张牌皆为J，Q，K中任意。第5张为10。
	if (c==4 && o==9) return {t:4, mc:mc};

	// 牛牛×3：三张牌数字总和为10的倍数，另两张数字总和也为10的倍数。
	var allp=permutator(arr);
	var maxr={t:0, v:0, f:0};
	for (var i=0; i<allp.length; i++) {
		var op=allp[i];
		//console.log(op);
		if ((op[0].fv+op[1].fv+op[2].fv)%10==0) {
			var v=(op[3].fv+op[4].fv)%10;
			var t=1;
			if (v==0) {
				v=10;t=3;
			}
			else if (v>=7) {t=2;}
			if ((maxr.t<t) || (maxr.t==t && maxr.v<v)) {
				maxr.v=v;maxr.t=t;
			}
		}
	}
	return {t:maxr.t, mc:mc, v:maxr.v};
}
function Table(id, max) {
	var self=this;
	this.id=id;
	this.max=max;
	this.users={};
	this.zhuang={};
	this.seat=[];
	this.count=0;

	(function _loop() {
		self.xiazhuqu=[{u:{}, a:{}, total:0, his:[]}, {u:{}, a:{}, total:0, his:[]},{u:{}, a:{}, total:0, his:[]},{u:{}, a:{}, total:0, his:[]}];
		self.status='xiazhu';
		self.bc({c:'tab.status', s:self.status});
		setTimeout(function() {
			self.xipai();
			self.fapai();
			self.bipai();
			self.status='kaipai';
			var xzq=[];
			for (var i=0; i<self.xiazhuqu.length; i++) {
				var zone=self.xiazhuqu[i];
				zone.his.push(zone.ratio);
				if (zone.his.length>40) zone.his.splice(0,zone.his.length-20);
				xzq[i]={ratio:zone.ratio, a:zone.a, total:zone.total, cards:zone.cards, r:zone.r, his:zone.his.slice(-20)};
			}
			var zhuang={r:self.zhuang.r, cards:self.zhuang.cards, userid:(self.zhuang.user&&self.zhuang.user.id)};
			self.bc({c:'tab.status', s:self.status, att:{zhuang:zhuang, xiazhuqu:xzq}});
			setTimeout(function() {
				self.status='jiesuan';
				self.jiesuan();
				if (self.quithandler) return self.quithandler.call(null, self.id);
				setTimeout(_loop, 5*1000);
			}, 7*1000);		
		}, 10*1000);
	})();
}
Table.prototype.entered=function(user) {
	this.bc({c:'userin', id:user.id, online:this.shownOnline, nickname:user.dbuser.nickname, face:user.dbuser.face});
	user.send({c:'tab.restorestatus', s:this.status, zhuang:this.zhuang, });
}
Table.prototype.enter=function(user) {
	var roomopt=conf.room[this.id];
	if ((roomopt.maxholder<user.dbuser.coin) || (roomopt.historycash<user.dbuser.historycash)) return '请去高分房间';
	if (typeof (this.max)!='number' || this.count<this.max) {
		this.users[user.id]=user;
		this.count++;
		this.shownOnline=Math.floor(this.count*(Math.random()*10+10));
		this.uidx=null;
		//this.bc({c:'userin', id:user.id, online:this.count});
		return null;
	}
	return '房间已满';
}
Table.prototype.leave=function(user) {
	delete this.users[user.id];
	this.count--;
	this.uidx=null;
	if (user.seat) this.seat[user.seat]=null;
	this.bc({c:'userout', id:user.id, online:this.count});
}
Table.prototype.ensureUserIdx=function() {
	if (!this.uidx) this.uidx=Object.keys(this.users);
	return this.uidx;
}
Table.prototype.bc=function(msg, opt) {
	var idx=this.ensureUserIdx();
	for (var i=0, sz=idx.length;i<sz; i++) {
		var user=this.users[idx[i]];
		if (opt && opt.exclude && opt.exclude==user) continue;
		user.send(msg);
	}
}
Table.prototype.msg=function(msg, user) {
	switch (msg.c) {
	case 'addcoin':
		if (this.status!='xiazhu') return user.send({err:'table status is '+this.status});
		if (!this.users[user.id]) return user.send({err:pritnf('no such user %d in this table %d', user.id, this.id)});
		if (!this.xiazhuqu[msg.id]) return user.send({err:printf('zoneid %d is wrong', msg.id)});
		if (this.zhuang && this.zhuang.user==user) return user.send({err:'zhuang can`t addcoin'});
		var xiazhuqu=this.xiazhuqu[msg.id];
		if (user.dbuser.coin<msg.amount) return user.err(printf('金币%d不足，请充值',user.dbuser.coin));
		if (xiazhuqu.u[user.id]==null) {
			xiazhuqu.u[user.id]=user;
		}
		if (xiazhuqu.a[user.id]==null) xiazhuqu.a[user.id]=msg.amount;
		else xiazhuqu.a[user.id]+=msg.amount;
		user.dbuser.coin-=msg.amount;
		user.update('coin');
		xiazhuqu.total+=msg.amount;
		msg.from=user.id;
		msg.total=xiazhuqu.total;
		msg.u_total=xiazhuqu.a[user.id];
		this.bc(msg);
	break;
	case 'sit':
		//if (msg.id==0 || user.dbuser.vip>0 || user.dbuser.coin>5000000) {
			if (user.seat) this.seat[user.seat]=null;
			if (msg.id>0) {
				if (this.seat[msg.id]) return user.send({err:'seat has been occupied '+this.seat[msg.id].id});
				this.seat[msg.id]=user;
				user.seat=msg.id;
			} 
			this.bc({c:'sit', id:user.id, seatid:msg.id});
		//}else {
		//	user.send({err:'vip level must greater than 0'});
		//}
	break;
	case 'Shangzhuang':
		//if (user.dbuser.coin<1000000) return user.send({err:'not enough coin'});
		this.zhuang.user=user;
		this.bc({c:'zhuang', id:user.id});
	break;
	default:
		return false;
	}
	return true;
}
Table.prototype.xipai=function() {
	var cards=[];
	for (var i=0; i<52; i++) {
		cards[i]=cardv(i);
	}
	for (var i=0; i<800; i++) {
		var p1=Math.floor(Math.random()*cards.length), p2=Math.floor(Math.random()*cards.length);
		while(p1==p2) {p2=Math.floor(Math.random()*cards.length)}
		var t=cards[p2];
		cards[p2]=cards[p1];cards[p1]=t;
	}
	this.cards=cards;
}
Table.prototype.fapai=function() {
	this.zhuang.cards=this.cards.splice(0, 5);
	for (var i=0; i<4; i++) {
		this.xiazhuqu[i].cards=this.cards.splice(0, 5);
		this.xiazhuqu[i].r=calcR(this.xiazhuqu[i].cards);
	}
	this.zhuang.r=calcR(this.zhuang.cards);
}
function fixratio(r) {
	return (r==0?1:r);
}
Table.prototype.bipai=function() {
	var mainr=this.zhuang.r;
	mainr.ft=fixratio(mainr.t);
	for (var i=0; i<this.xiazhuqu.length; i++) {
		var cr=this.xiazhuqu[i].r;
		//庄>闲
		if (mainr.t>cr.t) {
			this.xiazhuqu[i].ratio=-mainr.ft;
			continue;
		}
		//庄<闲
		if (mainr.t<cr.t) {
			this.xiazhuqu[i].ratio=fixratio(cr.t);
			continue;
		}
		//牛九-牛七，g.牛六-牛一，庄>闲；
		if (mainr.t==1 || mainr.t==2) {
			this.xiazhuqu[i].ratio=-mainr.ft;
			continue;			
		}
		//炸弹，四张炸弹牌点数大的胜,其他情况，点数大者胜，花色大胜
		//if (mainr.t==7) {
			if (mainr.mc.ov>cr.mc.ov) {
				this.xiazhuqu[i].ratio=-mainr.ft;
				continue;			
			}
			if (mainr.mc.ov==cr.mc.ov) assert('should never see this');
			this.xiazhuqu[i].ratio=fixratio(cr.t);
		//}
	}
}
Table.prototype.jiesuan=function() {
	var zhuanglose=0, zhuangwin=0;
	for (var i=0; i<this.xiazhuqu.length; i++) {
		var qu=this.xiazhuqu[i];
		for (var n in qu.u) {
			var user=qu.u[n];
			var delta=qu.ratio*qu.a[n];
			var final=user.dbuser.coin+delta;
			if (delta<0 && final<0) {
				final=0;
				delta=-user.dbuser.coin;
				assert(delta<0);
			}
			if (delta<0) zhuangwin-=delta;
			else zhuanglose+=delta;
			user.delta=delta;
			//user.dbuser.coin=final;
			//user.send({c:'result', v:delta, user:{coin:user.dbuser.coin, _id:user.id}});
		}
	}
	var winR=1;
	if (this.zhuang.user) {
		var zhuanguser=this.zhuang.user.dbuser;
		var zhuangdelta=zhuangwin;
		zhuanguser.coin+=zhuangwin;
		if (zhuanguser.coin<zhuanglose) {
			winR=zhuanguser.coin/zhuanglose;
			zhuanguser.coin=0;
			zhuangdelta=-zhuanguser.coin;
		}
		else zhuangdelta-=zhuanglose;
		this.zhuang.user.send({c:'result', v:zhuangdelta, user:{coin:this.zhuang.user.dbuser.coin, _id:this.zhuang.user.id}});
	}

	for (var i=0; i<this.xiazhuqu.length; i++) {
		var qu=this.xiazhuqu[i];
		for (var n in qu.u) {
			var user=qu.u[n], delta=user.delta;
			if (winR<1 && delta>0) delta=delta*winR;
			user.dbuser.coin+=delta;
			user.send({c:'result', v:delta, user:{coin:user.dbuser.coin, _id:user.id}});
		}
	}
}
var tables=[new Table(0), new Table(1), new Table(2), new Table(3), new Table(4)];
var g_db;
function getDbuser(userid, cb) {
	if (typeof userid=='string') {
		var user=onlineUsers[userid];
		if (user) return cb(null, user.dbuser);
	}
	g_db.createDbJson(g_db.p, {col:g_db.p.users, key:userid, default:default_user}, cb);
}
function addMail(dbuser, mail) {
	//if (dbuser.mails.length>=100) dbuser.mails.splice(0, dbuser.mails.length-50);
	//dbuser.mails.push(mail);
	mail._id=new Date().getTime();
	mail.to=dbuser._id;
	g_db.p.mails.insert(mail);
}
function addPackage(dbuser, obj) {
	for (var n in obj) {
		if (dbuser[n]==null) {
			dbuser[n]=obj[n];
			continue;
		}
		if (typeof dbuser[n]=='number') {
			dbuser[n]+=obj[n];
			continue;
		}
		if (Array.isArray(dbuser[n])) {
			dbuser[n].concat(obj[n]);
			continue;			
		}
		if (typeof dbuser[n]=='object') {
			addPackage(dbuser[n], obj[n]);
			continue;
		}
		dbuser[n]=obj[n];
	}
}
function User(ws, dbuser) {
	this.ws=ws;this.dbuser=dbuser;this.id=dbuser._id;
}
User.prototype.onClose=function() {
	this.table && this.table.leave(this);
	this.offline=true;
}
User.prototype.send=function(msg) {return (this.offline || this.ws.sendp(msg))}
User.prototype.err=function(e) {return this.send({err:e})}
User.prototype.update=function(types) {
	var o={}; 
	for (var i=0; i<arguments.length; i++) o[arguments[i]]=this.dbuser[arguments[i]]; 
	return this.send({user:o});
}
User.prototype.msg=function(pack) {
	var self=this;
	switch(pack.c) {
		case 'entergame':
			var err=tables[pack.roomid].enter(this)
			if (err) {
			}
			this.table=tables[pack.roomid];
			this.ws.sendp({c:'showview', v:'game'+pack.roomid, id:pack.roomid, opt:conf.room[pack.roomid]});
			tables[pack.roomid].entered(this);
			//this.ws.sendp({c:'userin', id:this.id, nick:this.dbuser.nickname, face:this.dbuser.face});
		break;
		case 'leavegame':
			tables[pack.roomid].leave(this);
			this.table=null;
			this.ws.sendp({c:'showview', v:'hall'});
		break;
		case 'getuserinfo':
			this.send(onlineUsers[pack.id]);
		break;
		case 'sdr':
		break;
		case 'buyCoin':
		break;
		case 'buyDiamond':
			if (pack.useVipChanel) {
				if (!this.dbuser.vipChanel) return ws.sendp({c:'buyDiamond', err:'你不能使用特别VIP购买通道'});
				g_db.createDbJson(g_db.p, {col:g_db.p.bills, alwaycreate:true}, function(err, bill) {
					bill._id=createBill(pack);
					ws.sendp({c:'pay', tag:bill._id, title:'钻石', desc:printf('%d个钻石', pack.amount)});
				})
			}
		break;
		case 'mkmail':
		break;
		case 'rcvmail':
			g_db.p.mails.find({_id:pack.mailid, used:false}).limit(1).toArray(function(err, mails) {
				if (err) return self.send({err:err});
				var mail=mails[0];
				if (!mail) return self.send({err:printf('no such mail %d', pack.mailid)});
				g_db.p.mails.update({_id:pack.mailid}, {$set:{used:true}});
				addPackage(self.dbuser, mail.content);
				self.update('gifts');
				//self.send({user:{gifts:self.dbuser.gifts}});
			});
		break;
		case 'mail':
		case 'mails':
			g_db.p.mails.find({used:false, to:this.id}).sort({_t:-1}).limit(20).toArray(function(err, mails) {
				if (err) return self.send({err:err});
				self.send({c:'mails', mails:mails});
			});
		break;
		case 'gift':
			pack.giftnum=pack.giftnum||1;
			var need=pack.giftnum*conf.gifts[pack.giftname].coin;
			if (need>this.dbuser.coin) return this.send({err:printf('not enough money, need %d', need)});
			this.dbuser.coin-=need;
			this.send({user:{coin:this.dbuser.coin}});
			getDbuser({nickname:pack.to}, function(err, dbuser) {
				if (err) return self.send({err:err});
				var mail={content:{gifts:{}}, _t:new Date(), from:self.dbuser.nickname||self.id, used:false};
				mail.content.gifts[pack.giftname]=pack.giftnum||1;
				addMail(dbuser, mail);
			});
		break;
		case 'sellgift':
			var gifts=this.dbuser.gifts;
			if (!gifts) return this.send({err:'no gifts'});
			var gift=gifts[pack.giftid];
			if (!gift) return this.send({err:printf('no such gift %s', pack.giftid)});
			if (gift<pack.count) return this.send({err:printf('not enough gift number %d', pack.count)});
			var left=gifts[pack.giftid]-pack.count;
			if (left) gifts[pack.giftid]=left;
			else delete gifts[pack.giftid];
			this.dbuser.coin+=conf.gifts[pack.giftid].coin*pack.count;
			this.update('gifts', 'coin');
		break;
		case 'board':
			var type=listboard[pack.type];
			if (!type) return this.send({err:printf('no such board %s', pack.type)});
			var now=new Date();
			if (now-type.time<=(10*60*1000)) return this.send({c:'board', type:pack.type, board:type.b});
			var proj={nickname:1, vip:1, face:1};
			proj[pack.type]=1;
			g_db.p.users.find({}, proj, {limit:20, sort:[[pack.type, 'desc']]}).toArray(function (err, r) {
				if (err) return;
				type.time=now;
				type.b=r;
				self.send({c:'board', type:pack.type, board:r});
			});
		break;
		default:
			if (!this.table || !this.table.msg(pack, this)) this.ws.sendp({err:'unknown cmd', pack:pack});
		break;
	}
}
var listboard={coin:{b:[], time:0}, diamond:{b:[], time:0}, win:{b:[], time:0}};

function send(data) {
	var payload=JSON.stringify(data);
	if (payload.length>100) return (this.send(payload, {compress:true}) || true);
	this.send(payload);
	return true;
}
var default_user={
	coin:20000, diamond:0, friends:[], sdr:{day:0, last:0}, historycash:0
};
var onlineUsers={};

var pf={default:{preROL:function(pack, cb) {return cb(null, pack);}}};
var extern_pf=(require('module-loader'))(path.join(__dirname, 'pf/*.pf'), function() {
	var keys=Object.keys(extern_pf);
	for (var i=0; i<keys.length; i++) {
		pf[path.basename(keys[i], '.pf')]=extern_pf[keys[i]];
	}	
});
function chkpwd(userid, pwd, cb) {
	g_db.p.users.find({_id:userid, pwd:pwd}).toArray(function(err, r) {
		if (err) return cb(err);
		if (r.length==0) return cb('用户名密码不匹配');
		cb(null);
	});
}
module.exports=function (db, createDbJson, wss) {
	g_db={p:db, createDbJson:createDbJson};
	var gs={};
	var onlinecount=0, socks={};

	wss.on('connection', function connection(ws) {
		var sockkey=ws.upgradeReq.headers['X-Real-IP']||ws.upgradeReq.socket.remoteAddress+':'+ws.upgradeReq.socket.remotePort;
		console.log(sockkey);
		var c=socks[sockkey]={};
		ws.sendp=ws.sendjson=send;

		ws.on('message', function(data) {
			try {
				var pack=JSON.parse(data);
			} catch(e) {
				return ws.sendp({err:e});
			}
			console.log('recv', pack);
			if (c.user) return c.user.msg(pack);
			switch (pack.c) {
				case 'login':
					chkpwd(pack.id, pack.pwd, function(err) {
						if (err) return ws.sendp({err:err, cancelRelogin:true});
						createDbJson(db, {col:db.users, key:pack.id, default:default_user, proj:{pwd:0}}, function(err, dbuser) {
							if (err) return ws.sendp({c:'lgerr', msg:'用户不存在'});
							c.user=new User(ws, dbuser);
							onlineUsers[c.user.id]=c.user;
							onlinecount++;
							ws.sendp({c:'showview', v:'hall', user:dbuser});
						});
					})
				break;
				case 'reg':
					createDbJson(db, {col:db.users, key:pack.id, alwayscreate:true, default:default_user}, function(err, dbuser) {
						if (err) return ws.sendp({err:err});
						if (!dbuser.__created) return ws.sendp({c:'regerr', msg:'用户已存在'});
						dbuser.pwd=pack.pwd;
						c.user=new User(ws, dbuser);
						onlineUsers[c.user.id]=c.user;
						dbuser.nickname=pack.nickname||pack.id;
						dbuser.face=pack.face;
						onlinecount++;
						ws.sendp({c:'showview', v:'hall', user:dbuser});
					});
				break;
				case 'rol':
					//pf[pack.pf||'default'].preROL(pack, function(err, pack) {
						//if (err) return ws.sendp({err:err});
						createDbJson(db, {col:db.users, key:pack.id, alwayscreate:true, default:default_user}, function(err, dbuser) {
							if (err) return ws.sendp({err:err});
							if (!dbuser.___created) {
								if (dbuser.pwd && dbuser.pwd!=pack.pwd) return ws.sendp({c:'lgerr', msg:'账号密码错'});
							}
							else dbuser.pwd=pack.pwd;
							c.user=new User(ws, dbuser);
							onlineUsers[c.user.id]=c.user;
							dbuser.nickname=pack.nickname||pack.id;
							dbuser.face=pack.face;
							onlinecount++;
							ws.sendp({c:'showview', v:'hall', user:dbuser});
						});
					//});
				break;
				default:
					ws.sendp({err:'unknown cmd', pack:pack});
			}
		})
		.on('error', console.log)
		.on('close', function() {
			if (socks[sockkey].user) {
				onlinecount--;
				delete onlineUsers[socks[sockkey].user.id];
				socks[sockkey].user.offline=true;
				socks[sockkey].user.onClose();
			}
			delete socks[sockkey];
		})
	});
};

if (module==require.main) {
	var util=require('util');
	tables[0].xipai();
	tables[0].fapai();
	console.log(parseR(tables[0].zhuang.r));
	console.log(util.inspect([{r:parseR(tables[0].xiazhuqu[0].r), s:tables[0].xiazhuqu[0].ratio}, 
	{r:parseR(tables[0].xiazhuqu[1].r), s:tables[0].xiazhuqu[1].ratio}, 
	{r:parseR(tables[0].xiazhuqu[2].r), s:tables[0].xiazhuqu[2].ratio},
	{r:parseR(tables[0].xiazhuqu[3].r), s:tables[0].xiazhuqu[3].ratio}], {depth:null, colors:true}));
}
