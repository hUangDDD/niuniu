var async=require('async'), me=require('./myself.js'), printf=require('printf'), etc=require('./etc.js'), dlgs=require('./UIs/dlgs.js');
var fonts=require('./fonts.js');

var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;
function HallUI() {
	HallUI.super(this);
	this.room1.on('click', null, function() {
		_socket.sendp({c:'entergame', roomid:1});
	});
	this.room2.on('click', null, function() {
		_socket.sendp({c:'entergame', roomid:2});
	});
	this.room3.on('click', null, function() {
		_socket.sendp({c:'entergame', roomid:3});
	});
	this.room4.on('click', null, function() {
		_socket.sendp({c:'entergame', roomid:4});
	});

	if (me.face) this.userface.skin=me.face;
	this.userface.on('click', null, function() {dlgs.showUsercenter()});
	this.btnShop.on('click', null, dlgs.showShop);

	this.btnMail.on('click', null, function() {new dlgs.MailDlg().popup()});
	this.btnGift.on('click', null, dlgs.showGift);
	this.btnKefu.on('click', null, function() {new dlgs.GMDlg().popup()});
	this.btnExtra.on('click', null, function() {new dlgs.QRDlg().popup()});
	this.btnRich.on('click', null, function() {new dlgs.BoardDlg().popup()});

	me.on('coinchgd', this, function() {
		this.usercoin.text=etc.toCoinStr(me.coin);
	});
	me.on('vipchgd', this, function() {
		this.viplevel.text=printf('VIP%d', me.vip);
	})
	this.active=function(msg) {
		Laya.SoundManager.setMusicVolume(2);
		Laya.SoundManager.playMusic('snd/bg.hall.mp3');

		this.username.text=me.nickname;
		this.usercoin.text=etc.toCoinStr(me.coin);
		this.viplevel.text=printf('VIP%d', me.vip);
	}
	this.deactive=function() {
		Laya.SoundManager.setMusicVolume(1);		
	}
}
var createHallUI=function(opt, cb) {
	Laya.loader.load([
		{url:'res/atlas/niuniu_psd/hall.json', type:Loader.ATLAS},
		{url:'res/atlas/niuniu_psd/hall/VIP.json', type:Loader.ATLAS},
		{url:'res/atlas/comp.json', type:Loader.ATLAS},
		{url:'res/atlas/niuniu_psd/shangdian.json', type:Loader.ATLAS},
		{url:'res/atlas/bitmapFont.json', type:Loader.ATLAS}
		//{url:'res/atlas/niuniu_psd/shangdian/5949814981.json', type:Loader.ATLAS}
	], Laya.Handler.create(this, function() {
		async.parallel([fonts.regfont.bind(fonts, 'vip'), fonts.regfont.bind(fonts, 'coins'), fonts.regfont.bind(fonts, 'shuzi_1')],
		function() {
			cb(null, new HallUI());
		});
	}), null, Loader.ATLAS);
}
Laya.class(HallUI, "hallUI", hallUI);

var uidefine={
	'hall':createHallUI, 'game1':(require('./UIs/table.js')),'game2':(require('./UIs/table.js')),'game3':(require('./UIs/table.js')),'game4':(require('./UIs/table.js')) 
};
var uiCreator=function(name, opt, cb) {
	if (uidefine[name]) {
		return uidefine[name](opt, cb);
	}
	cb('no such view');
}
var ui={
	views:{},
	current:null,
	get:function(viewname, opt, cb) {
		var self=this;
		if (this.views[viewname]) return cb(null, this.views[viewname]);
		uiCreator(viewname, opt, function(err, view) {
			console.log(viewname, 'created');
			if (err) return cb(err);
			self.views[viewname]=view;
			cb(null, view);
		});
	},
	active:function(viewname, opt, cb) {
		var self=this;
		this.get(viewname, opt, function(err, view){
			if (err) return (cb && cb(err));
			if (view==self.current) return (cb && cb(null, view));
			if (self.current) {
				self.current.deactive && self.current.deactive();
				Laya.stage.removeChild(self.current);
			}
			Laya.SoundManager.stopAll();
			(view instanceof laya.display.Node) && Laya.stage.addChildAt(view, 0);
			self.current=view;
			cb && cb(null, view);
		});
	}
};

module.exports=ui;