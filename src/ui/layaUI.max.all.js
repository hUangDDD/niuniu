var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var eyuosUI=(function(_super){
		function eyuosUI(){
			
		    this.room1=null;

			eyuosUI.__super.call(this);
		}

		CLASS$(eyuosUI,'ui.eyuosUI',_super);
		var __proto__=eyuosUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(eyuosUI.uiView);
		}

		STATICATTR$(eyuosUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":640,"height":1140},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"niuniu_psd/首页/219.jpg"}},{"type":"Image","props":{"y":172,"x":0,"skin":"niuniu_psd/首页/218.png"}},{"type":"Image","props":{"y":212,"x":0,"skin":"niuniu_psd/首页/218.png"}},{"type":"Image","props":{"y":55,"x":119,"skin":"niuniu_psd/首页/217.png"}},{"type":"Image","props":{"y":56,"x":135,"skin":"niuniu_psd/首页/217.png","scaleX":-1}},{"type":"Image","props":{"y":3,"x":365,"skin":"niuniu_psd/首页/216.png","hitTestPrior":true}},{"type":"Image","props":{"y":3,"x":277,"skin":"niuniu_psd/首页/215.png","hitTestPrior":true}},{"type":"Image","props":{"y":779,"x":14,"skin":"niuniu_psd/shangdian/5949814981/guanggao.png"}},{"type":"Image","props":{"y":1041,"x":18,"skin":"niuniu_psd/首页/213.png"}},{"type":"Image","props":{"y":2,"x":453,"skin":"niuniu_psd/首页/211.png","hitTestPrior":true}},{"type":"Image","props":{"y":2,"x":541,"skin":"niuniu_psd/首页/209.png","hitTestPrior":true}},{"type":"Image","props":{"y":239,"x":14,"var":"room1","skin":"niuniu_psd/首页/208.png"}},{"type":"Image","props":{"y":509,"x":14,"skin":"niuniu_psd/首页/207.png"}},{"type":"Image","props":{"y":509,"x":331,"skin":"niuniu_psd/首页/206.png"}},{"type":"Image","props":{"y":239,"x":331,"skin":"niuniu_psd/首页/205.png"}},{"type":"Image","props":{"y":1032,"x":69,"skin":"niuniu_psd/首页/204.png"}},{"type":"Image","props":{"y":61,"x":477,"skin":"niuniu_psd/首页/203.png"}},{"type":"Image","props":{"y":74,"x":358,"skin":"niuniu_psd/首页/202.png"}},{"type":"Label","props":{"y":185,"x":11,"width":612,"text":"恭喜XXX玩家在XXX获得了XXX","skin":"template/文本框/label.png","height":32,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":1073,"x":115,"width":197,"text":"玩家昵称","skin":"template/文本框/label.png","height":32,"fontSize":18,"color":"#ffffff"}},{"type":"Image","props":{"y":1105,"x":153,"skin":"niuniu_psd/首页/666.png"}},{"type":"Image","props":{"y":1037,"x":76,"skin":"niuniu_psd/首页/VIP/230.png"}},{"type":"Button","props":{"y":1079,"x":500,"skin":"niuniu_psd/首页/212.png"}},{"type":"Button","props":{"y":1079,"x":356,"skin":"niuniu_psd/首页/214.png"}}]};}
		]);
		return eyuosUI;
	})(View);
