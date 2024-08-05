import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('getEvenNumbersFromArray positive test', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  it('should return an array of even numbers', () => {
    const data = [5, 2, 6, 11, 12];
    const evenNumbers = validator.getEvenNumbersFromArray(data);

    expect(evenNumbers).to.be.eql([2, 6, 12]);
  });

  it('should throw an error if array is not full of numbers', () => {
    const data = [5, '2', 6, 11, 12];

    expect(() => {
      validator.getEvenNumbersFromArray(data);
    }).to.throw(`[${data}] is not an array of "Numbers"`);
  });

  afterEach(() => {
    validator = null;
  });
});
