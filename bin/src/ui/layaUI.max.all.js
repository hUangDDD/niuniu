var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var boardUI=(function(_super){
		function boardUI(){
			
		    this.btnCoin=null;
		    this.btnDiamond=null;
		    this.pnl=null;
		    this.templ=null;
		    this.face=null;

			boardUI.__super.call(this);
		}

		CLASS$(boardUI,'ui.boardUI',_super);
		var __proto__=boardUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(boardUI.uiView);
		}

		STATICATTR$(boardUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":545,"height":679},"child":[{"type":"Image","props":{"y":0,"x":0,"width":545,"skin":"niuniu_psd/shangdian/tongyong_di_2.png","height":679,"sizeGrid":"3,3,3,3"}},{"type":"Image","props":{"y":3,"x":3,"width":539,"skin":"niuniu_psd/shangdian/tongyong_di_1.png","sizeGrid":"0,0,0,0,1"}},{"type":"Image","props":{"y":-30,"x":92,"skin":"niuniu_psd/shangdian/zoushidi.png"}},{"type":"Button","props":{"y":-6,"x":511,"skin":"niuniu_psd/hall/guanbi.png","name":"close"}},{"type":"Image","props":{"y":103,"x":21,"width":497,"skin":"niuniu_psd/shangdian/centerdi.png","name":"bg","height":554,"sizeGrid":"12,12,12,12"}},{"type":"Image","props":{"y":-18,"x":225,"skin":"niuniu_psd/shangdian/caifubang.png"}},{"type":"CheckBox","props":{"y":64,"x":38,"var":"btnCoin","stateNum":"1","skin":"niuniu_psd/shangdian/caifupaihang.png","name":"pnlCoin"}},{"type":"CheckBox","props":{"y":64,"x":149,"var":"btnDiamond","stateNum":"1","skin":"niuniu_psd/shangdian/zhuanshipaihang.png","name":"pnlDiamond"}},{"type":"Panel","props":{"y":103,"x":21,"width":497,"var":"pnl","vScrollBarSkin":"niuniu_psd/shangdian/scr.png","name":"ppp","mouseEnabled":true,"height":554},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"templ","mouseEnabled":true},"child":[{"type":"Image","props":{"y":71,"x":20,"width":448,"skin":"niuniu_psd/shangdian/-_0003_4.png","height":2}},{"type":"Label","props":{"y":38,"x":164,"width":158,"text":"我的名字","name":"nickname","height":16,"fontSize":13,"font":"SimHei","color":"#ffffff","bold":true}},{"type":"Image","props":{"y":16,"x":104,"width":45,"var":"face","skin":"niuniu_psd/hall/01_touxiang2.png","height":45}},{"type":"Image","props":{"y":13.000000000000043,"x":101.00000000000001,"width":50,"skin":"niuniu_psd/hall/touxiangkuang.png","height":50}},{"type":"Image","props":{"y":9.000000000000028,"x":123.00000000000003,"skin":"niuniu_psd/hall/204.png","scaleY":0.6,"scaleX":0.6}},{"type":"Label","props":{"y":10.800000000000068,"x":124.80000000000001,"width":51,"text":"VIP9","scaleY":0.6,"scaleX":0.6,"padding":"2,0,0,0","name":"viplevel","height":20,"font":"vip","color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":26,"x":330,"width":30,"skin":"niuniu_psd/shangdian/jinbi.png","name":"currency","height":32}},{"type":"Label","props":{"y":34,"x":375,"width":102,"text":"1.5万","name":"coinstr","height":25,"font":"coins"}},{"type":"Button","props":{"y":28,"x":28,"width":47,"stateNum":"1","name":"no","mouseEnabled":false,"labelPadding":"-10, 0, 0, 0","labelFont":"shuzi_1","label":"3","height":29}}]}]}]};}
		]);
		return boardUI;
	})(Dialog);
var checkInUI=(function(_super){
		function checkInUI(){
			

			checkInUI.__super.call(this);
		}

		CLASS$(checkInUI,'ui.checkInUI',_super);
		var __proto__=checkInUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(checkInUI.uiView);
		}

		STATICATTR$(checkInUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":553,"height":375},"child":[{"type":"Image","props":{"y":0,"x":0,"width":553,"skin":"niuniu_psd/shangdian/tongyong_di_2.png","height":375,"sizeGrid":"3,3,3,3"}},{"type":"Image","props":{"y":3,"x":3,"width":547,"skin":"niuniu_psd/shangdian/tongyong_di_1.png","sizeGrid":"0,0,0,0,1"}},{"type":"Button","props":{"y":-8,"x":518,"skin":"niuniu_psd/hall/guanbi.png","name":"close"}},{"type":"Image","props":{"y":3,"x":234,"skin":"niuniu_psd/shangdian/qiandao.png"}},{"type":"Label","props":{"y":290,"x":78,"width":417,"text":"当前VIP1，VIP4以上的玩家可以领取双倍奖励","height":20,"fontSize":18,"font":"SimHei","color":"#e7f712","bold":true,"align":"center"}},{"type":"Label","props":{"y":42,"x":72,"text":"第一天","fontSize":18,"font":"SimHei","color":"#fff","bold":true},"child":[{"type":"Image","props":{"y":23,"x":-21,"width":89,"skin":"niuniu_psd/shangdian/r_di.png","height":89,"sizeGrid":"12,12,12,12"},"child":[{"type":"Image","props":{"y":11,"x":24,"skin":"niuniu_psd/shangdian/jinbi.png"}},{"type":"Label","props":{"y":64,"x":22,"width":52,"text":"1000","padding":"-11,0,0,0","height":16,"font":"shuzi_1","align":"center"}}]}]},{"type":"Label","props":{"y":42,"x":178,"text":"第二天","fontSize":18,"font":"SimHei","color":"#fff","bold":true},"child":[{"type":"Image","props":{"y":23,"x":-21,"width":89,"skin":"niuniu_psd/shangdian/r_di.png","height":89,"sizeGrid":"12,12,12,12"},"child":[{"type":"Image","props":{"y":11,"x":24,"skin":"niuniu_psd/shangdian/jinbi.png"}},{"type":"Label","props":{"y":64,"x":22,"width":52,"text":"1880","padding":"-11,0,0,0","height":16,"font":"shuzi_1","align":"center"}}]}]},{"type":"Label","props":{"y":42,"x":290,"text":"第三天","fontSize":18,"font":"SimHei","color":"#fff","bold":true},"child":[{"type":"Image","props":{"y":23,"x":-21,"width":89,"skin":"niuniu_psd/shangdian/r_di.png","height":89,"sizeGrid":"12,12,12,12"},"child":[{"type":"Image","props":{"y":11,"x":24,"skin":"niuniu_psd/shangdian/jinbi.png"}},{"type":"Label","props":{"y":64,"x":22,"width":52,"text":"3000","padding":"-11,0,0,0","height":16,"font":"shuzi_1","align":"center"}}]}]},{"type":"Label","props":{"y":42,"x":411,"text":"第四天","fontSize":18,"font":"SimHei","color":"#fff","bold":true},"child":[{"type":"Image","props":{"y":23,"x":-21,"width":89,"skin":"niuniu_psd/shangdian/r_di.png","height":89,"sizeGrid":"12,12,12,12"},"child":[{"type":"Image","props":{"y":11,"x":24,"skin":"niuniu_psd/shangdian/jinbi.png"}},{"type":"Label","props":{"y":64,"x":22,"width":52,"text":"4880","padding":"-11,0,0,0","height":16,"font":"shuzi_1","align":"center"}}]}]},{"type":"Label","props":{"y":162,"x":131,"text":"第五天","fontSize":18,"font":"SimHei","color":"#fff","bold":true},"child":[{"type":"Image","props":{"y":23,"x":-21,"width":89,"skin":"niuniu_psd/shangdian/r_di.png","height":89,"sizeGrid":"12,12,12,12"},"child":[{"type":"Image","props":{"y":11,"x":24,"skin":"niuniu_psd/shangdian/jinbi.png"}},{"type":"Label","props":{"y":64,"x":22,"width":52,"text":"5000","padding":"-11,0,0,0","height":16,"font":"shuzi_1","align":"center"}}]}]},{"type":"Label","props":{"y":162,"x":247,"text":"第六天","fontSize":18,"font":"SimHei","color":"#fff","bold":true},"child":[{"type":"Image","props":{"y":23,"x":-21,"width":89,"skin":"niuniu_psd/shangdian/r_di.png","height":89,"sizeGrid":"12,12,12,12"},"child":[{"type":"Image","props":{"y":11,"x":24,"skin":"niuniu_psd/shangdian/jinbi.png"}},{"type":"Label","props":{"y":64,"x":22,"width":52,"text":"6880","padding":"-11,0,0,0","height":16,"font":"shuzi_1","align":"center"}}]}]},{"type":"Label","props":{"y":162,"x":370,"text":"第七天","fontSize":18,"font":"SimHei","color":"#fff","bold":true},"child":[{"type":"Image","props":{"y":23,"x":-21,"width":89,"skin":"niuniu_psd/shangdian/r_di.png","height":89,"sizeGrid":"12,12,12,12"},"child":[{"type":"Image","props":{"y":11,"x":24,"skin":"niuniu_psd/shangdian/jinbi.png"}},{"type":"Label","props":{"y":64,"x":22,"width":52,"text":"8880","padding":"-11,0,0,0","height":16,"font":"shuzi_1","align":"center"}}]}]},{"type":"Image","props":{"y":312,"x":32,"width":496,"skin":"niuniu_psd/shangdian/-_0003_4.png","name":"br","height":2}},{"type":"Button","props":{"y":325,"x":234,"skin":"niuniu_psd/shangdian/lingqu.png"}}]};}
		]);
		return checkInUI;
	})(Dialog);
