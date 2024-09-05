const readline = require('readline');

 const rl = readline.createInterface({
  input: process.stdin,
   output: process.stdout
});

let inputLines = [];
let currentLine = 0;

rl.on('line', (line) => {
    inputLines.push(line);
});

 rl.on('close', () => {
    while (currentLine < inputLines.length) {
     const [n, k] = inputLines[currentLine].split(' ').map(Number);
      currentLine++;
      const s = inputLines[currentLine].split(' ').map(Number);
       currentLine++;

        console.log(countPrimeSums(s, k));
    }
});

function isPrime(num) {
  if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
       return true;
}

function countPrimeSums(s, k) {
    let count = 0;
    const combination = (arr, k, start, currentSum) => {
        if (k === 0) {
            if (isPrime(currentSum)) {
                count++;
            }
            return;
        }
        for (let i = start; i < arr.length; i++) {
         combination(arr, k - 1, i + 1, currentSum + arr[i]);
        }
    };

      combination(s, k, 0, 0);
       return count;
}
