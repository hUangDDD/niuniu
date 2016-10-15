var me=require('../myself.js'), etc=require('../etc.js'), printf=require('printf'), conf=require('../../bin/conf/main.js'), QRcode=require('../qrcode.js');
var url=require('url');
var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;

function ShopDlg() {
	ShopDlg.super(this);
	this.hitTestPrior=false;
}
Laya.class(ShopDlg, 'shopUI', shopUI);
function showShop() {
	Laya.loader.load([
		{url:'res/atlas/niuniu_psd/shangdian.json', type:Loader.ATLAS},
        //{url:'res/atlas/niuniu_psd/shangdian/5949814981.json', type:Loader.ATLAS}
	], Laya.Handler.create(this, function() {
		(new ShopDlg()).popup(true);
	}), null, Loader.ATLAS);		
}
function VipDlg() {
	VipDlg.super(this);
	this.hitTestPrior=false;
}
Laya.class(VipDlg, "VIPUI", VIPUI);

function BindMobileDlg() {
	BindMobileDlg.super(this);
	this.hitTestPrior=false;
}
Laya.class(BindMobileDlg, 'mobileUI', mobileUI);

function UsercenterDlg() {
	UsercenterDlg.super(this);
	this.hitTestPrior=false;

	if (me.face) this.userface.skin=me.face;
	this.username.text=me.nickname;
	this.usercoin.text=me.coin;
	this.userdiamond.text=me.diamond;
	this.userid.text=me._id;
	this.viplevel.text=printf('VIP%d', me.vip);
	this.exp.width=me.spendcash?(me.spendcash/conf.vip[me.vip].req.cash):0;

	this.btnMobile.on('click', null, function() {
		Laya.loader.load([
			{url:'res/atlas/niuniu_psd/mobile.json', type:Loader.ATLAS}
		], Laya.Handler.create(this, function() {
			(new BindMobileDlg()).popup(true);
		}), null, Loader.ATLAS);
	});
	this.btnBuyCoin.on('click', null, showShop);
	this.btnBuyDiamond.on('click', null, showShop);
}
Laya.class(UsercenterDlg, 'usercenterUI', usercenterUI);
function showUsercenter(cb) {
	Laya.loader.load([
		{url:'res/atlas/niuniu_psd/gerenzhongxin.json', type:Loader.ATLAS}
	], Laya.Handler.create(this, function() {
		var dlg=new UsercenterDlg();
		dlg.popup();
		(typeof cb=='function') && cb(null, dlg);
	}), null, Loader.ATLAS);
}

function cloneImage(img) {
	var obj=new Laya.Image();
	for (var i=0; i<spriteDataTempl.length; i++) obj[spriteDataTempl[i]]=img[spriteDataTempl[i]];
	obj.dataSource={skin:img.skin, sizeGrid:img.sizeGrid, source:img.source};
	return obj;
}
var labelDataTempl=['x', 'y', 'align', 'bgColor', 'bold', 'borderColor', 'color', 'font', 'fontSize', 'height', 'italic', 'leading', 'overflow', 'padding', 'stroke', 'strokeColor', 'text', 'textField', 'underline', 'underlineColor', 'valign', 'width', 'wordWrap', 'name', 'scaleX', 'scaleY'];
function cloneLabel(lab) {
	var obj=new Laya.Label();
	for (var i=0; i<labelDataTempl.length; i++) obj[labelDataTempl[i]]=lab[labelDataTempl[i]];
	return obj;
}
var btnDataTempl=['x', 'y', 'height',/*'iconOffset',*/'label','labelAlign','labelBold','labelColors','labelFont','labelPadding','labelSize','labelStroke','labelStrokeColor','selected','sizeGrid','skin','stateNum','strokeColors','text','toggle','width', 'name', 'scaleX', 'scaleY'];
function cloneButton(lab) {
	var obj=new Laya.Button();
	for (var i=0; i<btnDataTempl.length; i++) obj[btnDataTempl[i]]=lab[btnDataTempl[i]];
	return obj;
}
function clonePanel(p) {
	var obj=new Laya.Panel();
	obj.dataSource={x:p.x, y:p.y, width:p.width, height:p.height};
	return obj;
}
var spriteDataTempl=['alpha', 'autoSize', 'blendMode', 'cacheAs', 'cacheAsBitmap', 'customRenderEnable', 'filters', 'globalScaleX', 'globalScaleY', 'graphics', 'height', 'hitArea', 'hitTestPrior', 'mask', 'mouseEnabled', 'mouseThrough', 'optimizeScrollRect', 'pivotX', 'pivotY', 'rotation', 'scaleX', 'scaleY', 'scrollRect', 'skewX', 'skewY', 'staticCache', 'transform', 'width', 'x', 'y', 'zOrder', 'name'];
function cloneBox(s) {
	var obj=new Laya.Box();
	for (var i=0; i<spriteDataTempl.length; i++) obj[spriteDataTempl[i]]=s[spriteDataTempl[i]];
	for (var i=0; i<s.numChildren; i++) {
		var c=s.getChildAt(i);
		if (c instanceof Laya.Image) obj.addChild(cloneImage(c));
		else if (c instanceof Laya.Label) obj.addChild(cloneLabel(c));
		else if (c instanceof Laya.Button) obj.addChild(cloneButton(c));
		else console.log('not support clone', c);
	}
	return obj;
}

