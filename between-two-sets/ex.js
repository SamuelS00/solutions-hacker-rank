function getTotalX(a, b) {
  let count = 0;
  const limit = Math.min(...b);

  for (let i = 1; i <= limit; i++) {
    if (b.every((n) => n % i === 0) && a.every((num) => i % num === 0)) {
      count++;
    }
  }

  return count;
}

console.log(getTotalX([2, 6], [24, 36]))
console.log(getTotalX([2, 4], [16, 32, 96]))
console.log(getTotalX([1], [100]))
