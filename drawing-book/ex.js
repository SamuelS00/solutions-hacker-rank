function pageCount(n, p) {
  const book = Array(Math.floor(n / 2) + 1)
    .fill(1)
    .map((_, i) => [i * 2, (i * 2 + 1)]);

  let pageStart = book.findIndex((a) => a.includes(p))
  let pageEnd = book.reverse().findIndex((a) => a.includes(p))

  const minValue = Math.min(pageStart, pageEnd) 

  return minValue > 0 ? minValue : 0
}

console.log(pageCount(6, 2)) // 1
console.log(pageCount(5, 4)) // 0
console.log(pageCount(5, 1)) // 0
console.log(pageCount(4, 4)) // 0
console.log(pageCount(7, 4)) // 1