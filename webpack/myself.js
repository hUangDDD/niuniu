var merge=require('merge');
function Me() {
	Me.super(this);
    this.coin=this.diamond=this.vip=0;
    this._update=function(obj) {
        merge(this, obj);
        this.id=this._id;
        this.nickname=this.nickname||this._id;
        this.face=this.face||'niuniu_psd/hall/01_touxiang2.png';

        for (var ele in obj) {
            this.event(''+ele+'chgd', [this]);
        }
    }
}
Laya.class(Me, 'Me', Laya.EventDispatcher);

module.exports=new Me();
