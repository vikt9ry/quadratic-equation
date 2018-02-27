module.exports = function solveEquation(equation) { 
  // your implementation 

  equation = equation.replace(/- /g, "+ -") ;
  var mas = equation.split(' ') ;
  var a = mas[0]; 
  var b = mas[4]; 
  var c = mas[8]; 
  
  var result1 = ((-1*b) + Math.sqrt(Math.pow(b,2) - (4*a*c)))/(2*a); 
  var result2 =((-1*b) - Math.sqrt(Math.pow(b,2) - (4*a*c)))/(2*a); 
  
  return [result2, result1]; 
  

}