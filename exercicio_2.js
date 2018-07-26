// Exercicio 2

function somarImpares(n){
  if (validar(n)){
    return operador(n);
  }
  function validar(n){
    return typeof n==='number';
  }
  function operador(n){
    var saida=0;
    var contador=0;
    var somar=0;
    while(saida<n){
      contador++;
      if(contador%2 !==0 && n!== 0){
        somar += contador;
        saida++;
      }
    }
    return somar;
  }
}
console.log(somarImpares("n"));
console.log(somarImpares(0));
console.log(somarImpares(1));
console.log(somarImpares(2));
console.log(somarImpares(3));