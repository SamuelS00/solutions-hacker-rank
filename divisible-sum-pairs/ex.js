function is_pair(n1, n2, k) {
  return (n1 + n2) % k === 0;
}

function calculates_pair(n, k, ar, p) {
  let pairs = p

  if (n > 1) {
    const [ firstPosition, ...restAr ] = ar

    restAr.forEach((num) => {
      if (is_pair(firstPosition, num, k)) {
        pairs += 1
      }
    })

    return calculates_pair(n - 1, k, restAr, pairs)
  }

  return pairs
}

function divisibleSumPairs(n, k, ar) {
  return calculates_pair(n, k, ar, 0)
}

const ar = [1, 3, 2, 6, 1, 2]
const ar2 = [1, 2, 3, 4, 5, 6]

console.log(divisibleSumPairs(6, 3, ar))
console.log(divisibleSumPairs(6, 5, ar2))


