const notas = [7, 8, 3, 5, 10, 9, 8, 8];

//for each = signfica percorre cada um dos elementos. -- é uma praticidade em relação ao for

console.log('percorrendo os valores: for of.\n');
for (let nota of notas) {
  console.log(nota);
}

console.log('\npercorrendo os valores: for of.');
let valores = '';

for (let nota of notas) {
  valores += nota + ' ';
}

console.log(valores);

console.log('\npercorrendo os indices: for in.');
let indices = '';

for (let indice in notas) {
  indices += indice + ' ';
}

console.log(indices);
