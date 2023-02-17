function countingValleys(steps, path) {
  let countValley = 0;
  let level = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === 'U') {
      level += 1
      if (level === 0) {
        countValley++
      }
    } else {
      level -= 1
    }
  }

  return countValley;
}

console.log(countingValleys(8, 'UDDDUDUU'))
