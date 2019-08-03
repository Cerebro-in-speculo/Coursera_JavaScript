var stringEx="";
for(var i=0;i<145;++i){
    stringEx+=i;
    if(i==100)
        stringEx+='\n';
    var tvitString=stringEx.slice(5,139);
}
console.log(stringEx);
console.log(typeof (stringEx));
console.log(stringEx.length);
console.log(tvitString);
console.log(tvitString.length);
console.log((stringEx.indexOf("789")));

var selectorEx="10";
//var numbersELeX=Number(selectorEx);
//console.log(typeof(numbersELeX));
var x=parseInt(selectorEx,10);
console.log(x);

var date=[];
date.push("1","2");
console.log(date);
date.pop();
console.log(date);
var dateResiz=date.concat(date);
console.log(dateResiz);

var emptyObgect={
    textEx:"Роман",
    age:35
};
emptyObgect.propertyNameEx="Ledovskih";
console.log(emptyObgect.textEx);
console.log(emptyObgect.propertyNameEx);
console.log(emptyObgect);
delete emptyObgect.age;
console.log(emptyObgect);
var date1=Object.keys(emptyObgect);
console.log(date1);