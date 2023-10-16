const assert = require('chai').assert;
const calculateTax = require('./taxCalculator');

describe('Tax Calculator', function() {
  it('should return 0 for earnings less than 12,000', function() {
    assert.equal(calculateTax(10000), 0);
  });

//   it('should calculate 20% tax for earnings between 12,000 and 36,000', function() {
//     assert.equal(calculateTax(24000), 4800);
//   });

//   it('should calculate 40% tax for earnings greater than 36,000', function() {
//     assert.equal(calculateTax(50000), 20000);
//   });
});