function showAllGift() {
	this.pnlMine && (this.pnlMine.visible=false);
	if (this.pnlAll) {
		this.pnlAll.visible=true;
		return;
	}
	var pnl=this.pnl;
	this.removeChild(this.pnl);

	//var /*bg=pnl.getChildByName('bg'), */icon=pnl.getChildByName('icon'), name=pnl.getChildByName('giftname'), price=pnl.getChildByName('giftprice'), btn=pnl.getChildByName('btnSend'), br=pnl.getChildByName('br');

	var pnlAll=this.pnlAll=clonePanel(pnl);
	//pnlAll.addChild(cloneImage(bg));
	var off=0, slotheight=this.templ.height, conf=this.conf;
	for (var n in conf) {
		var item=conf[n];
		var slot=cloneBox(this.templ);
		slot.y=off;
		off+=slotheight;
		for (var i=0; i<slot.numChildren; i++) {
			var ele=slot.getChildAt(i);
			ele.name && item[ele.name] && setEle(ele, item[ele.name]);
			switch (ele.name) {
				case 'count':
					ele.visible=false;
				break;
				case 'giftname':
					ele.text=n;
				break;
				case 'price':
					ele.text=printf('%d金币',item.coin);
				break;
				case 'btn':
					ele.clickHandler=Handler.create(null, function(name, gift) {
						console.log(name);
						if (me.coin<gift.coin) return new TipDlg(printf('金币不足%d，立刻购买', gift.coin), 'buy').popup();
						new SendGiftDlg(name).popup();
					}, [n, conf[n]], false);
				break;
			}
		}
		pnlAll.addChild(slot);
	}
	this.addChild(pnlAll);
}
function showMyGift() {
	var self=this;
	if (!this.pnlMine) { 
		var pnl=this.pnl;
		this.removeChild(this.pnl);
		this.pnlMine=clonePanel(pnl);
		this.addChild(this.pnlMine);
	}
	var pnlMine=this.pnlMine;
	pnlMine.visible=true;
	this.pnlAll && (this.pnlAll.visible=false);
	pnlMine.removeChildren();
	var off=0, slotheight=this.templ.height, conf=this.conf;
	for (var g in me.gifts) {
		var gift={url:conf[g].url, giftname:g, count:me.gifts[g], price:printf('%d金币',conf[g].coin), btn:'niuniu_psd/shangdian/chushou.png'};
		var slot=cloneBox(this.templ);
		slot.y=off;
		off+=slotheight;
		for (var i=0; i<slot.numChildren; i++) {
			var ele=slot.getChildAt(i);
			ele.name && gift[ele.name] && setEle(ele, gift[ele.name]);
			switch (ele.name) {
				case 'btn':
					ele.clickHandler=Handler.create(null, function(name) {
						_socket.sendp({c:'sellgift', giftid:name, count:me.gifts[name]});
						me.once('giftschgd', null, function() {
							showMyGift.call(self);
						})
					}, [g]);
				break;
			}
		}
		pnlMine.addChild(slot);
	}
}
function GiftDlg() {
	GiftDlg.super(this);
	this.hitTestPrior=false;

	this.btnAll.selected=true;
	this.btnMine.selected=false;
	this.btnAll.on('click', this, function(){
		//if (this.btnAll.selected) return;
		this.btnAll.selected=true;
		this.btnMine.selected=false;
		//this.btnAll.refresh();
		//this.btnMine.refresh();
		showAllGift.call(this);
	});
	this.btnMine.on('click', this, function() {
		//if (this.btnMine.selected) return;
		this.btnAll.selected=false;
		this.btnMine.selected=true;
		showMyGift.call(this);
	});

	//Laya.loader.load('conf/main.json', Handler.create(this, function(conf) {
		this.conf=conf.gifts;
		showAllGift.call(this);
	//}), null, Loader.JSON);

}
Laya.class(GiftDlg, 'giftUI', giftUI);
function showGift() {
	Laya.loader.load([
		{url:'res/atlas/niuniu_psd/shangdian.json', type:Loader.ATLAS},
	], Laya.Handler.create(this, function() {
		(new GiftDlg()).popup(true);
	}), null, Loader.ATLAS);
}
var tosomeone=null;
function SendGiftDlg(giftname) {
	SendGiftDlg.super(this);
	this.hitTestPrior=false;
	tosomeone && (this.donee.text=tosomeone);
	this.btnSend.on('click', this, function() {
		tosomeone=this.donee.text.trim();
		if (tosomeone.length==0) return new TipDlg('名字不能为空').popup();
		_socket.sendp({c:'gift', from:me._id, to:tosomeone, giftname:giftname, giftnum:1});
	});
}
Laya.class(SendGiftDlg, 'confirmSendGiftUI',confirmSendGiftUI);

