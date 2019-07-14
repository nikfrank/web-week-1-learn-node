/*let sum = 0;
   for(let i=2; i< process.argv.length; i++){
   sum = sum + 1*process.argv[i];
   }
   console.log(sum);*/

/*const result = process.argv.slice(2).reduce((total, item)=> {
  return total + 1*item;
}, 0);

console.log(result);*/


console.log(process.argv.slice(2).reduce((total, item)=> total + 1*item, 0));
