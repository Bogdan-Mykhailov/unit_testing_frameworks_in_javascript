import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('isAllNumbers positive test', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  it('should return true if all arguments are numbers', () => {
    const data = [1, 2, 3, 4, 5, 6, 7];
    const args = validator.isAllNumbers(data);

    expect(args).to.be.eql(true);
  });

  it('should throw an error if argument is not an array', () => {
    const data = '2';

    expect(() => {
      validator.isAllNumbers(data);
    }).to.throw(`[${data}] is not an array`);
  });

  afterEach(() => {
    validator = null;
  });
});
