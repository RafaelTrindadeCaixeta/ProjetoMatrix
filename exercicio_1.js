// Exercicio 1

var n;
function somarInteiros(n){
  if( typeof n === 'number'){
    return n*(n+1)/2;
  }
  else
    return undefined;
}
console.log(somarInteiros(1));
console.log(somarInteiros(2));
console.log(somarInteiros(3));
console.log(somarInteiros(5));
console.log(somarInteiros('a'));
console.log(somarInteiros('+'));
console.log(somarInteiros(100000));
console.log(somarInteiros());