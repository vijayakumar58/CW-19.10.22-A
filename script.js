

//var marks=parseInt(prompt("Enter the marks of student!!"));
//var p1=new Promise((resolve,reject)=>{
 //if(marks>=35){
  //resolve("you have passed!!!!");
 //} 
//else{
  //reject("you have failed!!!!");
//}

//});

function mul(number){
    return new Promise((resolve,reject)=>setTimeout(()=>{
      resolve(2*number)
    },3000));
    }
    
    function bar(number){
      return new Promise((resolve,reject)=>setTimeout(()=>{
        reject(2*number+"this is rejected state")
      },3000));
      }
    
    mul(12)
    .then((data)=>{
      console.log(data);
      //mul(24);
      return mul(data);
    }).then((data1)=>{
      console.log(data1);
      //bar(48);
      return bar(data1);
    })
    .then((data2)=>console.log(data2))
    .catch((error)=>console.log(error));