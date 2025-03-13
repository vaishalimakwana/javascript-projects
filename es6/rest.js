// 1
function sum(...values){
    let sum = 0;
    values.map(d => sum += d );
   console.log(sum)
  }
  
  sum(10,4,5,5);

  // 1 - Prior to Es6
  function sum(){
    console.log(Array.isArray(arguments));
   console.log(arguments);
  }
  
  sum(10,4,5,5);

  // 1 Passing sum as a parameter
  function sum(...values){
    let sum = 0;
    values.map(d => sum += d );
   console.log(sum)
  }

function calculate(type,...values){
	type(...values);

}
calculate(sum, 10,20,30);