function birthdayCakeCandles(candles) {
  const higherNum = Math.max(...candles)
  const highestNumOcc = candles.filter(num => num === higherNum).length
  
  return highestNumOcc
}

console.log(birthdayCakeCandles([3, 2, 1, 3]))