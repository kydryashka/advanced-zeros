module.exports = function getZerosCount(number, base) {
  var n=1
  var i=2;
  var arr=[];
  var map=new Map();

  do{
  if (base%i==0){
  	map.set(i,n);
  	base=base/i;
  	n++;
  } else {
  	i++;
  	n=1;
  }
} while(i<=base);

  map.forEach((value,key)=>{
  var numberOfNull=0;
  var n=number;
  	while (n>=key){
  	numberOfNull+=Math.floor(n/key);
  	n=Math.floor(n/key);	
  }
  arr.push(Math.floor(numberOfNull/value));
  });
  return Math.min.apply(null, arr);
}