const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
  beforeEach(() => {
    mortgage = new Mortgage();
  });

  it('should have a constructor with four parameters', () => {
    expect(mortgage.constructor).to.exist;
  });

  it('should contain constant for Monthyly Interest Rate', () => {
    expect(mortgage.monthlyInterestRate).to.equal();
  });

  it('should contain constant for Number of Payments', () => {
    expect(mortgage.numberOfPayments).to.equal();
  });

  it('should contain function for Monthly Payment', () => {
    expect(mortgage.monthlyPayment()).to.exist;
  });
});
