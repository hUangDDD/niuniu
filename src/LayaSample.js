var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;

function HallUI() {
    HallUI.super(this);
}

Laya.class(HallUI, "HallUI", hallUIUI);
Laya.init(640, 1140);
Laya.stage.scaleMode='showall';
Laya.loader.load("res/atlas/ui/hall.json", Handler.create(this, function() {
    console.log('hall loaded')
    Laya.stage.addChild(new HallUI())
}), null, Loader.ATLAS);


