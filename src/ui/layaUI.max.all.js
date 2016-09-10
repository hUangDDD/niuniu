var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var hallUIUI=(function(_super){
		function hallUIUI(){
			

			hallUIUI.__super.call(this);
		}

		CLASS$(hallUIUI,'ui.hallUIUI',_super);
		var __proto__=hallUIUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(hallUIUI.uiView);
		}

		STATICATTR$(hallUIUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":640,"height":1140},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/hall/01_beijing.jpg"}},{"type":"Image","props":{"y":0,"x":0,"skin":"ui/hall/01_beijing_1.png"}},{"type":"Image","props":{"y":3,"x":4,"skin":"ui/hall/01_niuniu.png"}},{"type":"Image","props":{"y":52,"x":501,"skin":"ui/hall/01_mianfeijinbi.png"}},{"type":"Image","props":{"y":5,"x":555,"skin":"ui/hall/01_gengduo.png"}},{"type":"Image","props":{"y":1,"x":452,"skin":"ui/hall/01_caifubang.png"}},{"type":"Image","props":{"y":-1,"x":342,"skin":"ui/hall/01_kefu.png"}}]};}
		]);
		return hallUIUI;
	})(View);