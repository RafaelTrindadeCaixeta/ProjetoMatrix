function multiplicarInteiros(n){
  if(typeof n ==='number'){
    return operador(n);
  }
  function operador(n){
    var multiplicar=1;
    var i=1;
    while(i <= n){
      multiplicar*= i;
      i++;
    }
    return multiplicar;
  }
  
}
console.log(multiplicarInteiros(2));
console.log(multiplicarInteiros(3));
console.log(multiplicarInteiros(4));
console.log(multiplicarInteiros(5));
console.log(multiplicarInteiros("n"));


