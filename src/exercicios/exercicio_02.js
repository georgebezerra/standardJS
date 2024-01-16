function idade(arg) {
  return new Date(arg);
}

function idadeDias(idadeEmAnos) {
  const diasDoAno = 365;
  const calc = diasDoAno * idadeEmAnos;
  return `A idade da pessoa ${idadeEmAnos} anos, em dias = ${calc}`;
}

console.log(idade(25));
console.log(idadeDias(25));
