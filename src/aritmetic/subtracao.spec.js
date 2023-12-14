import { subtracao } from './subtracao';

describe('Tests of SUBTRAÇÃO', () => {
  it('should subtration 5 and 5 the result must be 0', () => {
    expect(subtracao(5, 5)).toBe(0);
  });

  it('should throw an error if what is provided to the method cannot be subtration ', () => {
    expect(() => {
      subtracao('', '2');
    }).toThrowError();

    expect(() => {
      subtracao([2, 2]);
    }).toThrowError();

    expect(() => {
      subtracao({});
    }).toThrowError();

    expect(() => {
      subtracao();
    }).toThrowError();
  });
});
