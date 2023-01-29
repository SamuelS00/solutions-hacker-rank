function birthday(s, d, m) { 
  const sumCombinations = s.map((e, i, a) => {
    if (i !== s.length - m + 1) {
      return a.slice(i, m + i).reduce((a, c) => a + c, 0)
    }   
  }) 

  return sumCombinations.filter((a) => a === d).length
}


// console.log(['a', 'b', 'c', 'd', 'e'].slice(0, 2))
// console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2))
// console.log(birthday([1, 2, 1, 3, 2], 3, 2))
// console.log(birthday([4], 4, 1))