var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });
  it('can add numbers', function() {
    calculator.previousTotal = 1;
    calculator.add(4)
    assert.equal(5, calculator.runningTotal)
  })
  it('can subtract numbers', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
  })
  it('can multiply numbers', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal)
  })
  it('can divide numbers', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal)
  })

// Integration

  it('can concatenate number button clicks', function() {
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.equal(23, calculator.runningTotal)
  })
  it('can chain multiple operations', function() {
    calculator.numberClick(6);
    calculator.operatorClick("/")
    calculator.numberClick(3);
    calculator.operatorClick("+")
    calculator.numberClick(1);
    calculator.operatorClick("=")
    assert.equal(3, calculator.runningTotal)
  })
  it('can clear numbers without affecting the calculation', function() {
    calculator.numberClick(2);
    calculator.operatorClick("+")
    calculator.numberClick(3);
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick("=")
    assert.equal(6, calculator.runningTotal)
  })
