var jquery=require('jquery'), $=jquery;
var url=require('url'), path=require('path'), clone=require('clone'), qs=require('querystring');
var ui=require('./ui.js'), me=require('./myself.js');
var dlgs=require('./UIs/dlgs.js');

var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;

// for debug
window.ui=ui;

function isInWechat() {
	if(navigator.userAgent.toLowerCase().indexOf('micromessenger')>=0) {
		return true;
	}
	return false;
}

function MsgDispatcher() {
	MsgDispatcher.super(this);
}
Laya.class(MsgDispatcher, 'MsgDis', Laya.EventDispatcher);
window.netmsg=new MsgDispatcher();

function main() {
	var url_option=url.parse(location.href, true), startup_param=url_option.query;
	var serverpath;
	var host = url_option.host;
	var regTestIp=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
	if (!regTestIp.test(host))
	{
		var hosts=host.split('.');
		hosts[0] = 'ws';
		host = hosts.join('.');
	}
	if (/\.[^\/\\]+$/.test(url_option.pathname)) {
		url_option._p=path.dirname(url_option.pathname);
	}
	else url_option._p=url_option.pathname;
	serverpath=host+url_option._p;
	if (startup_param.login) {startup_param.c='login';startup_param.id=startup_param.login;}
	if (startup_param.reg) {startup_param.c='rol'; startup_param.id=startup_param.reg;}
	if (startup_param.id) {
		if (startup_param.c==null) {startup_param.c='rol'}
		return initnet(startup_param);
	}
	if (isInWechat()) {
		function getAjax(url, data, callback) {
			if (typeof data ==='function') {
				callback =data;
				data=null;
			}
			if (!callback) callback=function(){};
			$.ajax({
				type: "POST",
				url: url,
				dataType: "JSON",
				data: data,
				timeout:30000,
				success: function (chunk) {
					return callback(null, chunk);
				},
				error: function (e) {
					//if (typeof console == "object") console.log(e);
					callback(e);
				}
			})
		}
		var wechatApiUrl;
		function accWechatIntf(fn, data, cb) {
			if (wechatApiUrl=='failed') return cb('no wechat intf found');
			if (!wechatApiUrl) {
				var weixinapi=clone(url_option);
				weixinapi.pathname=path.join(url_option._p, fn);
				wechatApiUrl=url.format(weixinapi);
				return getAjax(wechatApiUrl, data, function(err, r) {
					if (err) {
						weixinapi=clone(url_option);
						weixinapi.pathname=path.join('/',fn);
						wechatApiUrl=url.format(weixinapi);
						getAjax(url.format(weixinapi), data, function(err, r) {
							if (err) {
								wechatApiUrl='failed';
								return cb(err);
							}
							cb(r.err, r);
						});
						return;
					}
					return cb(r.err, r);
				});
			}
			getAjax(wechatApiUrl, data, cb);
		}
		if (startup_param.code && startup_param.state=='verified') {
			var code=startup_param.code;
			accWechatIntf('/weixin/getuser', {code:code}, function(err, r) {
				var new_url=clone(url_option);
				delete new_url.search;
				if (err) {
					return location.replace(url.format(new_url));
				}
				var new_url=clone(url_option);
				delete new_url.search;
				r.id=r.openid;
				r.face='CORS?'+qs.stringify({u:r.headimgurl});
				r.pf='wechat';
				new_url.query=r;
				location.replace(url.format(new_url));
			});
			//return;
		} else {
			accWechatIntf('/weixin/verifyurl', {redirect:location.href}, function(err, r) {
				if (err) return dlgs.TipDlg(err.toString()).popup();
				location.replace(r.message);
				return;
			});
		} 
	}
	console.log('connect to', serverpath);
	var retrytimes=0;
	function initnet(loginData) {
		retrytimes++;
		if (retrytimes>5) {
			return dlgs.showTip('网络故障，请检查您的上网设置', Handler.create(null, function(logindata) {
				retrytimes=0;
				initnet(logindata);
			}, [loginData])).popup();
		}
		var socket = window._socket = new WebSocket('ws://' + serverpath );
		socket.sendp=socket.sendjson=function(data) {
			var str=JSON.stringify(data);
			return this.send(str);
		}
		socket._spec={c:[], halted:false};
		socket._resync=function() {
			if (!this._spec.halted) return;
			this._spec.halted=false;
			if (this._spec.c.length==0) return;
			for (var i=0, l=this._spec.c.length; i<l; i++) {this.onmessage(this._spec.c[i]);}
			this._spec.c=[];
		}
		socket.onopen=function() {
			retrytimes=0;
			console.log('opend', loginData);
			if (!loginData) return dlgs.showTip('illegal access').popup();
			socket.sendp(loginData);
		};
		socket.onerror=console.log.bind(console);
		socket.onclose=function () {
			console.log('conect closed');
			if (socket.cancelRelogin) return;
			setTimeout(function() {
				initnet(loginData);
			}, Math.random()*800+200);
		}
		socket.onmessage=function(msg) {
			if (this._spec.halted) {
				return this._spec.c.push(msg);
			}
			try {
				var pack=JSON.parse(msg.data);
			}catch(e) {return console.log(e, msg.data);}
			console.log(pack);
			if (pack.err) {
				pack.cancelRelogin && (socket.cancelRelogin=true);
				dlgs.showTip(pack.err.toString()).popup();
				return;
			}
			if (pack.user) {
				me._update(pack.user);
			}
			switch(pack.c) {
				case 'lgerr':
				case 'regerr':
					/*if (startup_param.pf=='wechat') {
						var new_url=clone(url_option);
						delete new_url.search;delete new_url.query;
						location.replace(url.format(new_url));
					}*/
				case 'kicked':
					socket.cancelRelogin=true;
					dlgs.showTip(pack.msg).popup();
				break;
				case 'showview':
					if (splash) {
						Laya.stage.removeChild(splash);
						splash=null;
					}
					var self=this;
					this._spec.halted=true;
					ui.active(pack.v, pack.opt, function(err, view) {
						view.active && view.active(pack);
						//if (pack.v=='game') view.setRoom(pack.id);
						self._resync();
					});
				break;
				default:
					if ((!ui.current || !ui.current.msg || !ui.current.msg(pack)) && !netmsg.event(pack.c, [pack]))
						console.log('unknown cmd ', pack);
			}
		}
	}
}
main();
