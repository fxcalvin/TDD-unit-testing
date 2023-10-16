function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  module.exports = factorial;

//   Adding the test
const assert = require('chai').assert;
const app = require('../app');

describe('multiply', function(){ 
    it('multiplyNumbers should return type number', function(){
        let result = app.multiplyNumbers(1,1); 
        assert.typeOf(result, 'number');
    });

    it('should multiply numbers and return 1', function(){
        let result = app.multiplyNumbers(1,1); 
        assert.equal(result, 1);
    });

    it('should multiply numbers and return 9', function(){
        assert.strictEqual(app.multiplyNumbers(3,3), 9);
    });

    it('should multiply a number and return 16', () => {
        const result = app.multiplyNumbers(4,4);
        assert.equal(result, 16);
    });

    describe('factorial', function(){
        it('should return 1 for input 0', function(){
            assert.equal(factorial(0), 1);
        });

        it('should return the correct result for a positive number', function(){
            assert.equal(factorial(5), 120);
        });

        it('should return 1 for input 1', function(){
            assert.equal(factorial(1), 1);
        });
    });
});