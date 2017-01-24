
/**
 * PART 02 : simpleSum()
 *
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 */

function simpleSum(numOne, numTwo){
 var sum = numOne + numTwo;
 return sum;
}


console.assert( simpleSum(8, 11) === 19 );
console.assert( simpleSum(4, 101) === 105 );
console.assert( simpleSum(2, 2) !== 5 );