var confirmSendGiftUI=(function(_super){
		function confirmSendGiftUI(){
			
		    this.btnSend=null;
		    this.donee=null;

			confirmSendGiftUI.__super.call(this);
		}

		CLASS$(confirmSendGiftUI,'ui.confirmSendGiftUI',_super);
		var __proto__=confirmSendGiftUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(confirmSendGiftUI.uiView);
		}

		STATICATTR$(confirmSendGiftUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":391,"height":191},"child":[{"type":"Image","props":{"y":0,"x":0,"width":391,"skin":"niuniu_psd/shangdian/tongyong_di_2.png","height":191,"sizeGrid":"3,3,3,3"}},{"type":"Image","props":{"y":3,"x":3,"width":384,"skin":"niuniu_psd/shangdian/tongyong_di_1.png","sizeGrid":"0,0,0,0,1","height":35}},{"type":"Button","props":{"y":-8,"x":356,"skin":"niuniu_psd/hall/guanbi.png","name":"close"}},{"type":"Image","props":{"y":50,"x":20,"width":351,"skin":"niuniu_psd/shangdian/r_di.png","height":126,"sizeGrid":"12,12,12,12"}},{"type":"Button","props":{"y":127,"x":157,"var":"btnSend","skin":"niuniu_psd/shangdian/111.png","name":"ok"}},{"type":"Label","props":{"y":84,"x":59,"text":"收件人","fontSize":16,"font":"SimHei","color":"#ffffff","bold":true}},{"type":"TextInput","props":{"y":79,"x":134,"width":196,"var":"donee","skin":"niuniu_psd/shangdian/tongyong_di_3.png","height":25,"fontSize":14,"color":"#ffffff","bold":true,"sizeGrid":"0,0,2,0"}}]};}
		]);
		return confirmSendGiftUI;
	})(Dialog);
var giftUI=(function(_super){
		function giftUI(){
			
		    this.pnl=null;
		    this.templ=null;
		    this.btnAll=null;
		    this.btnMine=null;

			giftUI.__super.call(this);
		}

		CLASS$(giftUI,'ui.giftUI',_super);
		var __proto__=giftUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(giftUI.uiView);
		}

		STATICATTR$(giftUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":504,"height":626},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"niuniu_psd/hall/di.png"}},{"type":"Button","props":{"y":-7,"x":471,"skin":"niuniu_psd/hall/guanbi.png","name":"close"}},{"type":"Image","props":{"y":90,"x":24,"width":460,"skin":"niuniu_psd/shangdian/centerdi.png","name":"bg","height":511,"sizeGrid":"12,12,12,12"}},{"type":"Panel","props":{"y":90,"x":24,"width":460,"var":"pnl","name":"pnl","height":511},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"templ","name":"templ","mouseEnabled":true},"child":[{"type":"Image","props":{"y":85,"x":3,"width":448,"skin":"niuniu_psd/shangdian/-_0003_4.png","name":"br","height":2}},{"type":"Image","props":{"y":24,"x":44,"skin":"niuniu_psd/shangdian/04_liwu.png","name":"url"}},{"type":"Label","props":{"y":63,"x":91,"width":28,"text":"2","stroke":2,"name":"count","height":16,"fontSize":16,"font":"SimHei","color":"#ffffff","bold":true,"align":"center"}},{"type":"Label","props":{"y":24,"x":147,"width":96,"text":"话费","name":"giftname","height":16,"fontSize":16,"font":"SimHei","color":"#ffffff","bold":true}},{"type":"Label","props":{"y":53,"x":147,"width":96,"text":"10000金币","name":"price","height":16,"fontSize":16,"font":"SimHei","color":"#ffffff","bold":true}},{"type":"Button","props":{"y":29,"x":338,"skin":"niuniu_psd/shangdian/zengsong.png","name":"btn"}}]}]},{"type":"CheckBox","props":{"y":40,"x":24,"var":"btnAll","stateNum":"2","skin":"niuniu_psd/shangdian/liwu.png"}},{"type":"CheckBox","props":{"y":40,"x":198,"var":"btnMine","stateNum":"2","skin":"niuniu_psd/shangdian/wodeliwu.png"}}]};}
		]);
		return giftUI;
	})(Dialog);
