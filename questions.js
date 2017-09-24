/** Question 1 nextPerfectSquare*/
const nextPerfectSquare = (n) => {
  let x = Math.sqrt(++n);
  
  if (Number.isInteger(x)) {
    return n;
  }
  return nextPerfectSquare(++n);
};
/** For example */
console.log(nextPerfectSquare(0));

/** Question 2  n-upcount of an array */
const nUpcount = (upArray, n) => {
  let counter = 0;
  upArray.reduce((accumulator, curVal) => {
    const prevAcc = accumulator;
    accumulator += curVal;
    if (prevAcc <= n && accumulator > n) {
      counter++;
    }
    return accumulator;
  }, 0);
  return counter;
};
console.log(nUpcount([2,3,1,-6,8,-3,-1,2], 5));
console.log(nUpcount([6,3,1], 6));
console.log(nUpcount([1,2,-1,5,3,2,-3], 20));

/** Question 3  primeCount*/
const primeCount = (start, end) => {
  let primeCounter = 0;
  let primes = [];
  for (let x = start; x <= end; x++) {
    let isPrime = true;
    if (x < 2) continue;
    for (let y = 2; y < x; y++) {
      if (x % y === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      primeCounter++;
      primes.push(x);
    }
  }
  return { [primeCounter]: primes };
};
console.log('Total Primes:', primeCount(-10, 6));

/** Question 4 Madhav Array */
const isMadhavArray = (n = []) => {
  /** Not sure what this means */
};

/** Question 2 Sum factor of an array */
const sumFactor = (sfArray = []) => {
  const sumFact = sfArray.reduce((sum, curVal) => sum + curVal);
  return sfArray.filter( x => x === sumFact ).length;
};
console.log('Count of sum factor: ', sumFactor([9, -3, -3, -1, -1]));

/** Question 3 Guthrie index of n*/
let gICounter = 0;
const gutherieIndex = (n) => {
  if (n === 1) {
    return gICounter;
  }
  n = Math.abs(n);
  /** 
   * if n is even then divide by 2 
   * if n is odd then multiply by 3 and add 1
   * continue this until n becomes 1 
  */
  if (n % 2 === 0) {
    n /= 2;
  } else {
    n *= 3;
    n++;
  }
  gICounter++;
  return gutherieIndex(n);
};

console.log('Gutherie Index of 3: ', gutherieIndex(3));
/** Question 3 Centered-15;  An array is called centered-15 if some consecutive sequence of elements of the array sum to 15 and this sequence is preceded and followed by the same number of elements.  For example 
{3, 2, 10, 4, 1, 6, 9} is centered-15 because  the sequence 10, 4, 1 sums to 15 and the sequence is preceded by two elements (3, 2) and followed by two elements(6,9).
*/
const isCentered15 = (numbers) => {
  const median = Math.floor(numbers.length/2);
  let sum = numbers[median];
  const isCountEven = numbers.length % 2 === 0;
  if (sum === 15) {
    if (!isCountEven) {
      return 1;
    }
  }
  for (let x = 1, y = median; x <= median; x++) {
    sum += numbers[median - x];
    if (sum !== 15) {
      sum += numbers[++y];
    }
    if (sum === 15 && ((numbers.length - 1) - y) === (median - x)) {
      return 1;
    }
  }
  return 0;
};

console.log('Is Centered 15 [3, 2, 10, 4, 1, 6, 9]: ', isCentered15([3, 2, 10, 4, 1, 6, 9]));

console.log('Is Centered 15 [3, 2, 15, 6, 9]: ', isCentered15([3, 2, 15, 6, 9]));

console.log('Is Centered 15 [0,3, 2, 15, 6, 9, 4]: ', isCentered15([0,3, 2, 15, 6, 9, 4]));

console.log('Is Centered 15 [3, 2,0, 1,5,4,5, 6, 9, 4]: ', isCentered15([3, 2,0, 1,5,4,5, 6, 9, 4]));

console.log('Is Centered 15 [3, 2,0, 1,5,4,5, 6, 4, 4, 1,2,4,5,6]: ', isCentered15([3, 2,0, 1,5,4,5, 6, 4, 4, 1,2,4,5,6]));

/** 
 * A perfect number is one that is the sum of its factors, excluding itself. 
 * The 1st perfect number is 6 because 6 = 1 + 2 + 3. 
 * The 2nd perfect number is 28 which equals 1 + 2 + 4 + 7 + 14. 
 * The third is 496 = 1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248. 
 * In each case, the number is the sum of all its factors excluding itself. 
 * 
 * Write a method named henry that takes two integer arguments, i and j and returns the sum of the ith and jth perfect numbers.
 *  So for example, henry (1, 3) should return 502 because 6 is the 1st perfect number and 496 is the 3rd perfect number and 6 + 496 = 502 
 */
const perfectNumber = (n) => {
  const factorsN = [];
  factorsN.push(1);
  for (x = 2; x < n; x++) {
    if (n % x === 0) {
      factorsN.push(x);
    }
  }
  return factorsN.reduce((sum, cur) => sum + cur) === n;
};
const henry = (i, j) => {
  const perfectNums = [];
  for (let x = 5; x < 10000; x++) {
    if (perfectNumber(x)) {
      perfectNums.push(x);
    }
  }
  return perfectNums[i - 1] + perfectNums[j - 1];
};

console.log('Factors: ', henry(1, 2));

/**
 * Write a method named isDivisible that takes an integer array and a divisor and returns 1
 * if all its elements are divided by the divisor with no remainder. Otherwise it returns 0.
 */

 const isDivisible = (a, divisor) => {
   let isDiv = 1;
   for (i = 0; i < a.length; i++) {
     isDiv &= (a[i] % divisor === 0);
   }
   return isDiv;
 };
 console.log('Is Divisible:', isDivisible([3, 3, 6, 36], 3));
 console.log('Is Divisible:', isDivisible([3, 4, 3, 6, 36, 42], 3));
 console.log('IsDivisible:', isDivisible([0, 12, 24, 36], 12));
 console.log('IsDivisible:', isDivisible([], 12));

 /**
  * An array is defined to be n-unique if exactly one pair of its elements sum to n. 
  * For example, the array {2, 7,  3, 4} is 5-unique because only a[0] and a[2] sum to 5.
  * But the array {2, 3, 3, 7} is not 5-unique because a[0] + a[1] = 5 and a[0] + a[2] = 5.
  * Write a function named isNUnique that returns 1 if its integer array argument is n-unique, otherwise it returns 0.
  * So isNUnique(new int[ ]{2, 7, 3, 4}, 5) should return 1 and 
  * isNUnique(new int[] {2, 3, 3, 7}, 5) should return 0.
  */