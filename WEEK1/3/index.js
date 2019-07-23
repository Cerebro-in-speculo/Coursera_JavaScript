/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */

module.exports = function (hours, minutes, interval) {
var totalMinuts=hours*60+minutes+interval;
var realHours=Math.floor(totalMinuts/60);
var realMinuts=Math.floor(totalMinuts%60);

    if(realHours<24){
        realHours=realHours>10?realHours:("0"+realHours);
        realMinuts=realMinuts>10?realMinuts:("0"+realMinuts);
        return realHours+":"+realMinuts;
    }else{
        while (realHours>=24)
            realHours-=24;
        realHours=realHours>10?realHours:("0"+realHours);
        realMinuts=realMinuts>10?realMinuts:("0"+realMinuts);
        return realHours+":"+realMinuts;
    }
};