var gnehcgnahsUI=(function(_super){
		function gnehcgnahsUI(){
			

			gnehcgnahsUI.__super.call(this);
		}

		CLASS$(gnehcgnahsUI,'ui.gnehcgnahsUI',_super);
		var __proto__=gnehcgnahsUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(gnehcgnahsUI.uiView);
		}

		STATICATTR$(gnehcgnahsUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"y":0,"width":504,"height":639},"child":[{"type":"Image","props":{"y":"0","x":0,"skin":"niuniu_psd/shangdian/di.png"}},{"type":"Button","props":{"y":112,"x":353,"skin":"niuniu_psd/shangdian/-_0004_5.png"}},{"type":"Button","props":{"y":199,"x":353,"skin":"niuniu_psd/shangdian/-_0004_5.png"}},{"type":"Button","props":{"y":280,"x":353,"skin":"niuniu_psd/shangdian/-_0004_5.png"}},{"type":"Button","props":{"y":364,"x":353,"skin":"niuniu_psd/shangdian/-_0004_5.png"}},{"type":"Button","props":{"y":453,"x":353,"skin":"niuniu_psd/shangdian/-_0004_5.png"}},{"type":"Button","props":{"y":536,"x":353,"skin":"niuniu_psd/shangdian/-_0004_5.png"}},{"type":"Image","props":{"y":91,"x":34,"skin":"niuniu_psd/shangdian/5949814981/di.png"}},{"type":"Image","props":{"y":178,"x":34,"skin":"niuniu_psd/shangdian/5949814981/di.png"}},{"type":"Image","props":{"y":346,"x":34,"skin":"niuniu_psd/shangdian/5949814981/di.png"}},{"type":"Image","props":{"y":263,"x":34,"skin":"niuniu_psd/shangdian/5949814981/di.png"}},{"type":"Image","props":{"y":430,"x":34,"skin":"niuniu_psd/shangdian/5949814981/di.png"}},{"type":"Image","props":{"y":513,"x":34,"skin":"niuniu_psd/shangdian/5949814981/di.png"}},{"type":"Image","props":{"y":91,"x":34,"skin":"niuniu_psd/shangdian/5949814981/vip3.png"}},{"type":"Image","props":{"y":352,"x":40,"skin":"niuniu_psd/shangdian/-_0000_1.png"}},{"type":"Image","props":{"y":509,"x":26,"skin":"niuniu_psd/shangdian/-_0001_2.png"}},{"type":"Image","props":{"y":417,"x":27,"skin":"niuniu_psd/shangdian/-_0002_3.png"}},{"type":"Image","props":{"y":175,"x":27,"skin":"niuniu_psd/shangdian/-_0003_4.png"}},{"type":"Image","props":{"y":258,"x":26,"skin":"niuniu_psd/shangdian/-_0003_4.png"}},{"type":"Image","props":{"y":342,"x":28,"skin":"niuniu_psd/shangdian/-_0003_4.png"}},{"type":"Image","props":{"y":425,"x":23,"skin":"niuniu_psd/shangdian/-_0003_4.png"}},{"type":"Image","props":{"y":510,"x":29,"skin":"niuniu_psd/shangdian/-_0003_4.png"}},{"type":"Image","props":{"y":112,"x":52,"skin":"niuniu_psd/shangdian/jinbi.png"}},{"type":"Image","props":{"y":201,"x":53,"skin":"niuniu_psd/shangdian/jinbi.png"}},{"type":"Image","props":{"y":283,"x":53,"skin":"niuniu_psd/shangdian/jinbi.png"}},{"type":"Label","props":{"y":113,"x":143,"width":200,"text":"36666万金币","skin":"template/文本框/label.png","height":32,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":141,"x":143,"width":200,"text":"商品价格三十元","skin":"template/文本框/label.png","height":32,"fontSize":18,"color":"#ffffff"}},{"type":"Label","props":{"y":198,"x":135,"width":200,"text":"这里要做成可滚动下滑","skin":"template/文本框/label.png","height":32,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":230,"x":140,"width":200,"text":"一共10条商品","skin":"template/文本框/label.png","height":32,"fontSize":18,"color":"#ffffff"}},{"type":"Label","props":{"y":275,"x":134,"width":200,"text":"36666万金币","skin":"template/文本框/label.png","height":32,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":307,"x":139,"width":200,"text":"商品价格三十元","skin":"template/文本框/label.png","height":32,"fontSize":18,"color":"#ffffff"}},{"type":"Label","props":{"y":360,"x":135,"width":200,"text":"36666万金币","skin":"template/文本框/label.png","height":32,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":392,"x":140,"width":200,"text":"商品价格三十元","skin":"template/文本框/label.png","height":32,"fontSize":18,"color":"#ffffff"}},{"type":"Label","props":{"y":444,"x":135,"width":200,"text":"36666万金币","skin":"template/文本框/label.png","height":32,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":476,"x":140,"width":200,"text":"商品价格三十元","skin":"template/文本框/label.png","height":32,"fontSize":18,"color":"#ffffff"}},{"type":"Label","props":{"y":537,"x":134,"width":200,"text":"36666万金币","skin":"template/文本框/label.png","height":32,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":569,"x":139,"width":200,"text":"商品价格三十元","skin":"template/文本框/label.png","height":32,"fontSize":18,"color":"#ffffff"}}]};}
		]);
		return gnehcgnahsUI;
	})(Dialog);
