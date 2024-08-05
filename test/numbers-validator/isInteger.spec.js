import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';
describe('isInteger positive test', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  it('should return true if is a number', () => {
    const integer = validator.isInteger(1);

    expect(integer).to.be.equal(true);
  });

  it('should throw error if is not a number', () => {
    expect(() => {
      validator.isInteger(true);
    }).to.throw('[true] is not a number');
  });

  afterEach(() => {
    validator = null;
  });
});