var GMUI=(function(_super){
		function GMUI(){
			

			GMUI.__super.call(this);
		}

		CLASS$(GMUI,'ui.GMUI',_super);
		var __proto__=GMUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GMUI.uiView);
		}

		STATICATTR$(GMUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":392,"height":307},"child":[{"type":"Image","props":{"y":0,"x":0,"width":392,"skin":"niuniu_psd/shangdian/tongyong_di_2.png","height":307,"sizeGrid":"3,3,3,3"}},{"type":"Image","props":{"y":4,"x":3,"width":386,"skin":"niuniu_psd/shangdian/tongyong_di_1.png","sizeGrid":"0,0,0,0,1"}},{"type":"Button","props":{"y":-9,"x":359,"skin":"niuniu_psd/hall/guanbi.png","name":"close"}},{"type":"Button","props":{"y":250,"x":156,"skin":"niuniu_psd/shangdian/111.png","name":"ok"}},{"type":"TextArea","props":{"y":62,"x":19,"width":348,"text":"客服美美24小时为您服务哦，加微信223456联系我们","skin":"niuniu_psd/shangdian/r_di.png","padding":"20,10,20,62","multiline":true,"height":178,"fontSize":20,"color":"#fff","bold":true,"sizeGrid":"12,12,12,12"}},{"type":"Image","props":{"y":53,"x":-66,"skin":"niuniu_psd/shangdian/01_nvlang2.png"}}]};}
		]);
		return GMUI;
	})(Dialog);
var hallUI=(function(_super){
		function hallUI(){
			
		    this.userface=null;
		    this.viplevel=null;
		    this.room1=null;
		    this.room3=null;
		    this.room4=null;
		    this.room2=null;
		    this.btnGift=null;
		    this.username=null;
		    this.btnShop=null;
		    this.usercoin=null;
		    this.btnMail=null;
		    this.btnKefu=null;
		    this.btnRich=null;
		    this.btnFree=null;
		    this.btnExtra=null;

			hallUI.__super.call(this);
		}

		CLASS$(hallUI,'ui.hallUI',_super);
		var __proto__=hallUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(hallUI.uiView);
		}

		STATICATTR$(hallUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":640,"name":"vipback","height":1140},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"niuniu_psd/hall/219.jpg"}},{"type":"Image","props":{"y":172,"x":0,"skin":"niuniu_psd/hall/218.png"}},{"type":"Image","props":{"y":212,"x":0,"skin":"niuniu_psd/hall/218.png"}},{"type":"Image","props":{"y":55,"x":119,"skin":"niuniu_psd/hall/217.png"}},{"type":"Image","props":{"y":56,"x":135,"skin":"niuniu_psd/hall/217.png","scaleX":-1}},{"type":"Image","props":{"y":779,"x":14,"skin":"niuniu_psd/hall/210.png"}},{"type":"Image","props":{"y":1047,"x":23,"width":79,"var":"userface","skin":"niuniu_psd/hall/01_touxiang2.png","height":79,"cacheAsBitmap":true,"cacheAs":"bitmap"},"child":[{"type":"Image","props":{"y":-6,"x":-5,"skin":"niuniu_psd/hall/touxiangkuang.png","name":"faceback","mouseEnabled":true}},{"type":"Image","props":{"y":-15,"x":46.00000000000001,"skin":"niuniu_psd/hall/204.png","name":"vipback"}},{"type":"Label","props":{"y":-12,"x":49,"width":51,"var":"viplevel","text":"VIP9","padding":"2,0,0,0","height":20,"font":"vip","color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":239,"x":14,"var":"room1","skin":"niuniu_psd/hall/208.png","mouseEnabled":true}},{"type":"Image","props":{"y":509,"x":14,"var":"room3","skin":"niuniu_psd/hall/207.png"}},{"type":"Image","props":{"y":509,"x":331,"var":"room4","skin":"niuniu_psd/hall/206.png"}},{"type":"Image","props":{"y":239,"x":331,"var":"room2","skin":"niuniu_psd/hall/205.png"}},{"type":"Button","props":{"y":1079,"x":356,"var":"btnGift","skin":"niuniu_psd/hall/214.png","mouseEnabled":true}},{"type":"Image","props":{"y":74,"x":358,"visible":false,"skin":"niuniu_psd/hall/202.png"}},{"type":"Label","props":{"y":185,"x":11,"width":612,"skin":"template/文本框/label.png","height":32,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":1073,"x":115,"width":197,"var":"username","text":"玩家昵称","skin":"template/文本框/label.png","height":32,"fontSize":18,"color":"#ffffff","cacheAsBitmap":true}},{"type":"Button","props":{"y":1079,"x":500,"var":"btnShop","skin":"niuniu_psd/hall/212.png"}},{"type":"Label","props":{"y":1102,"x":152,"width":178,"var":"usercoin","valign":"vcenter","text":"1234","padding":"3,4,0,0","overflow":"hidden","height":28,"font":"coins","cacheAsBitmap":true,"align":"left"}},{"type":"Button","props":{"y":3,"x":277,"var":"btnMail","skin":"niuniu_psd/hall/xiaoxi.png"}},{"type":"Button","props":{"y":3,"x":365,"var":"btnKefu","skin":"niuniu_psd/hall/kefu.png"}},{"type":"Button","props":{"y":3,"x":453,"var":"btnRich","skin":"niuniu_psd/hall/caifubang.png"}},{"type":"Button","props":{"y":61,"x":477,"var":"btnFree","skin":"niuniu_psd/hall/mianfeijinbi.png"}},{"type":"Button","props":{"y":3,"x":541,"var":"btnExtra","skin":"niuniu_psd/hall/gengduo.png","mouseThrough":true}}]};}
		]);
		return hallUI;
	})(View);
