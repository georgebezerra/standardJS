import { multiplicacao } from './multiplicacao';

describe('Tests of MULTIPLICAÇÃO', () => {
  it('should mult 5 and 5 the result must be 25', () => {
    expect(multiplicacao(5, 5)).toBe(25);
  });

  it('should throw an error if what is provided to the method cannot be summed', () => {
    expect(() => {
      multiplicacao('', '2');
    }).toThrowError();

    expect(() => {
      multiplicacao([2, 2]);
    }).toThrowError();

    expect(() => {
      multiplicacao({});
    }).toThrowError();

    expect(() => {
      multiplicacao();
    }).toThrowError();
  });
});
