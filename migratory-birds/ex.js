// TODO: decrease complexity

function migratoryBirds(arr) {
  const rank = []
  let rankSorted = []
  let lastElement = {}
  let penultimateElement = {}

  arr.forEach((id) => {
    let exist = rank.find((e) => e.id === id)

    exist
      ? exist.sighting++
      : rank.push({ id, sighting: 1 })
  })

  rankSorted = [...rank].sort((a, b) => a.sighting - b.sighting)

  lastElement = rankSorted.at(-1)
  penultimateElement = rankSorted.at(-2)

  if (lastElement.sighting === penultimateElement.sighting) {
    return Math.min(lastElement.id, penultimateElement.id);
  } else {
    return lastElement.id;
  }
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])) // 3
console.log(migratoryBirds([1, 4, 4, 4, 5, 3])) // 4
console.log(migratoryBirds([1, 1, 2, 2, 3])) // 1