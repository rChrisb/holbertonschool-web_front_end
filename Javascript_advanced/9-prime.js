function isPrime(number) {
  var count = 0;
  for (var i = 1; i <= number; i++) {
    if (number % i == 0) {
      count = count + 1;
    }
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
}
const countPrimeNumbers = function () {
  let count = 0;
  for (let i = 2; i < 101; i++) {
    if (isPrime(i)) count += 1;
  }
  return count;
};

const startTime = performance.now();
countPrimeNumbers();
const endTime = performance.now();
const elapsedTime = endTime - startTime;
console.log(
  `Execution time of printing countPrimeNumbers was ${elapsedTime} milliseconds`
);
