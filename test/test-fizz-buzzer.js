//Goals
//test normal case on range of input 1-15
//test for edge case
'use strict';
const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

//
describe('fizzBuzzer', function() {

    //Tests the normal cases
    it('should replace num with expected value', function() {
            //Normal Case
        const normalCases = [
        {num: 3, expected: 'fizz'},
        {num: 5, expected: 'buzz'},
        {num: 15, expected: 'fizz-buzz'},
        {num: 1, expected: 1},
        {num: 14, expected: 14}
        ]

    // for each input number: produce expected value
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            answer.should.equal(input.expected);
        });
    });

    //Tests the edge case(s)

    it('should raise error if argument is not a number', function() {
        const badInputs = ['w', '.', '!'];
        badInputs.forEach(function(input){
            (function(){
                fizzBuzzer(input)
            }).should.throw(Error);
        });
    });
});