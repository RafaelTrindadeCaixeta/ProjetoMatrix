//Recursividade EX_1


//Recursividade EX_2


//Recursividade EX_3


// Recursividade EX_4
function multiplicarInteiros(n){
    if(n < 0 || typeof n !== 'number'){
      return undefined;
    }
    else
      if(n === 0){
        return 1;
      }
      else
        return (n*multiplicarInteiros(n-1));
  }
  console.log(multiplicarInteiros(0));
  console.log(multiplicarInteiros(1));
  console.log(multiplicarInteiros(2));
  console.log(multiplicarInteiros(3));
  console.log(multiplicarInteiros(4));
  console.log(multiplicarInteiros(-1));
  console.log(multiplicarInteiros("jl"))