function _std(){this.close()}
var tipDlgBtnName={'buy':{skin:'niuniu_psd/shangdian/-_0004_5.png',click:showShop}, 'ok':{skin:'niuniu_psd/shangdian/111.png'}};
function TipDlg(str, btn, close) {
	TipDlg.super(this);
	this.hitTestPrior=false;

	if (btn instanceof Handler) {
		close=btn;
		btn=null;
	}
	this.info.text=str;
	btn=btn||'';
	if (typeof btn=='string') {
		btn=tipDlgBtnName[btn]?tipDlgBtnName[btn]:tipDlgBtnName['ok'];
	}
	if (typeof btn=='object') {
		this.btn.skin=btn.skin;
		this.btn.on('click', this, btn.click?btn.click:etc._noop);
	}

	close && (this.closeHandler=close);
	this.frameOnce(1, this, function() {
		var bg=this.parent.getChildAt(0);
		bg.on('click', this, function() {
			this.close();
		});
	});
}
Laya.class(TipDlg, 'tipUI', tipUI);
function showTip(msg, btn, closehandler) {
	Laya.loader.load([
		{url:'res/atlas/niuniu_psd/shangdian.json', type:Loader.ATLAS},
        //{url:'res/atlas/niuniu_psd/shangdian/5949814981.json', type:Loader.ATLAS}
	], Laya.Handler.create(this, function() {
		(new TipDlg(msg, btn, closehandler)).popup();
	}), null, Loader.ATLAS);
	return {popup:etc._noop};
}

