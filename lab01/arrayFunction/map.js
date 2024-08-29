const array1=[1,4,9,16]
const map1=array1.map((x)=>x*2)
console.log(map1);


//căn bậc 2
const num=[1,4,9]
const roots=num.map((num)=>num**2)//Math.sqrt(num)
console.log(roots);

var number=[30,3,2003]

Array.prototype.mapfn=function(callback){
    callback();
    
}
  