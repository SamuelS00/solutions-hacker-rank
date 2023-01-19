function miniMaxSum(arr) {
  let min = 0
  let max = 0

  const arrSorted = arr.sort((a, b) => a - b)
  const sumArr = arr.reduce((a, b) => a + b, 0)
  
  min = sumArr - arrSorted[4]
  max = sumArr - arrSorted[0]
  
  console.log(min, max)
}

// 10 14