function SettingDlg() {
	SettingDlg.super(this);
	this.hitTestPrior=false;
	this.btnSE.selectedIndex=Laya.SoundManager.soundMuted?1:0;
	this.btnBGM.selectedIndex=Laya.SoundManager.musicMuted?1:0;
	this.btnSE.selectHandler=new Handler(this, function(idx) {
		Laya.SoundManager.soundMuted=idx;
	});
	this.btnBGM.selectHandler=new Handler(this, function(idx) {
		Laya.SoundManager.musicMuted=idx;
	})
}
Laya.class(SettingDlg, 'settingUI', settingUI);
var qrDiv;
function QRDlg() {
	QRDlg.super(this);
	this.hitTestPrior=false;
	if (!qrDiv) {
		qrDiv=document.createElement('div');
		qrDiv.style.position='absolute';
		var r=Laya.stage.clientScaleX/window.devicePixelRatio;
		var pos={width:147*r, height:147*r, left:(640-147)/2*r, top:(1120-147)/2*r};
		for (var p in pos) {
			qrDiv.style[p]=''+pos[p]+'px';
		}
		document.body.appendChild(qrDiv);
		var u={protocol:location.protocol, hostname:location.hostname, port:location.port, pathname:location.pathname, search:'?share='+encodeURIComponent(me._id)};
		new QRcode(qrDiv, {text:url.format(u), width:pos.width, height:pos.height});
	}
	else {
		qrDiv.style.display='block';
	}
	
	this.closeHandler=Handler.create(null, function() {
		qrDiv.style.display='none';
	});
}
Laya.class(QRDlg, 'QRUI', QRUI);
function GMDlg() {
	GMDlg.super(this);
	this.hitTestPrior=false;
}
Laya.class(GMDlg, 'GMUI', GMUI);
var _isdate=/.*-.*-.*:.*:.*/;
function correctDateString(s) {
	if (s && typeof s ==='object') {
		for (var key in s) {
			s[key]=correctDateString(s[key]);
		}
		return s;
	}
	if (typeof s ==='string' && _isdate.test(s)) {
		var d=new Date(s);
		if (d.toString!='Invalid Date') return d; 
	}
	return s;
}
function toDateString(data)
{
	var _year = data.getFullYear();
	var _month = data.getMonth() >= 9 ? (data.getMonth() + 1) : "0" + (data.getMonth() + 1);
	var _date = data.getDate() >= 10 ? data.getDate() : "0" + data.getDate();
	var _h = data.getHours() >= 10 ? data.getHours() : "0" + data.getHours();
	var _m = data.getMinutes() >= 10 ? data.getMinutes() : "0" + data.getMinutes();
	var _s = data.getSeconds() >= 10 ? data.getSeconds() : "0" + data.getSeconds();

	return _year + '-' + _month + '-' + _date + " " + _h + ":" + _m + ":" + _s;
}
function setEle(ele, str) {
	if (ele instanceof Laya.Image || ele instanceof Laya.Button) {
		ele.skin=str;
	} else {
		var d=correctDateString(str);
		if (d instanceof Date) ele.text=toDateString(d);
		else ele.text=d;
	}
}
function MailDlg() {
	MailDlg.super(this);
	this.hitTestPrior=false;
	
	var self=this;
	this.templ.visible=false;
	var templ=this.templ;
	_socket.sendp({c:'mails'});
	function drawMails(mails) {
		self.pnl.removeChildren();
		var off=0, slotheight=templ.height;
		for (var i=0; i<mails.length; i++) {
			var _mail=mails[i];
			for (var g in _mail.content.gifts) {
				_mail.icon=conf.gifts[g]&&conf.gifts[g].url;
				_mail['count']=_mail.content.gifts[g];
			}
			var _mailslot=cloneBox(templ);
			_mailslot.visible=true;
			for (var c=0; c<_mailslot.numChildren; c++) {
				var el=_mailslot.getChildAt(c);
				if (el.name && _mail[el.name]) {
					setEle(el, _mail[el.name]);
				}
				if (el instanceof Laya.Button) {
					el.clickHandler=Handler.create(self, function(mail, idx, displayItem) {
						_socket.sendp({c:'rcvmail', mailid:mail._id});
						me.once('giftschgd', null, function() {
							// draw some ani
							var icon_org=displayItem.getChildByName('icon'), icon=cloneImage(icon_org);
							var pt=new Laya.Point(icon_org.x, icon_org.y);
							var pt2=icon_org.localToGlobal(pt);
							pt2.pivotX=icon.width/2; pt2.pivotY=icon.height/2;
							icon.dataSource=pt2;
							Laya.stage.addChild(icon);
							Laya.Tween.to(icon, {x:356, y:1079, rotation:360}, 300, null, Handler.create(null, function() {
								Laya.stage.removeChild(icon);
							}));
							mails.splice(idx, 1);
							drawMails(mails);
						})
					}, [_mail, i, _mailslot]);
				}
			}
			_mailslot.y=off;
			off+=slotheight;
			self.pnl.addChild(_mailslot);
		}
	}
	netmsg.once('mails', null, function(pack) {
		drawMails(pack.mails);
	});
}
Laya.class(MailDlg, 'mailUI', mailUI);

