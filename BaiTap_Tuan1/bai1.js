// 1
var a = 20;
var b = 20; 

console.log("Chu vi: " + ((+a + +b) * 2));
console.log("Dien tich: " + (+a * +b));

// 2
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question("Nhap Chieu Rong: ", cr => {
  readline.question("Nhap Chieu Dai: ", cd => {
   readline.close();

   var x = (+cd + +cr) * 2;
   var y = +cd * +cr; 
   
   console.log("Chu Vi: " + x);
   console.log("Dien Tich: " + y);
})
})