function breakingRecords(scores) {
  let best_records_broke = 0
  let worst_records_broke = 0

  let aux = {
    highest_score: scores[0],
    lowest_score: scores[0]
  }

  scores.forEach((score) => {
    if (score > aux.highest_score) {
      aux.highest_score = score
      best_records_broke += 1
    }

    if (score < aux.lowest_score) {
      aux.lowest_score = score
      worst_records_broke += 1
    }
  })

  return [best_records_broke, worst_records_broke]
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))