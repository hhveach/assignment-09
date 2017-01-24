
// Part 07 : getMinimum()

// Write a function cthat will find the minimum of four
// input numbers. You can do it using nested if statements,
// boolean operators, or both (but not neither).

function getMinimum(numOne, numTwo, numThree, numFour){

 if (numOne < numTwo && numOne < numThree && numOne < numFour){

   return numOne;
 }

 else if (numTwo < numOne && numTwo < numThree && numTwo < numFour){

   return numTwo;
 }

 else if (numThree < numOne && numThree < numTwo && numThree < numFour){

   return numThree;
 }

 else if (numFour < numOne && numFour < numTwo && numFour < numThree){

   return numFour;
 }

}





//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( getMinimum(1,2,4,0) === 0 )
console.assert( getMinimum(1000,-2,-99,50) === -99 )
console.assert( getMinimum(-1000,-2,-99,50) === -1000 )
console.assert( getMinimum(400,-11,12,-5) === -11 )
