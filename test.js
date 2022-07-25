var mocha = require('mocha')
var { describe } = mocha
var it = mocha.it

const { calculate } = require ('./index');

describe('TEST CALC' , () => {
    it('Calculate empty string', () => {
       console.log(calculate(''));
    });

    it('Calculate simple string with one element', () => {
        console.log(calculate('1'));
    });

    it('Calculate simple string with one element 2', () => {
        console.log(calculate('9'));
    });

    it('Calculate simple string with two elements', () => {
        console.log(calculate('1,0'));
    });

    it('Calculate simple string with two elements 2', () => {
        console.log(calculate('1,133'));
    });

    it('Calculate simple string with 3 elements ', () => {
        console.log(calculate('5,6,7'));
    });

    it('Calculate simple string with "\\n" delimiter ', () => {
        console.log(calculate('5\n6\n7', '\n'));
    });

    it('Calculate simple string with ";" delimiter ', () => {
        console.log(calculate('5;6;7', ';'));
    });

    it('String with negative numbers return exceptions', () => {
        console.log(calculate('-5;6;7', ';'));
    });

    it('String with 2 negatives numbers return exceptions', () => {
        console.log(calculate('-5;-6;7', ';'));
    });
});
