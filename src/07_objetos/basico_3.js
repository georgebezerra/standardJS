const data = {
  dia: 1,
  mes: 10,
  ano: 2021,
};

console.log(data.dia);
console.log(data.mes);
console.log(data.ano);
console.log(`${data.dia}/${data.mes}/${data.ano}`);

console.log('\nAlterando o valor de um atributo');
data.dia = 24;
data.mes = 12;
data.ano = 2023;
console.log(`${data.dia}/${data.mes}/${data.ano}`);
