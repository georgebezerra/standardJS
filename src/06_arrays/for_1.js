const numeros = [1, 2, 3, 4, 5, 6, 11];

for (let i = 0; i < 6; i++) {
  console.log(i);
}

console.log('\n');

for (let i = 0; i < 6; i++) {
  console.log(i, numeros[i]);
}

console.log('\n');

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

console.log('\n');

for (let i = 0; i < numeros.length; i += 2) {
  console.log(numeros[i]);
}
