var printf=require('printf'), me=require('../myself.js'), etc=require('../etc.js'), dlgs=require('./dlgs.js');
var conf=require('../../bin/conf/main.js');

var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;

var innerStage;

var cardType=['fangkuai', 'meihua', 'hongxin', 'heitao'];
var cardValue=['A', 2, 3, 4, 5, 6, 7, 8, 9,10, "J", "Q", "K"];
function parseCardImg(card) {
	return cardType[card.t]+"_"+cardValue[card.v]+'.png';
}
var _off=[{angle:-8, x:155,y:15}, {angle:-2, x:124, y:14}, {angle:2, x:79, y:16}, {angle:5, x:53, y:14},{angle:10, x:24, y:8}];
var _niuName=[null, '丁', '二', '三', '四', '五', '六', '七', '八', '九'];
function parseR(r) {
	switch (r.t) {
		case 0:
		r._t='没牛';
		break;
		case 1:
		r._t='牛'+_niuName[r.v];
		break;
		case 2:
		r._t='牛'+_niuName[r.v];
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
	return r._t;
}

function kaipai3(msg, xiazhuqu) {
	var self=this;
	var _t=new Laya.TimeLine();
	this.timeline=_t;
	
	var R=[msg.att.zhuang.r];
	for (var i=0;i<msg.att.xiazhuqu.length; i++) R.push(msg.att.xiazhuqu[i].r);
	_t.on('label', null, function(act) {
		var cmd=JSON.parse(act);
		switch(cmd.c) {
		case 'snd':
			Laya.SoundManager.playSound(cmd.data);
		break;
		case 'kaipai':
			var four_c=cards[cmd.data][3], four_e=four_c.entity;
			four_e.loadImage('choumapukepai/'+parseCardImg(four_c));	
		break;
		case 'jieguo':
			var card=cards[cmd.data];
			var template=self['jieguo'+cmd.data];
			var tip =new Laya.Label();
			tip.dataSource={x:template.x, y:template.y, width:template.width, height:template.height, alpha:template.alpha, 
				padding:template.padding, font:template.font, color:template.color, fontSize:template.fontSize, bold:template.bold,
				italic:template.italic, wordWrap:template.wordWrap, leading:template.leading, bgColor:template.bgColor, align:template.align};
			//tip.x=template.x; tip.y=template.y; tip.width=template.width; tip.height=template.height;
			//tip.alpha=template.alpha;
			tip.text=parseR(R[cmd.data])+'\nX'+R[cmd.data].t;
			card.tip=tip;
			innerStage.addChild(tip);			
		break;
		case 'jiesuan':
			for (var i=0; i<cards.length; i++) {
				if (cards[i].tip) innerStage.removeChild(cards[i].tip);
				for (var j=0, l=cards[i].length; j<l; j++) {
					innerStage.removeChild(cards[i][j].entity);
				}
			}
			Laya.SoundManager.playSound('snd/jiesuan.mp3');
			for (var u in self.users) {
				var user=self.users[u];
				if (!user.xzq) continue;
				for (var x=0; x<user.xzq.length; x++) {
					var xzq=user.xzq[x];
					var dst;
					//console.log(xiazhuqu[x]);
					if (msg.att.xiazhuqu[x].ratio<0) dst={alpha:0.2, x:239+171/2, y:38+214/2};
					else {
						var seat=self['seat'+user.seat];
						dst={alpha:0.2, x:seat.x+seat.width/2, y:seat.y+seat.height/2};
					}
					for (var i=0; i<xzq.coins.length; i++) {
						Laya.Tween.to(xzq.coins[i], dst, 400);
					}
				}
			}
			for (var i=0; i<msg.att.xiazhuqu.length; i++) {
				var clientXzq=self['xiazhu'+(i+1)], clientHis=clientXzq.getChildAt(1);
				if (Array.isArray(clientXzq.shownhis) && clientXzq.shownhis.length>0) {
					for (var j=0; j<clientXzq.shownhis.length; j++) {
						innerStage.removeChild(clientXzq.shownhis[j]);
					}
				}
				clientXzq.shownhis=[];
				if (!clientXzq.his) clientXzq.his=[];
				clientXzq.his.push(msg.att.xiazhuqu[i].ratio);
				var shouldshow=clientXzq.his.slice(-6);

				var pt=new Laya.Point(clientHis.x, clientHis.y-1);
				pt=clientXzq.localToGlobal(pt);
				for (var j=0; j<shouldshow.length; j++) {
					var img=new Laya.Image(shouldshow[j]>=0?'niuniu_psd/game/win.png':'niuniu_psd/game/lose.png');
					clientXzq.shownhis.push(img);
					img.x=pt.x+(j*img.width);
					img.y=pt.y;
					innerStage.addChild(img);
				}
			} 
		break;
		}
	});
	_t.on('complete',null, function() {
		for (var u in self.users) {
			var user=self.users[u];
			if (!user.xzq) continue;
			for (var x=0; x<user.xzq.length; x++) {
				var xzq=user.xzq[x];
				for (var i=0; i<xzq.coins.length; i++) innerStage.removeChild(xzq.coins[i]);
			}
		}
		self.usercoin.text=etc.toCoinStr(me.coin);
	});

	var cards=[msg.att.zhuang.cards];
	for (var i=0;i<msg.att.xiazhuqu.length; i++) cards.push(msg.att.xiazhuqu[i].cards);
	// fapai
	for (var c=0; c<5; c++) {
		for (var i=0; i<5; i++) {
			var entity=(c==3?Laya.Sprite.fromImage('choumapukepai/beimian.png')
				:Laya.Sprite.fromImage('choumapukepai/'+parseCardImg(cards[i][c])));
			entity.alpha=0;
			entity.x=149; entity.y=173;
			innerStage.addChild(entity);
			cards[i][c].entity=entity;
			var dst={alpha:1, rotation:_off[c].angle, x:_off[c].x, y:_off[c].y};
			if (i!=0) {
				dst.x+=xiazhuqu[i-1].x-25;
				dst.y+=xiazhuqu[i-1].y+47;
			}
			else {dst.x+=288; dst.y+=141}
			entity.dst=dst;
			_t.addLabel(JSON.stringify({c:'snd', data:'snd/card.mp3'}), 0);//(1000*(c*5+i)).toString(), 0/*1000*(c*5+i)*/);
			_t.to(entity, dst, 200);
		}
	}
	// kaipai & niuniu
	for (var i=0; i<cards.length; i++) {
		(function(four_c, five_c, idx) {
			var four_e=four_c.entity, five_e=five_c.entity;
			var dst=four_e.dst,
				org=five_e.dst;
			_t.to(five_e, dst, 300);
			_t.addLabel(JSON.stringify({c:'kaipai', data:idx}), 0);
			_t.to(five_e, org, 250,null, 20); 
			_t.addLabel(JSON.stringify({c:'jieguo', data:idx}), 0);
		})(cards[i][3], cards[i][4], i);
	}
	_t.to(this, {}, 500);
	_t.addLabel(JSON.stringify({c:'jiesuan'}), 0);

	_t.to(this, {}, 300);
	//_t.addLabel('final', 300);

	_t.play();
}
function leaveSeat(seatid) {
	var seat=this['seat'+seatid];
	seat.skin='niuniu_psd/game/di_1-01.png';
	seat.getChildAt(0).text='空位';
	this.sitUser--;
}
function refreshOnline(count) {
	this.onlineCount=count;
	this.online.text=printf('%d人', (count-this.sitUser));
}
function parseFaceUrl(face) {
	return face || 'niuniu_psd/hall/01_touxiang2.png';
}
function GameUI(opt) {
	GameUI.super(this);

	var self=this;
	opt.min=opt.min||1000;
	opt.max=opt.max||100000;
	opt.firstchip=conf.chips.indexOf(opt.min);
	if (opt.firstchip<0) opt.firstchip=0;
	this.opt=opt;
	this.roomid=null;
	this.users={};
	this.sitUser=0;
	this.onlineCount=0;
	this.btnExit.on('click', null, function() {
		_socket.sendp({c:'leavegame', roomid:self.roomid});
	});
	this.btnTrend.on('click', null, function() {
		new dlgs.TrendDlg(xiazhuqu).popup();
	});
	for (var i=0; i<6; i++) {
		var seat=this['seat'+i];
		seat.mouseEnabled=true;
		seat.on('click', this, function(idx, s) {
			_socket.sendp({c:'sit', id:idx});
		}, [i, seat]);
	}
	this.btnBuyCoin.on('click', null, dlgs.showShop);
	this.setRoom=function(id) {this.roomid=id};
	this.userface.skin=parseFaceUrl(me.face);
	this.userface.mouseEnabled=true;
	this.userface.on('click', null, dlgs.showUsercenter);
	this.btnShangzhuang.on('click', null, function() {
		_socket.sendp({c:'Shangzhuang'});
	});

	var n=0;
	for (var i=0; i<this.chips.numChildren; i++) {
		var ele=this.chips.getChildAt(i);
		if (ele.name.indexOf('chouma')==0) {
			ele.skin='choumapukepai/'+conf.chips[opt.firstchip+n]+'.png'; 
			ele.mouseEnabled=true;
			ele.on('click', this, function(idx, coin, ele) {
				this.selChip={ele:ele, coin:coin};
			}, [opt.firstchip+n, conf.chips[opt.firstchip+n], ele]);
			if (n==0) this.selChip={ele:ele, coin:conf.chips[opt.firstchip+n]};
			n++;
		}
	}

	me.on('coinchgd', this, function() {
		this.usercoin.text=etc.toCoinStr(me.coin);
	})
	
	innerStage=new Laya.Sprite();
	innerStage.x=this.x; innerStage.y=this.y; innerStage.width=this.width;innerStage.height=this.height;
	innerStage.mouseEnabled=false;
	//innerStage.mouseThrough=true;
	this.addChild(innerStage);
	this.stage=innerStage;

	var xiazhuqu=[this.xiazhu1, this.xiazhu2, this.xiazhu3, this.xiazhu4];
	this.flycoin=function(coin, from, to, pt) {
		if (typeof from =='number') {
			// no from 
			pt=to; to=from; from=null;
		}
		var zone=xiazhuqu[to];
		if (pt==null) {
			pt=new Laya.Point(zone.width/2, zone.height/2);
		}

		var clickpt=zone.localToGlobal(pt);
		var dstpt=new Laya.Point(Math.floor(Math.random()*(clickpt.x-zone.x)+zone.x),
			Math.floor(Math.random()*(clickpt.y-zone.y)+zone.y));
		//console.log(clickpt, dstpt);
		//var coin=Laya.Sprite.fromImage('choumapukepai/chouma_huang.png');
		innerStage.addChild(coin);
		coin.x=302; coin.y=1035;
		dstpt.scaleX=0.6; dstpt.scaleY=0.6;
		Laya.Tween.to(coin, dstpt, 400, null, Handler.create(this, function() {
			var r=zone.getChildAt(0);
			r.getChildByName('total').text=zone.total;
			r.getChildByName('self').text=zone.mytotal;
		}));
		return coin;
	}
	for (var i=0; i<xiazhuqu.length; i++) {
		(function(zone, zoneid) {
			zone.mouseEnabled=true;
			zone.on('click', this, function(e) {
				// calc dest
				//self.flycoin(zoneid, zone.getMousePoint());
				if (!this.selChip || !this.selChip.coin) return new dlgs.TipDlg('没有选中筹码').popup();
				_socket.sendp({c:'addcoin', amount:this.selChip.coin, id:zoneid});
			});
		}).call(this, xiazhuqu[i], i);
	}
	this.msg=function(msg) {
		switch(msg.c) {
		case 'scene':
			//show status;
			self.status=msg.status;
			self.xiazhuqu=msg.xiazhuqu;
		break;
		case 'addcoin':
			Laya.SoundManager.playSound('snd/clinck.mp3');
			var coin=dlgs.cloneImage(this.selChip.ele);
			coin.skin='choumapukepai/'+msg.amount+'.png';
			//Laya.Sprite.fromImage('choumapukepai/chouma_huang.png');
			//var coin=
			var user=this.users[msg.from];
			if (user) {
				if (!user.xzq) user.xzq=[{coins:[]}, {coins:[]},{coins:[]},{coins:[]}];
				if (user.xzq[msg.id]) {
					user.xzq[msg.id].coins.push(coin);
					self.flycoin(coin, msg.from, msg.id);
				}
			}
			xiazhuqu[msg.id].total=msg.total;
			if (me.id==msg.from) xiazhuqu[msg.id].mytotal=msg.u_total;
		break;
		case 'tab.status':
			Laya.SoundManager.playSound(printf('snd/%s.mp3', msg.s));
			if (msg.s=='kaipai') kaipai3.call(this, msg,xiazhuqu);
			if (msg.s=='xiazhu') {
				for (var i=0; i<xiazhuqu.length; i++) {
					var e=xiazhuqu[i].getChildAt(0);
					e.getChildByName('self').text='';
					e.getChildByName('total').text='';
				}
			}
		break;
		case 'result':
		break;
		case 'userin':
			this.users[msg.id]={seat:0, nickname:msg.nickname||msg.id, face:msg.face};
			refreshOnline.call(this, msg.online);
		break;
		case 'userout':
			var user=this.users[msg.id];
			if (user.seat) {
				leaveSeat.call(this, user.seat);
				user.seat=null;
			}
			delete this.users[msg.id];
			refreshOnline.call(this, msg.online);
		break;
		case 'sit':
			var user=this.users[msg.id];
			if (user.seat) {
				leaveSeat.call(this, user.seat);
			}
			user.seat=msg.seatid;
			if (msg.seatid>0) {
				if (!this.sitUser) this.sitUser=1;
				else this.sitUser++;
				var seat=this['seat'+msg.seatid];
				var w=seat.width, h=seat.height;
				seat.skin=parseFaceUrl(user.face);
				seat.width=w;seat.height=h;
				seat.getChildAt(0).text=user.nickname;
			}
			refreshOnline.call(this, this.onlineCount);
		break;
		case 'zhuang':
			var w=this.zhuangface.width, h=this.zhuangface.height;
			this.zhuangface.skin=this.users[msg.id].face||'niuniu_psd/game/2.png';
		break;
		default:
			return false;
		}
		return true;
	}
	this.deactive=function() {
		Laya.SoundManager.stopAll();
		if (this.timeline) {
			this.timeline.destroy();
			this.timeline=null;
		}
		for (var i=1; i<6; i++) {leaveSeat.call(this, i);}
		innerStage.removeChildren();
	}
	this.active=function(msg) {
		if (msg.id) this.setRoom(msg.id);
		this.username.text=me.nickname||me._id;
		this.usercoin.text=etc.toCoinStr(me.coin);
		this.viplevel.text=printf('VIP%d', me.vip);		
		//_socket.sendp({c:'query_scene'});
		Laya.SoundManager.playMusic('snd/bg.table.mp3');
		this.users={};
		this.sitUser=0;
		this.onlineCount=0;
	}
}
//GameUI.prototype.setRoom=function(id) {this.roomid=id}

Laya.class(GameUI, 'tableUI', tableUI);
var createGameUI=function(opt, cb) {
	Laya.loader.load([{url:'res/atlas/niuniu_psd/game.json', type:Loader.ATLAS},
		{url:'res/atlas/choumapukepai.json', type:Loader.ATLAS},
		{url:'res/atlas/comp.json', type:Loader.ATLAS},
		{url:'snd/xiazhu.mp3', type:'sound'},
		{url:'snd/jiesuan.mp3', type:'sound'},
		{url:'snd/kaipai.mp3', type:'sound'}], 
		Handler.create(this, function() {
			return cb(null, new GameUI(opt));
		}), null, Loader.ATLAS);
}

module.exports=createGameUI;