var mailUI=(function(_super){
		function mailUI(){
			
		    this.pnl=null;
		    this.templ=null;

			mailUI.__super.call(this);
		}

		CLASS$(mailUI,'ui.mailUI',_super);
		var __proto__=mailUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(mailUI.uiView);
		}

		STATICATTR$(mailUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":502,"height":624},"child":[{"type":"Image","props":{"y":0,"x":0,"width":502,"skin":"niuniu_psd/shangdian/tongyong_di_2.png","height":624,"sizeGrid":"3,3,3,3"}},{"type":"Image","props":{"y":3,"x":3,"width":496,"skin":"niuniu_psd/shangdian/tongyong_di_1.png","sizeGrid":"0,0,0,0,1"}},{"type":"Button","props":{"y":-8,"x":469,"skin":"niuniu_psd/hall/guanbi.png","name":"close"}},{"type":"Image","props":{"y":89,"x":23,"width":460,"skin":"niuniu_psd/shangdian/centerdi.png","name":"bg","height":511,"sizeGrid":"12,12,12,12"}},{"type":"Panel","props":{"y":89,"x":23,"width":460,"var":"pnl","vScrollBarSkin":"niuniu_psd/shangdian/scr.png","name":"ppp","height":511},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"templ"},"child":[{"type":"Image","props":{"y":85,"x":3,"width":448,"skin":"niuniu_psd/shangdian/-_0003_4.png","name":"br","height":2}},{"type":"Image","props":{"y":24,"x":34,"skin":"niuniu_psd/shangdian/04_liwu.png","name":"icon"}},{"type":"Label","props":{"y":24,"x":120,"width":59,"text":"发件人","height":16,"fontSize":16,"font":"SimHei","color":"#ffffff","bold":true}},{"type":"Label","props":{"y":53,"x":120,"width":69,"text":"发送时间","height":16,"fontSize":16,"font":"SimHei","color":"#ffffff","bold":true}},{"type":"Button","props":{"y":29,"x":338,"skin":"niuniu_psd/shangdian/lingqu.png","name":"btnSend"}},{"type":"Label","props":{"y":25,"x":190,"width":96,"text":"-","name":"from","height":16,"fontSize":16,"font":"SimHei","color":"#ffffff","bold":true}},{"type":"Label","props":{"y":61,"x":83,"width":28,"text":"2","stroke":2,"name":"count","height":16,"fontSize":16,"font":"SimHei","color":"#ffffff","bold":true,"align":"center"}},{"type":"Label","props":{"y":56,"x":190,"width":128,"text":"2010-10-09 23:59:59","name":"_t","height":16,"fontSize":12,"font":"SimHei","color":"#ffffff","bold":true}}]}]}]};}
		]);
		return mailUI;
	})(Dialog);
var mobileUI=(function(_super){
		function mobileUI(){
			
		    this.kkk=null;

			mobileUI.__super.call(this);
		}

		CLASS$(mobileUI,'ui.mobileUI',_super);
		var __proto__=mobileUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(mobileUI.uiView);
		}

		STATICATTR$(mobileUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":392,"height":358},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"niuniu_psd/mobile/120.png"}},{"type":"Image","props":{"y":154,"x":126,"skin":"niuniu_psd/mobile/118.png"}},{"type":"Image","props":{"y":245,"x":126,"skin":"niuniu_psd/mobile/118.png"}},{"type":"Label","props":{"y":56,"x":47,"width":318,"text":"绑定手机号可以保证您的帐号安全，","skin":"template/文本框/label.png","height":25,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":85,"x":22,"width":341,"text":"绑定成功后您将获得100万金币的奖励！","skin":"template/文本框/label.png","height":29,"fontSize":20,"color":"#ffffff"}},{"type":"Button","props":{"y":191,"x":232,"var":"kkk","skin":"niuniu_psd/mobile/115.png"}},{"type":"Button","props":{"y":284,"x":231,"skin":"niuniu_psd/mobile/119.png"}},{"type":"Button","props":{"y":-11,"x":359,"skin":"niuniu_psd/hall/guanbi.png","name":"close"}}]};}
		]);
		return mobileUI;
	})(Dialog);
var QRUI=(function(_super){
		function QRUI(){
			

			QRUI.__super.call(this);
		}

		CLASS$(QRUI,'ui.QRUI',_super);
		var __proto__=QRUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(QRUI.uiView);
		}

		STATICATTR$(QRUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":402,"height":273},"child":[{"type":"Image","props":{"y":0,"x":0,"width":402,"skin":"niuniu_psd/shangdian/tongyong_di_2.png","height":273,"sizeGrid":"3,3,3,3"}},{"type":"Image","props":{"y":3,"x":3,"width":396,"skin":"niuniu_psd/shangdian/tongyong_di_1.png","sizeGrid":"0,0,0,0,1"}},{"type":"Button","props":{"y":-5,"x":368,"skin":"niuniu_psd/hall/guanbi.png","name":"close"}},{"type":"Image","props":{"y":5,"x":155,"skin":"niuniu_psd/shangdian/erweima.png"}},{"type":"Label","props":{"y":212,"x":62,"width":288,"text":"长按二维码自动生成游戏链接，\\n分享给好友","overflow":"hidden","height":46,"fontSize":17,"font":"SimHei","color":"#d2e43a","bold":true,"align":"center"}}]};}
		]);
		return QRUI;
	})(Dialog);
var settingUI=(function(_super){
		function settingUI(){
			
		    this.btnSE=null;
		    this.btnBGM=null;

			settingUI.__super.call(this);
		}

		CLASS$(settingUI,'ui.settingUI',_super);
		var __proto__=settingUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(settingUI.uiView);
		}

		STATICATTR$(settingUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":335,"height":226},"child":[{"type":"Image","props":{"y":0,"x":0,"width":335,"skin":"niuniu_psd/shangdian/tongyong_di_2.png","height":226,"sizeGrid":"3,3,3,3"}},{"type":"Image","props":{"y":3,"x":3,"width":329,"skin":"niuniu_psd/shangdian/tongyong_di_1.png","sizeGrid":"0,0,0,0,1"}},{"type":"Button","props":{"y":-7,"x":301,"skin":"niuniu_psd/hall/guanbi.png","name":"close"}},{"type":"Label","props":{"y":52,"x":38,"text":"音 效","fontSize":21,"font":"SimHei","color":"#fff","bold":true}},{"type":"Label","props":{"y":159,"x":38,"text":"背景音乐","fontSize":21,"font":"SimHei","color":"#fff","bold":true}},{"type":"Image","props":{"y":114,"x":53,"width":275,"skin":"niuniu_psd/shangdian/-_0003_4.png","name":"br","height":2}},{"type":"RadioGroup","props":{"y":54,"x":147,"width":189,"var":"btnSE","space":69,"skin":"comp/radio.png","selectedIndex":0,"labels":"开,关","labelSize":21,"labelPadding":"-3,0,0,17","labelColors":"#fff","labelBold":true,"height":18}},{"type":"RadioGroup","props":{"y":163,"x":147,"width":189,"var":"btnBGM","space":69,"skin":"comp/radio.png","selectedIndex":0,"labels":"开,关","labelSize":21,"labelPadding":"-3,0,0,17","labelColors":"#fff","labelBold":true,"height":18}}]};}
		]);
		return settingUI;
	})(Dialog);