var gnidganabijuohsUI=(function(_super){
		function gnidganabijuohsUI(){
			
		    this.kkk=null;

			gnidganabijuohsUI.__super.call(this);
		}

		CLASS$(gnidganabijuohsUI,'ui.gnidganabijuohsUI',_super);
		var __proto__=gnidganabijuohsUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(gnidganabijuohsUI.uiView);
		}

		STATICATTR$(gnidganabijuohsUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":398,"height":363},"child":[{"type":"Image","props":{"y":5,"x":0,"skin":"niuniu_psd/手机绑定/120.png"}},{"type":"Image","props":{"y":0,"x":355,"skin":"niuniu_psd/手机mobile/9.png"}},{"type":"Image","props":{"y":159,"x":126,"skin":"niuniu_psd/手机mobile/8.png"}},{"type":"Image","props":{"y":250,"x":126,"skin":"niuniu_psd/手机mobile/8.png"}},{"type":"Label","props":{"y":61,"x":47,"width":318,"text":"绑定手机号可以保证您的帐号安全，","skin":"template/文本框/label.png","height":25,"fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":90,"x":22,"width":341,"text":"绑定成功后您将获得10万金币的奖励！","skin":"template/文本框/label.png","height":29,"fontSize":20,"color":"#ffffff"}},{"type":"Button","props":{"y":196,"x":232,"var":"kkk","skin":"niuniu_psd/手机mobile/5.png"}},{"type":"Button","props":{"y":289,"x":231,"skin":"niuniu_psd/手机mobile/9.png"}}]};}
		]);
		return gnidganabijuohsUI;
	})(Dialog);
var nxgnhohzneregUI=(function(_super){
		function nxgnhohzneregUI(){
			

			nxgnhohzneregUI.__super.call(this);
		}

		CLASS$(nxgnhohzneregUI,'ui.nxgnhohzneregUI',_super);
		var __proto__=nxgnhohzneregUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(nxgnhohzneregUI.uiView);
		}

		STATICATTR$(nxgnhohzneregUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":504,"height":496},"child":[{"type":"Image","props":{"y":3,"x":0,"skin":"niuniu_psd/gerenzhongxin/035.png"}},{"type":"Image","props":{"y":349,"x":47,"skin":"niuniu_psd/gerenzhongxin/037.png"}},{"type":"Image","props":{"y":192,"x":191,"skin":"niuniu_psd/gerenzhongxin/036.png"}},{"type":"Label","props":{"y":84,"x":189,"width":164,"text":"你你你您成成称曾","skin":"template/文本框/label.png","height":32,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":130,"x":189,"width":164,"text":"IIIIIIIIDDDDDD","skin":"template/文本框/label.png","height":32,"fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":62,"x":22,"skin":"niuniu_psd/首页/213.png"}},{"type":"Button","props":{"y":233,"x":163,"skin":"niuniu_psd/gerenzhongxin/033.png"}},{"type":"Button","props":{"y":233,"x":379,"skin":"niuniu_psd/gerenzhongxin/033.png"}},{"type":"Label","props":{"y":242,"x":78,"width":80,"text":"99999","skin":"template/文本框/label.png","height":16,"fontSize":16,"color":"#ffffff","align":"right"}},{"type":"Label","props":{"y":242,"x":295,"width":80,"text":"99999","skin":"template/文本框/label.png","height":16,"fontSize":16,"color":"#ffffff","align":"right"}},{"type":"Label","props":{"y":437,"x":28,"width":269,"text":"绑定手机号即可获得100万金币","skin":"template/文本框/label.png","height":28,"fontSize":20,"color":"#ffffff","align":"right"}},{"type":"Button","props":{"y":422,"x":358,"skin":"niuniu_psd/gerenzhongxin/032.png"}}]};}
		]);
		return nxgnhohzneregUI;
	})(Dialog);
