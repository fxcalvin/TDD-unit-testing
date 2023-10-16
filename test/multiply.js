/* eslint-disable no-undef */

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
    })

    it('Should multiply two numbers correclty', function(){
        assert.strictEqual(app.multiplyNumbers(2,2),4)
    })

    // it('should multiply numbers and return 9', function(){
    //     assert.strictEqual(app.multiplyNumbers(3,3), 9)
    // })

    // it('should multiply a positive number by a negative number correctly', () => {
    //     const result = app.multiplyNumbers(4, -4);
    //     assert.equal(result,-16)
    //   });
    
  
});