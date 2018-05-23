const expect = require('chai').expect;
const Calculator = require('../../src/js/lib/Calculator');

describe('Calculator', () => {
  let calculator = null;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should have an add function', () => {
    expect(calculator.add).to.exist;
  });

  it('should add 2 + 2 together correctly', () => {
    expect(calculator.add(2, 2)).to.equal(4);
  });

  it('should subtract 2 - 2 correctly', () => {
    expect(calculator.subtract).to.exist;
  });

  it('should multiply 2 + 2 together correctly', () => {
    expect(calculator.multiply(2, 2)).to.equal(4);
  });

  it('should divide 2 by 2 correctly', () => {
    expect(calculator.divide(2, 2)).to.equal(1);
  });
});
