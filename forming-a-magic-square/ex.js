function formingMagicSquare(s) {

  let possibilitiesMagicSquares = [
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]], 
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]], 
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]], 
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]]
  ]

  let cost = Number.MAX_VALUE;

  for (const element of possibilitiesMagicSquares) {
    let min = 0;

    for (let line = 0; line < s.length; line++) {
      for (let column = 0; column < s.length; column++) {
        min += Math.abs(s[line][column] - element[line][column])
      }
    }

    cost = Math.min(cost, min);
  }

  return cost;
}

const A = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]

console.log(formingMagicSquare(A));