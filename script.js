var marks=parseInt(prompt("Enter the age of voter!!"));
var p1=new Promise((resolve,reject)=>{
 if(marks>18){
  resolve("you are eligible!!!!");
 } 
else{
  reject("you are not eligeble!!!!");
}

});

console.log(p1);