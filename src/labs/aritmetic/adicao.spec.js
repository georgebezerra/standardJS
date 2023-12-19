import { adicao } from './adicao'

describe('Tests of ADIÇÃO', () => {
  it('should sum 2 and 2 the result must be 4', () => {
     expect(adicao(2,2)).toBe(4)
  });

  it('should throw an error if what is provided to the method cannot be summed', () => {
     expect(() => {
       adicao('', '2')
     }).toThrowError()

    expect(() => {
      adicao([2,2])
    }).toThrowError()

    expect(() => {
      adicao({});
    }).toThrowError();

    expect(() => {
      adicao();
    }).toThrowError();
  });
})
