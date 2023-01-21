function calculates_fallen_fruits(start, end, treePosition, fruits) {
  return fruits.filter((fruit) => {
    let fruitPosition = treePosition + fruit

    if (fruitPosition >= start && fruitPosition <= end) return fruit
  }).length
}


function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const fallenApples = calculates_fallen_fruits(s, t, a, apples)
  const fallenOranges = calculates_fallen_fruits(s, t, b, oranges)

  console.log(fallenApples)
  console.log(fallenOranges)
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
