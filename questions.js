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