var shopUI=(function(_super){
		function shopUI(){
			

			shopUI.__super.call(this);
		}

		CLASS$(shopUI,'ui.shopUI',_super);
		var __proto__=shopUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(shopUI.uiView);
		}

		STATICATTR$(shopUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"y":0,"width":504,"name":"close","height":639},"child":[{"type":"Image","props":{"y":-13,"x":0,"width":504,"skin":"niuniu_psd/shangdian/di.png","height":652}},{"type":"Button","props":{"y":112,"x":353,"skin":"niuniu_psd/shangdian/-_0004_5.png"}},{"type":"Button","props":{"y":199,"x":353,"skin":"niuniu_psd/shangdian/-_0004_5.png"}},{"type":"Button","props":{"y":280,"x":353,"skin":"niuniu_psd/shangdian/-_0004_5.png"}},{"type":"Button","props":{"y":364,"x":353,"skin":"niuniu_psd/shangdian/-_0004_5.png"}},{"type":"Button","props":{"y":453,"x":353,"skin":"niuniu_psd/shangdian/-_0004_5.png"}},{"type":"Button","props":{"y":536,"x":353,"skin":"niuniu_psd/shangdian/-_0004_5.png"}},{"type":"Image","props":{"y":93,"x":34,"skin":"niuniu_psd/shangdian/r_di.png","sizeGrid":"12,12,12,12"}},{"type":"Image","props":{"y":178,"x":34,"skin":"niuniu_psd/shangdian/r_di.png","sizeGrid":"12,12,12,12"}},{"type":"Image","props":{"y":346,"x":34,"skin":"niuniu_psd/shangdian/r_di.png","sizeGrid":"12,12,12,12"}},{"type":"Image","props":{"y":263,"x":34,"skin":"niuniu_psd/shangdian/r_di.png","sizeGrid":"12,12,12,12"}},{"type":"Image","props":{"y":430,"x":34,"skin":"niuniu_psd/shangdian/r_di.png","sizeGrid":"12,12,12,12"}},{"type":"Image","props":{"y":513,"x":34,"skin":"niuniu_psd/shangdian/r_di.png","sizeGrid":"12,12,12,12"}},{"type":"Image","props":{"y":91,"x":34,"skin":"niuniu_psd/shangdian/vip3.png"}},{"type":"Image","props":{"y":352,"x":40,"skin":"niuniu_psd/shangdian/-_0000_1.png"}},{"type":"Image","props":{"y":509,"x":26,"skin":"niuniu_psd/shangdian/-_0001_2.png"}},{"type":"Image","props":{"y":417,"x":27,"skin":"niuniu_psd/shangdian/-_0002_3.png"}},{"type":"Image","props":{"y":175,"x":27,"skin":"niuniu_psd/shangdian/-_0003_4.png"}},{"type":"Image","props":{"y":258,"x":26,"skin":"niuniu_psd/shangdian/-_0003_4.png"}},{"type":"Image","props":{"y":342,"x":28,"skin":"niuniu_psd/shangdian/-_0003_4.png"}},{"type":"Image","props":{"y":425,"x":23,"skin":"niuniu_psd/shangdian/-_0003_4.png"}},{"type":"Image","props":{"y":510,"x":29,"skin":"niuniu_psd/shangdian/-_0003_4.png"}},{"type":"Image","props":{"y":112,"x":52,"skin":"niuniu_psd/shangdian/jinbi.png"}},{"type":"Image","props":{"y":201,"x":53,"skin":"niuniu_psd/shangdian/jinbi.png"}},{"type":"Image","props":{"y":283,"x":53,"skin":"niuniu_psd/shangdian/jinbi.png"}},{"type":"Label","props":{"y":113,"x":143,"width":200,"text":"36666万金币","skin":"template/文本框/label.png","height":32,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":141,"x":143,"width":200,"text":"商品价格三十元","skin":"template/文本框/label.png","height":32,"fontSize":18,"color":"#ffffff"}},{"type":"Label","props":{"y":198,"x":135,"width":200,"text":"这里要做成可滚动下滑","skin":"template/文本框/label.png","height":32,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":230,"x":140,"width":200,"text":"一共10条商品","skin":"template/文本框/label.png","height":32,"fontSize":18,"color":"#ffffff"}},{"type":"Label","props":{"y":275,"x":134,"width":200,"text":"36666万金币","skin":"template/文本框/label.png","height":32,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":307,"x":139,"width":200,"text":"商品价格三十元","skin":"template/文本框/label.png","height":32,"fontSize":18,"color":"#ffffff"}},{"type":"Label","props":{"y":360,"x":135,"width":200,"text":"36666万金币","skin":"template/文本框/label.png","height":32,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":392,"x":140,"width":200,"text":"商品价格三十元","skin":"template/文本框/label.png","height":32,"fontSize":18,"color":"#ffffff"}},{"type":"Label","props":{"y":444,"x":135,"width":200,"text":"36666万金币","skin":"template/文本框/label.png","height":32,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":476,"x":140,"width":200,"text":"商品价格三十元","skin":"template/文本框/label.png","height":32,"fontSize":18,"color":"#ffffff"}},{"type":"Label","props":{"y":537,"x":134,"width":200,"text":"36666万金币","skin":"template/文本框/label.png","height":32,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":569,"x":139,"width":200,"text":"商品价格三十元","skin":"template/文本框/label.png","height":32,"fontSize":18,"color":"#ffffff"}},{"type":"Button","props":{"y":-8,"x":476,"skin":"niuniu_psd/hall/guanbi.png","name":"close"}}]};}
		]);
		return shopUI;
	})(Dialog);
