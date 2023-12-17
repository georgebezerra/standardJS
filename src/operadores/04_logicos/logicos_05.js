const t1 = true;
const t2 = true;

//O (parenteses), seguindo a regra matemática de precedência, garante que executará antes da concatenação
console.log('Vamos comprar a TV 50"? ' + (t1 && t2)); //AND

let comprarTV50 = t1 && t2; //AND
console.log('Vamos comprar a TV 50"? ', comprarTV50, '!!!');

let comprarTV32 = t1 !== t2; //XOR
console.log('Vamos comprar a TV 50"? ', comprarTV32, '!!!');

let tomarsorvete = t1 || t2;
console.log('Vamos comprar sorvete?', tomarsorvete); //OR

let ficarEmCasa = !tomarsorvete;
console.log('Vamos ficar em casa?', ficarEmCasa); //NOT
