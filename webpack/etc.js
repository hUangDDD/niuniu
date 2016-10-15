var printf=require('printf');

module.exports={
    toCoinStr:function(coin) {
        if (!coin) return '0';
        if (coin>100000) return printf('%.2f万', coin/100000);
        return coin.toString();
    },
    _noop:function(){}
}