var tableUI=(function(_super){
		function tableUI(){
			
		    this.zhuangface=null;
		    this.btnTrend=null;
		    this.userface=null;
		    this.viplevel=null;
		    this.btnShangzhuang=null;
		    this.zhuangcoin=null;
		    this.username=null;
		    this.btnBuyCoin=null;
		    this.seat0=null;
		    this.zhuangname=null;
		    this.xiazhu1=null;
		    this.xiazhu2=null;
		    this.xiazhu3=null;
		    this.xiazhu4=null;
		    this.chips=null;
		    this.jieguo1=null;
		    this.jieguo2=null;
		    this.jieguo3=null;
		    this.jieguo4=null;
		    this.jieguo0=null;
		    this.usercoin=null;
		    this.seat1=null;
		    this.seat2=null;
		    this.seat3=null;
		    this.seat4=null;
		    this.seat5=null;
		    this.online=null;
		    this.niuUserface=null;
		    this.niuUsername=null;
		    this.btnExit=null;

			tableUI.__super.call(this);
		}

		CLASS$(tableUI,'ui.tableUI',_super);
		var __proto__=tableUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(tableUI.uiView);
		}

		STATICATTR$(tableUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"y":0,"width":640,"skin":"choumapukepai/10.png","height":1140},"child":[{"type":"Image","props":{"y":58,"x":259,"var":"zhuangface","skin":"niuniu_psd/game/2.png"}},{"type":"Image","props":{"y":0,"x":0,"skin":"niuniu_psd/game/table_di.jpg"}},{"type":"Button","props":{"y":943,"x":19,"width":104,"var":"btnTrend","skin":"niuniu_psd/game/1111.png","height":45}},{"type":"Image","props":{"y":1038,"x":11,"width":79,"var":"userface","skin":"niuniu_psd/hall/01_touxiang2.png","height":79},"child":[{"type":"Image","props":{"y":-5.999999999999773,"x":-6,"skin":"niuniu_psd/hall/touxiangkuang.png"}},{"type":"Image","props":{"y":-17.99999999999966,"x":41.00000000000004,"skin":"niuniu_psd/hall/204.png"},"child":[{"type":"Label","props":{"y":3.0000000000002274,"x":5.999999999999915,"width":47,"var":"viplevel","text":"VIP0","height":18,"font":"vip"}}]}]},{"type":"Button","props":{"y":141,"x":422,"var":"btnShangzhuang","skin":"niuniu_psd/game/444651100.png"}},{"type":"Image","props":{"y":38,"x":239,"skin":"niuniu_psd/game/niuniuniu.png"}},{"type":"Image","props":{"y":211,"x":287,"var":"zhuangcoin","skin":"niuniu_psd/game/500000.png"}},{"type":"Button","props":{"y":945,"x":559,"skin":"niuniu_psd/game/qqqqq1.png"}},{"type":"Label","props":{"y":954,"x":122,"width":434,"skin":"template/文本框/label.png","height":32,"fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":1050,"x":100,"width":167,"var":"username","text":"-","skin":"template/文本框/label.png","height":23,"fontSize":16,"color":"#ffffff"}},{"type":"Button","props":{"y":1065,"x":204,"var":"btnBuyCoin","skin":"niuniu_psd/game/chongzhi1111.png"}},{"type":"Image","props":{"y":748,"x":541,"var":"seat0","skin":"niuniu_psd/game/78978.png"}},{"type":"Image","props":{"y":44,"x":292,"skin":"niuniu_psd/game/11111.png"}},{"type":"Label","props":{"y":177,"x":256,"width":122,"var":"zhuangname","text":"-","skin":"template/文本框/label.png","height":21,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":303,"x":106,"width":205,"var":"xiazhu1","skin":"niuniu_psd/game/161616.png","height":238},"child":[{"type":"Label","props":{"y":-29,"x":101.99999999999991,"width":5,"text":"/","skin":"template/文本框/label.png","height":18,"fontSize":18,"color":"#ffffff"},"child":[{"type":"Label","props":{"y":0,"x":-91,"width":89,"text":"0","name":"self","height":18,"fontSize":18,"font":"SimHei","color":"#fff","align":"right"}},{"type":"Label","props":{"y":0,"x":6,"width":89,"text":"0","name":"total","height":18,"fontSize":18,"font":"SimHei","color":"#fff","align":"left"}}]},{"type":"Image","props":{"y":244,"x":10,"width":180,"skin":"comp/blank.png","height":12}}]},{"type":"Image","props":{"y":303,"x":331,"var":"xiazhu2","skin":"niuniu_psd/game/45646.png"},"child":[{"type":"Label","props":{"y":-29,"x":106.99999999999994,"width":5,"text":"/","skin":"template/文本框/label.png","height":18,"fontSize":18,"color":"#ffffff"},"child":[{"type":"Label","props":{"y":0,"x":-91,"width":89,"text":"0","name":"self","height":18,"fontSize":18,"font":"SimHei","color":"#fff","align":"right"}},{"type":"Label","props":{"y":0,"x":6,"width":89,"text":"0","name":"total","height":18,"fontSize":18,"font":"SimHei","color":"#fff","align":"left"}}]},{"type":"Image","props":{"y":244,"x":8,"width":180,"skin":"comp/blank.png","height":12}}]},{"type":"Image","props":{"y":608,"x":106,"var":"xiazhu3","skin":"niuniu_psd/game/4646.png"},"child":[{"type":"Label","props":{"y":272.9999999999999,"x":101.99999999999991,"width":5,"text":"/","skin":"template/文本框/label.png","height":18,"fontSize":18,"color":"#ffffff"},"child":[{"type":"Label","props":{"y":0,"x":-91,"width":89,"name":"self","height":18,"fontSize":18,"font":"SimHei","color":"#fff","align":"right"}},{"type":"Label","props":{"y":0,"x":6,"width":89,"name":"total","height":18,"fontSize":18,"font":"SimHei","color":"#fff","align":"left"}}]},{"type":"Image","props":{"y":249,"x":10,"width":180,"skin":"comp/blank.png","height":12}}]},{"type":"Image","props":{"y":608,"x":331,"var":"xiazhu4","skin":"niuniu_psd/game/4564.png"},"child":[{"type":"Label","props":{"y":272.9999999999999,"x":106.99999999999994,"width":5,"text":"/","skin":"template/文本框/label.png","height":18,"fontSize":18,"color":"#ffffff"},"child":[{"type":"Label","props":{"y":0,"x":-91,"width":89,"name":"self","height":18,"fontSize":18,"font":"SimHei","color":"#fff","align":"right"}},{"type":"Label","props":{"y":0,"x":6,"width":89,"name":"total","height":18,"fontSize":18,"font":"SimHei","color":"#fff","align":"left"}}]},{"type":"Image","props":{"y":249,"x":10,"width":180,"skin":"comp/blank.png","height":12}}]},{"type":"Image","props":{"y":197,"x":473,"width":77,"skin":"comp/blank.png","height":37}},{"type":"Image","props":{"y":216,"x":481,"skin":"niuniu_psd/game/46464.png"}},{"type":"Image","props":{"y":199,"x":481,"skin":"niuniu_psd/game/56565.png"}},{"type":"Box","props":{"y":1022,"x":289,"var":"chips"},"child":[{"type":"Image","props":{"width":328,"skin":"comp/blank.png","height":113}},{"type":"Image","props":{"y":13,"x":24,"skin":"choumapukepai/10.png","name":"chouma1"}},{"type":"Image","props":{"y":13,"x":129,"skin":"choumapukepai/100.png","name":"chouma2"}},{"type":"Image","props":{"y":13,"x":235,"skin":"choumapukepai/1000.png","name":"chouma3"}}]},{"type":"Label","props":{"y":408,"x":114,"width":189,"visible":false,"var":"jieguo1","text":"label","padding":"8","overflow":"hidden","height":70,"fontSize":16,"color":"#decac9","bold":true,"bgColor":"#000","alpha":0.5,"align":"center"}},{"type":"Label","props":{"y":408,"x":339,"width":189,"visible":false,"var":"jieguo2","text":"label","padding":"8","overflow":"hidden","height":70,"fontSize":16,"color":"#decac9","bold":true,"bgColor":"#000","alpha":0.5,"align":"center"}},{"type":"Label","props":{"y":709,"x":114,"width":189,"visible":false,"var":"jieguo3","text":"label","padding":"8","overflow":"hidden","height":70,"fontSize":16,"color":"#decac9","bold":true,"bgColor":"#000","alpha":0.5,"align":"center"}},{"type":"Label","props":{"y":709,"x":340,"width":189,"visible":false,"var":"jieguo4","text":"label","padding":"8","overflow":"hidden","height":70,"fontSize":16,"color":"#decac9","bold":true,"bgColor":"#000","alpha":0.5,"align":"center"}},{"type":"Label","props":{"y":188,"x":379,"width":189,"visible":false,"var":"jieguo0","text":"label","padding":"8","overflow":"hidden","height":70,"fontSize":16,"color":"#decac9","bold":true,"bgColor":"#000","alpha":0.5,"align":"center"}},{"type":"Label","props":{"y":1086,"x":138,"width":92,"var":"usercoin","text":"1234","padding":"0,0","height":21,"font":"coins"}},{"type":"Image","props":{"y":303,"x":30,"var":"seat1","skin":"niuniu_psd/game/di_1-01.png"},"child":[{"type":"Label","props":{"y":101.00000000000023,"x":-3,"width":67,"text":"空位","skin":"template/文本框/label.png","height":18,"fontSize":14,"color":"#f9de17","align":"center"}},{"type":"Image","props":{"y":-10.000000000000114,"x":-9,"skin":"niuniu_psd/game/di-01.png"}}]},{"type":"Image","props":{"y":529,"x":30,"var":"seat2","skin":"niuniu_psd/game/di_1-01.png"},"child":[{"type":"Label","props":{"y":101.00000000000023,"x":-3,"width":67,"text":"空位","skin":"template/文本框/label.png","height":18,"fontSize":14,"color":"#f9de17","align":"center"}},{"type":"Image","props":{"y":-10.000000000000114,"x":-9,"skin":"niuniu_psd/game/di-01.png"}}]},{"type":"Image","props":{"y":765,"x":31,"var":"seat3","skin":"niuniu_psd/game/di_1-01.png"},"child":[{"type":"Label","props":{"y":101.00000000000023,"x":-3,"width":67,"text":"空位","skin":"template/文本框/label.png","height":18,"fontSize":14,"color":"#f9de17","align":"center"}},{"type":"Image","props":{"y":-10.000000000000114,"x":-9,"skin":"niuniu_psd/game/di-01.png"}}]},{"type":"Image","props":{"y":302,"x":554,"var":"seat4","skin":"niuniu_psd/game/di_1-01.png"},"child":[{"type":"Label","props":{"y":101.00000000000023,"x":-3,"width":67,"text":"空位","skin":"template/文本框/label.png","height":18,"fontSize":14,"color":"#f9de17","align":"center"}},{"type":"Image","props":{"y":-10.000000000000114,"x":-9,"skin":"niuniu_psd/game/di-01.png"}}]},{"type":"Image","props":{"y":530,"x":554,"var":"seat5","skin":"niuniu_psd/game/di_1-01.png"},"child":[{"type":"Label","props":{"y":101.00000000000023,"x":-3,"width":67,"text":"空位","skin":"template/文本框/label.png","height":18,"fontSize":14,"color":"#f9de17","align":"center"}},{"type":"Image","props":{"y":-10.000000000000114,"x":-9,"skin":"niuniu_psd/game/di-01.png"}}]},{"type":"Label","props":{"y":833,"x":549,"width":65,"var":"online","text":"48人","height":12,"fontSize":12,"color":"#fff","bold":true,"align":"center"}},{"type":"Button","props":{"y":162,"x":46,"skin":"niuniu_psd/game/shuoming.png"}},{"type":"Image","props":{"y":29,"x":18,"skin":"niuniu_psd/game/02_niumowangdi.png"}},{"type":"Image","props":{"y":6,"x":41,"skin":"niuniu_psd/game/02_niumowang.png"}},{"type":"Image","props":{"y":53,"x":32,"width":65,"var":"niuUserface","skin":"niuniu_psd/hall/01_touxiang2.png","height":65},"child":[{"type":"Image","props":{"y":-5.999999999999773,"x":-6,"width":77,"skin":"niuniu_psd/hall/touxiangkuang.png","height":77}}]},{"type":"Label","props":{"y":59,"x":107,"width":108,"var":"niuUsername","text":"名字","strokeColor":"#2a1d2c","stroke":2,"fontSize":18,"font":"SimHei","color":"#fdd54c","bold":true}},{"type":"Label","props":{"y":93,"x":107,"width":116,"text":"奖励500万","height":22,"font":"coins"}},{"type":"Button","props":{"y":17,"x":549,"var":"btnExit","skin":"niuniu_psd/game/tuichu.png"}}]};}
		]);
		return tableUI;
	})(View);
