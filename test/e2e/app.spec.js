const express = require('express');
const expect = require('chai').expect;
const path = require('path');
const Nightmare = require('nightmare');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));

const url = 'http://localhost:8888';

const nightmare = new Nightmare();

describe('End to End Tests', () => {
  let httpServer = null;
  let pageObject = null;

  before((done) => {
    httpServer = app.listen(8888);
    done();
  });

  beforeEach(() => {
    pageObject = nightmare.goto(url);
  });

  after((done) => {
    httpServer.close();
    done();
  });

  it('should contain a <h1> element for the page title', () =>
    pageObject.evaluate(() => document.querySelector('h1').innerText).then((headerText) => {
      expect(headerText).to.not.be.null;
      expect(headerText).to.equal('Mortgage Calculator');
    }));

  it('should contain an input element for the principal', () =>
    pageObject.evaluate(() => document.querySelector('input[name=principal]')).then((input) => {
      expect(input).to.not.be.null;
      expect(typeof input).to.equal('object');
    }));

  it('should contain an input element for the interest rate', () =>
    pageObject.evaluate(() => document.querySelector('input[name=interestRate]')).then((input) => {
      expect(input).to.not.be.null;
      expect(typeof input).to.equal('object');
    }));

  it('should include a button for the user to calculate change', () =>
    pageObject.evaluate(() => document.querySelector('button')).then((button) => {
      expect(button).to.not.be.null.and.to.not.be.undefined;
      expect(typeof button).to.equal('object');
    }));

  it('should contain an input element for loan term', () =>
    pageObject.evaluate(() => document.querySelector('input[name=loanTerm]')).then((input) => {
      expect(input).to.not.be.null;
      expect(typeof input).to.equal('object');
    }));

  it('should correctly calculate mortgage', () =>
    pageObject
      .wait()
      .type('input[name=principal]', 300000)
      .type('input[name=interestRate]', 3.75)
      .type('input[name=loanTerm]', 30)
      .select('select[name=period]', 12)
      .click('button#calculate')
      .wait('#output')
      .evaluate(() => document.querySelector('#output').innerText)
      .then((outputText) => {
        expect(outputText).to.equal('$1389.35');
      })).timeout(6500);
});