var uinniuninUI=(function(_super){
		function uinniuninUI(){
			

			uinniuninUI.__super.call(this);
		}

		CLASS$(uinniuninUI,'ui.uinniuninUI',_super);
		var __proto__=uinniuninUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(uinniuninUI.uiView);
		}

		STATICATTR$(uinniuninUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"y":0,"width":640,"height":1140},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"niuniu_psd/ouxinei/di.jpg"}},{"type":"Image","props":{"y":"0","x":0,"skin":"niuniu_psd/ouxinei/8shiyitu.png","alpha":0.5}},{"type":"Button","props":{"y":943,"x":19,"width":104,"skin":"niuniu_psd/ouxinei/1111.png","height":45}},{"type":"Image","props":{"y":1032,"x":5,"skin":"niuniu_psd/首页/213.png"}},{"type":"Image","props":{"y":1020,"x":52,"skin":"niuniu_psd/首页/204.png"}},{"type":"Image","props":{"y":1026,"x":61,"skin":"niuniu_psd/首页/VIP/230.png"}},{"type":"Button","props":{"y":141,"x":422,"skin":"niuniu_psd/ouxinei/444651100.png"}},{"type":"Image","props":{"y":38,"x":239,"skin":"niuniu_psd/ouxinei/niuniuniu.png"}},{"type":"Image","props":{"y":211,"x":287,"skin":"niuniu_psd/ouxinei/500000.png"}},{"type":"Button","props":{"y":945,"x":559,"skin":"niuniu_psd/ouxinei/qqqqq1.png"}},{"type":"Label","props":{"y":954,"x":122,"width":434,"text":"滚动条上有很多多多多多多多多多的文字","skin":"template/文本框/label.png","height":32,"fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":1050,"x":100,"width":167,"text":"玩家昵称昵称昵称","skin":"template/文本框/label.png","height":23,"fontSize":16,"color":"#ffffff"}},{"type":"Button","props":{"y":1065,"x":204,"skin":"niuniu_psd/ouxinei/chongzhi1111.png"}},{"type":"Label","props":{"y":861,"x":24,"width":67,"text":"空位","skin":"template/文本框/label.png","height":18,"fontSize":14,"color":"#f9de17","align":"center"}},{"type":"Label","props":{"y":627,"x":24,"width":67,"text":"空位","skin":"template/文本框/label.png","height":18,"fontSize":14,"color":"#f9de17","align":"center"}},{"type":"Label","props":{"y":402,"x":24,"width":67,"text":"图好大啊","skin":"template/文本框/label.png","height":18,"fontSize":14,"color":"#f9de17","align":"center"}},{"type":"Label","props":{"y":627,"x":548,"width":67,"text":"空位","skin":"template/文本框/label.png","height":18,"fontSize":14,"color":"#f9de17","align":"center"}},{"type":"Label","props":{"y":402,"x":548,"width":67,"text":"图好大啊","skin":"template/文本框/label.png","height":18,"fontSize":14,"color":"#f9de17","align":"center"}},{"type":"Image","props":{"y":292,"x":545,"skin":"niuniu_psd/ouxinei/123132.png"}},{"type":"Image","props":{"y":521,"x":545,"skin":"niuniu_psd/ouxinei/123132.png"}},{"type":"Image","props":{"y":521,"x":21,"skin":"niuniu_psd/ouxinei/123132.png"}},{"type":"Image","props":{"y":292,"x":21,"skin":"niuniu_psd/ouxinei/123132.png"}},{"type":"Image","props":{"y":754,"x":21,"skin":"niuniu_psd/ouxinei/123132.png"}},{"type":"Image","props":{"y":748,"x":541,"skin":"niuniu_psd/ouxinei/78978.png"}},{"type":"Image","props":{"y":44,"x":292,"skin":"niuniu_psd/ouxinei/11111.png"}},{"type":"Label","props":{"y":177,"x":256,"width":122,"text":"庄主的IDDIDIDD","skin":"template/文本框/label.png","height":21,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":303,"x":106,"skin":"niuniu_psd/ouxinei/161616.png"}},{"type":"Image","props":{"y":608,"x":331,"skin":"niuniu_psd/ouxinei/4564.png"}},{"type":"Image","props":{"y":303,"x":331,"skin":"niuniu_psd/ouxinei/45646.png"}},{"type":"Image","props":{"y":608,"x":106,"skin":"niuniu_psd/ouxinei/4646.png"}},{"type":"Image","props":{"y":162,"x":46,"skin":"niuniu_psd/ouxinei/4848.png"}},{"type":"Image","props":{"y":17,"x":546,"skin":"niuniu_psd/ouxinei/4949.png"}},{"type":"Image","props":{"y":197,"x":473,"width":77,"skin":"comp/blank.png","height":37}},{"type":"Image","props":{"y":547,"x":116,"width":180,"skin":"comp/blank.png","height":12}},{"type":"Image","props":{"y":216,"x":481,"skin":"niuniu_psd/ouxinei/46464.png"}},{"type":"Image","props":{"y":199,"x":481,"skin":"niuniu_psd/ouxinei/56565.png"}},{"type":"Image","props":{"y":546,"x":115,"skin":"niuniu_psd/ouxinei/aaaa.png"}},{"type":"Image","props":{"y":546,"x":147,"skin":"niuniu_psd/ouxinei/sexxx.png"}},{"type":"Image","props":{"y":547,"x":339,"width":180,"skin":"comp/blank.png","height":12}},{"type":"Image","props":{"y":857,"x":115,"width":180,"skin":"comp/blank.png","height":12}},{"type":"Image","props":{"y":857,"x":341,"width":180,"skin":"comp/blank.png","height":12}},{"type":"Label","props":{"y":881,"x":118,"width":180,"text":"999/9999","skin":"template/文本框/label.png","height":18,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":881,"x":348,"width":180,"text":"999/9999","skin":"template/文本框/label.png","height":18,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":274,"x":118,"width":180,"text":"999/9999","skin":"template/文本框/label.png","height":18,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":274,"x":348,"width":180,"text":"999/9999","skin":"template/文本框/label.png","height":18,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":1022,"x":289,"width":328,"skin":"comp/blank.png","height":113}},{"type":"Image","props":{"y":546,"x":337,"skin":"niuniu_psd/ouxinei/aaaa.png"}},{"type":"Image","props":{"y":546,"x":369,"skin":"niuniu_psd/ouxinei/sexxx.png"}},{"type":"Image","props":{"y":856,"x":114,"skin":"niuniu_psd/ouxinei/aaaa.png"}},{"type":"Image","props":{"y":856,"x":146,"skin":"niuniu_psd/ouxinei/sexxx.png"}},{"type":"Image","props":{"y":856,"x":341,"skin":"niuniu_psd/ouxinei/aaaa.png"}},{"type":"Image","props":{"y":856,"x":373,"skin":"niuniu_psd/ouxinei/sexxx.png"}},{"type":"Image","props":{"y":1035,"x":302,"skin":"niuniu_psd/choumapukepai/chouma_lan.png"}},{"type":"Image","props":{"y":1035,"x":414,"skin":"niuniu_psd/choumapukepai/chouma_huang.png"}},{"type":"Image","props":{"y":1035,"x":524,"skin":"niuniu_psd/choumapukepai/chouma_lv.png"}}]};}
		]);
		return uinniuninUI;
	})(View);
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
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":399,"height":363},"child":[{"type":"Image","props":{"y":5,"x":0,"skin":"niuniu_psd/VIP/002.png"}},{"type":"Image","props":{"y":234,"x":-2,"skin":"niuniu_psd/VIP/003.png"}},{"type":"Image","props":{"y":235,"x":391,"skin":"niuniu_psd/VIP/003.png","scaleX":-1}},{"type":"Image","props":{"y":102,"x":77,"skin":"niuniu_psd/VIP/001.png"}},{"type":"Image","props":{"y":161,"x":148,"skin":"niuniu_psd/VIP/VIP/006.png"}},{"type":"Image","props":{"y":66,"x":159,"skin":"niuniu_psd/首页/VIP/230.png"}},{"type":"Image","props":{"y":101,"x":26,"skin":"niuniu_psd/首页/VIP/230.png"}},{"type":"Image","props":{"y":100,"x":318,"skin":"niuniu_psd/首页/VIP/231.png"}},{"type":"Image","props":{"y":0,"x":354,"skin":"niuniu_psd/mobile/999.png"}},{"type":"Label","props":{"y":198,"x":47,"width":302,"text":"1、VIP描述","skin":"template/文本框/label.png","height":24,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":223,"x":47,"width":302,"text":"2、VIP描述","skin":"template/文本框/label.png","height":24,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":247,"x":47,"width":302,"text":"3、VIP描述","skin":"template/文本框/label.png","height":24,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":268,"x":47,"width":302,"text":"4、VIP描述","skin":"template/文本框/label.png","height":24,"fontSize":16,"color":"#ffffff"}},{"type":"Label","props":{"y":290,"x":47,"width":302,"text":"5、VIP描述","skin":"template/文本框/label.png","height":24,"fontSize":16,"color":"#ffffff"}}]};}
		]);
		return VIPUI;
	})(Dialog);