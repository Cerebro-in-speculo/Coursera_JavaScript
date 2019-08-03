/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var date=tweet.split(' ');
    var rez=[];
    for(var i=0;i<date.length;++i){
        if(date[i].indexOf('#')!=-1)
            rez.push(date[i].slice(1));
    }
return rez;
};
