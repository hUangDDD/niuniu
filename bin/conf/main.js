(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.async = global.async || {})));
}(this, function (exports) { 'use strict';
//start
    exports.gifts={
        "电话卡":{"url":"niuniu_psd/shangdian/04_liwu.png","coin":10000},
        "改名卡":{"url":"niuniu_psd/shangdian/04_liwu1.png","coin":3000},
        "周卡":{"url":"niuniu_psd/shangdian/04_liwu2.png","coin":3000},
        '入场券':{"url":"niuniu_psd/shangdian/04_liwu5.png","coin":1}
        };
    exports.vip=[
        {"req":{"cash":6},"mail":{"coin":3000},"db":{"lotery":1,"vip":1}},
        {"req":{"cash":18},"mail":{"coin":6000},"db":{"lotery":1,"vip":1}}
        ];
    exports.chips=[10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000, 10000000];
    exports.room={'1':{min:10, historycash:6, maxhold:1000000}, 
        '2':{min:10000, historycash:500, maxhold:10000000}, 
        '3':{min:100000, historycash:3000, maxhold:100000000},
        '4':{min:1000000}};
//end
}));