var tipUI=(function(_super){
		function tipUI(){
			
		    this.info=null;
		    this.btn=null;

			tipUI.__super.call(this);
		}

		CLASS$(tipUI,'ui.tipUI',_super);
		var __proto__=tipUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(tipUI.uiView);
		}

		STATICATTR$(tipUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":391,"height":191},"child":[{"type":"Image","props":{"y":0,"x":0,"width":391,"skin":"niuniu_psd/shangdian/tongyong_di_2.png","height":191,"sizeGrid":"3,3,3,3"}},{"type":"Image","props":{"y":3,"x":3,"width":384,"skin":"niuniu_psd/shangdian/tongyong_di_1.png","sizeGrid":"0,0,0,0,1","height":35}},{"type":"Button","props":{"y":-7,"x":358,"skin":"niuniu_psd/hall/guanbi.png","name":"close"}},{"type":"Image","props":{"y":55,"x":20,"width":351,"skin":"niuniu_psd/shangdian/r_di.png","height":126,"sizeGrid":"12,12,12,12"}},{"type":"Label","props":{"y":70,"x":30,"wordWrap":true,"width":330,"var":"info","text":"这是一个警告信息","overflow":"hidden","height":56,"fontSize":16,"color":"#fff","bold":true,"align":"center"}},{"type":"Button","props":{"y":134,"x":156,"var":"btn","skin":"niuniu_psd/shangdian/-_0004_5.png","name":"close"}}]};}
		]);
		return tipUI;
	})(Dialog);