var orderImageMap=['niuniu_psd/shangdian/1st.png','niuniu_psd/shangdian/2nd.png','niuniu_psd/shangdian/3rd.png']
function showCoinBoard() {
	if (!this.pnlCoin) {
		this.pnlCoin=clonePanel(this.pnl);
		this.addChild(this.pnlCoin);
	}
	var pnlCoin=this.pnlCoin;
	pnlCoin.visible=true;
	this.pnlDiamond && (this.pnlDiamond.visible=false);

	_socket.sendp({c:'board', type:'coin'});
	netmsg.once('board', this, function(msg) {
		if (msg.type!='coin') return;
		pnlCoin.removeChildren();
		var off=0, slotheight=this.templ.height;
		for (var i=0; i<msg.board.length; i++) {
			var item=msg.board[i];
			item.no=i>2?'':orderImageMap[i];item.coinstr=etc.toCoinStr(item.coin);item.viplevel=printf('VIP%d', item.vip||0);
			item.nickname=item.nickname||item._id;
			var slot=cloneBox(this.templ);
			for (var c=0; c<slot.numChildren; c++) {
				var ele=slot.getChildAt(c);
				ele.name && item[ele.name] && setEle(ele, item[ele.name]);
				if (ele.name=='no') {
					if (i>2) ele.label=''+(i+1);
					else ele.label='';
				} 
			}
			slot.y=off;
			pnlCoin.addChild(slot);
			off+=slotheight;
		}
	});
}
function showDiamondBoard() {
	if (!this.pnlDiamond) {
		this.pnlDiamond=clonePanel(this.pnl);
		this.addChild(this.pnlDiamond);
	}
	var pnlDiamond=this.pnlDiamond;
	pnlDiamond.visible=true;
	this.pnlCoin && (this.pnlCoin.visible=false);

	_socket.sendp({c:'board', type:'diamond'});
	netmsg.once('board', this, function(msg) {
		if (msg.type!='diamond') return;
		pnlDiamond.removeChildren();
		var off=0, slotheight=this.templ.height;
		for (var i=0; i<msg.board.length; i++) {
			var item=msg.board[i];
			item.no=i>2?'':orderImageMap[i];item.coinstr=etc.toCoinStr(item.coin);item.viplevel=printf('VIP%d', item.vip||0);
			item.nickname=item.nickname||item._id;
			var slot=cloneBox(this.templ);
			for (var c=0; c<slot.numChildren; c++) {
				var ele=slot.getChildAt(c);
				ele.name && item[ele.name] && setEle(ele, item[ele.name]);
				if (ele.name=='no') {
					if (i>2) ele.label=''+(i+1);
					else ele.label='';
				} 
				else if (ele.name=='currency') ele.skin='niuniu_psd/shangdian/-_0000_1.png';
			}
			slot.y=off;
			pnlDiamond.addChild(slot);
			off+=slotheight;			
		}
	});
}
function BoardDlg() {
	BoardDlg.super(this);
	this.hitTestPrior=false;
	this.removeChild(this.pnl);

	this.btnCoin.clickHandler=Handler.create(this, showCoinBoard, null, false);
	this.btnDiamond.clickHandler=Handler.create(this, showDiamondBoard, null, false);

	showCoinBoard.call(this);
}
Laya.class(BoardDlg, 'boardUI', boardUI);

function TrendDlg(xiazhuqu) {
	TrendDlg.super(this);
	this.hitTestPrior=false;
	var win=new Laya.Image('niuniu_psd/shangdian/dui.png'), lose=new Laya.Image('niuniu_psd/shangdian/cha.png');
	win.pivot(win.width/2, win.height/2);
	lose.pivot(lose.width/2, lose.height/2);
	for (var i=0; i<xiazhuqu.length; i++) {
		var container=this['xiazhuqu'+(i+1)];
		if (!Array.isArray(xiazhuqu[i].his)) continue;
		var shownhis=xiazhuqu[i].his.slice(-16);
		var off=70, delta=30, Y=container.height/2;
		for (var j=0; j<shownhis.length; j++) {
			var sign=(shownhis[j]>=0?cloneImage(win):cloneImage(lose));
			sign.x=off;sign.y=Y;
			container.addChild(sign);
			off+=delta;
		}
	}
}
Laya.class(TrendDlg, 'trendUI', trendUI);

module.exports={
    ShopDlg:ShopDlg,
    UsercenterDlg:UsercenterDlg,
    VipDlg:VipDlg,
    BindMobileDlg:BindMobileDlg,
	TipDlg:TipDlg,
	SettingDlg:SettingDlg,
	QRDlg:QRDlg,
	GMDlg:GMDlg,
	MailDlg:MailDlg,
	BoardDlg:BoardDlg,
	TrendDlg:TrendDlg,

    showShop:showShop,
    showUsercenter:showUsercenter,
	showGift:showGift,
	showTip:showTip,

	cloneBox:cloneBox,
	cloneImage:cloneImage,
	cloneButton:cloneButton,
	cloneLabel:cloneLabel,
	clonePanel:clonePanel
}