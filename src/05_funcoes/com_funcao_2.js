const d1 = 3;
const m1 = 7;
const a1 = 2021;

function exibirData1() {
  console.log('Exibir data 1');
  console.log(`Dia: ${d1}`);
  console.log(`Mês: ${m1}`);
  console.log(`Ano: ${a1}\n`);
}

const d2 = 23;
const m2 = 12;
const a2 = 2022;

function exibirData2() {
  console.log('Exibir data 2');
  console.log(`${d2}-${m2}-${a2}`);
}

function exibirData3(d, m, a) {
  console.log('\nExibir data - passando parâmetros');
  console.log(`${d}/${m}/${a}`);
}

exibirData1();
exibirData2();
exibirData3(d1, m1, a1);

console.log('\nFim !!');
