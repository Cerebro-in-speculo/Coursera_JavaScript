/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {

    var temp=[];
    function mapHashtag(mData,i){
        return mData.toLowerCase();
    }

    function filterHashteg(fDate,i){
        if(temp.indexOf(fDate)==-1){
            temp.push(fDate);
            return true;
        }
    }
    return  hashtags.map(mapHashtag).filter(filterHashteg).join(', ');
}