var trendUI=(function(_super){
		function trendUI(){
			
		    this.xiazhuqu1=null;
		    this.xiazhuqu2=null;
		    this.xiazhuqu3=null;
		    this.xiazhuqu4=null;

			trendUI.__super.call(this);
		}

		CLASS$(trendUI,'ui.trendUI',_super);
		var __proto__=trendUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(trendUI.uiView);
		}

		STATICATTR$(trendUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":501,"height":342},"child":[{"type":"Image","props":{"y":0,"x":0,"width":501,"skin":"niuniu_psd/shangdian/tongyong_di_2.png","height":342,"sizeGrid":"3,3,3,3"}},{"type":"Image","props":{"y":3,"x":3,"width":495,"skin":"niuniu_psd/shangdian/tongyong_di_1.png","sizeGrid":"0,0,0,0,1"}},{"type":"Button","props":{"y":-3,"x":458,"skin":"niuniu_psd/hall/guanbi.png","name":"close"}},{"type":"Image","props":{"y":54,"x":13,"width":475,"skin":"niuniu_psd/shangdian/-_0003_4.png","name":"br","height":2}},{"type":"Image","props":{"y":69,"x":51,"width":405,"var":"xiazhuqu1","skin":"niuniu_psd/shangdian/r_di.png","height":48,"sizeGrid":"12,12,12,12"},"child":[{"type":"Image","props":{"y":-3,"x":-14,"skin":"niuniu_psd/shangdian/tian.png"}}]},{"type":"Image","props":{"y":134,"x":52,"width":405,"var":"xiazhuqu2","skin":"niuniu_psd/shangdian/r_di.png","height":48,"sizeGrid":"12,12,12,12"},"child":[{"type":"Image","props":{"y":-3,"x":-14,"skin":"niuniu_psd/shangdian/zdi.png"}}]},{"type":"Image","props":{"y":199,"x":52,"width":405,"var":"xiazhuqu3","skin":"niuniu_psd/shangdian/r_di.png","height":48,"sizeGrid":"12,12,12,12"},"child":[{"type":"Image","props":{"y":-3,"x":-14,"skin":"niuniu_psd/shangdian/xuan.png"}}]},{"type":"Image","props":{"y":266,"x":52,"width":405,"var":"xiazhuqu4","skin":"niuniu_psd/shangdian/r_di.png","height":48,"sizeGrid":"12,12,12,12"},"child":[{"type":"Image","props":{"y":-3,"x":-14,"skin":"niuniu_psd/shangdian/huang.png"}}]},{"type":"Image","props":{"y":-30,"x":75,"skin":"niuniu_psd/shangdian/zoushidi.png"}},{"type":"Image","props":{"y":-18,"x":210,"skin":"niuniu_psd/shangdian/zoushitu.png"}}]};}
		]);
		return trendUI;
	})(Dialog);
var usercenterUI=(function(_super){
		function usercenterUI(){
			
		    this.exp=null;
		    this.username=null;
		    this.userid=null;
		    this.btnBuyCoin=null;
		    this.btnBuyDiamond=null;
		    this.usercoin=null;
		    this.userdiamond=null;
		    this.btnMobile=null;
		    this.userface=null;
		    this.viplevel=null;

			usercenterUI.__super.call(this);
		}

		CLASS$(usercenterUI,'ui.usercenterUI',_super);
		var __proto__=usercenterUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(usercenterUI.uiView);
		}

		STATICATTR$(usercenterUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":504,"height":496},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"niuniu_psd/gerenzhongxin/035.png"}},{"type":"Image","props":{"y":346,"x":47,"width":100,"var":"exp","skin":"niuniu_psd/gerenzhongxin/037.png","sizeGrid":"2,2,2,2"}},{"type":"Image","props":{"y":189,"x":191,"skin":"niuniu_psd/gerenzhongxin/036.png"}},{"type":"Label","props":{"y":81,"x":189,"width":164,"var":"username","text":"-","skin":"template/文本框/label.png","height":32,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":127,"x":189,"width":164,"var":"userid","text":"-","skin":"template/文本框/label.png","height":32,"fontSize":16,"color":"#ffffff"}},{"type":"Button","props":{"y":230,"x":163,"var":"btnBuyCoin","skin":"niuniu_psd/gerenzhongxin/033.png"}},{"type":"Button","props":{"y":230,"x":379,"var":"btnBuyDiamond","skin":"niuniu_psd/gerenzhongxin/033.png"}},{"type":"Label","props":{"y":239,"x":78,"width":80,"var":"usercoin","text":"-","skin":"template/文本框/label.png","height":16,"fontSize":16,"color":"#ffffff","align":"right"}},{"type":"Label","props":{"y":239,"x":295,"width":80,"var":"userdiamond","text":"-","skin":"template/文本框/label.png","height":16,"fontSize":16,"color":"#ffffff","align":"right"}},{"type":"Label","props":{"y":434,"x":28,"width":269,"text":"绑定手机号即可获得100万金币","skin":"template/文本框/label.png","height":28,"fontSize":20,"color":"#ffffff","align":"right"}},{"type":"Button","props":{"y":419,"x":358,"var":"btnMobile","skin":"niuniu_psd/gerenzhongxin/032.png"}},{"type":"Image","props":{"y":57.99999999999999,"x":31.000000000000014,"width":79,"var":"userface","skin":"niuniu_psd/hall/01_touxiang2.png","height":79}},{"type":"Image","props":{"y":52,"x":25,"skin":"niuniu_psd/hall/touxiangkuang.png"}},{"type":"Button","props":{"y":-11,"x":472,"skin":"niuniu_psd/hall/guanbi.png","name":"close","hitTestPrior":true}},{"type":"Image","props":{"y":346,"x":48,"width":0,"skin":"niuniu_psd/gerenzhongxin/037.png","height":13,"sizeGrid":"2,2,2,2"}},{"type":"Label","props":{"y":310,"x":47,"width":80,"var":"viplevel","text":"VIP2","skin":"template/文本框/label.png","height":23,"fontSize":16,"font":"vip","color":"#ffffff","align":"left"}}]};}
		]);
		return usercenterUI;
	})(Dialog);
var VIPUI=(function(_super){
		function VIPUI(){
			

			VIPUI.__super.call(this);
		}

		CLASS$(VIPUI,'ui.VIPUI',_super);
		var __proto__=VIPUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(VIPUI.uiView);
		}

		STATICATTR$(VIPUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":392,"popupCenter":true,"height":358},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"niuniu_psd/VIP/002.png"}},{"type":"Image","props":{"y":234,"x":-2,"skin":"niuniu_psd/VIP/003.png"}},{"type":"Image","props":{"y":235,"x":391,"skin":"niuniu_psd/VIP/003.png","scaleX":-1}},{"type":"Image","props":{"y":99,"x":75,"width":8,"skin":"niuniu_psd/VIP/001.png","pivotY":2,"pivotX":-3,"height":10}},{"type":"Image","props":{"y":155,"x":148,"skin":"niuniu_psd/VIP/VIP/006.png"}},{"type":"Label","props":{"y":198,"x":47,"width":302,"text":"1、VIP描述","skin":"template/文本框/label.png","height":24,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":223,"x":47,"width":302,"text":"2、VIP描述","skin":"template/文本框/label.png","height":24,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":247,"x":47,"width":302,"text":"3、VIP描述","skin":"template/文本框/label.png","height":24,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":268,"x":47,"width":302,"text":"4、VIP描述","skin":"template/文本框/label.png","height":24,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":290,"x":47,"width":302,"text":"5、VIP描述","skin":"template/文本框/label.png","height":24,"fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":96,"x":28,"skin":"niuniu_psd/hall/VIP/230.png"}},{"type":"Image","props":{"y":64,"x":158,"skin":"niuniu_psd/hall/VIP/230.png"}},{"type":"Image","props":{"y":94,"x":321,"skin":"niuniu_psd/hall/VIP/231.png"}},{"type":"Button","props":{"y":-9,"x":360,"skin":"niuniu_psd/hall/guanbi.png","name":"close"}},{"type":"Label","props":{"y":146,"x":138,"width":118,"text":"label","height":38}}]};}
		]);
		return VIPUI;
	})(Dialog);