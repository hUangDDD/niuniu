var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;

var cache={};

module.exports={
    regfont:function(fontname, filename, cb) {
        if (typeof filename==='function') {cb=filename; filename=null}
        if (cache[fontname]) return cb(null, cache[fontname]);

        if (!filename) filename='bitmapFont/'+fontname+'.fnt';
        var fnt=new Laya.BitmapFont();
        fnt.loadFont(filename, Handler.create(null, function() {
            Laya.Text.registerBitmapFont(fontname, fnt);
            cache[fontname]=fnt;
            cb(null, fnt);
        }));
    }
}