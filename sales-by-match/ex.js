function sockMerchant(_n, ar) {
  let frequency = {}
  let result = 0

  ar.forEach((s) => {
    frequency[s]
      ? frequency[s].quantity++
      : frequency[s] = { quantity: 1 }
  })

  Object.values(frequency).forEach(
    (o) => result += Math.floor(o.quantity / 2)
  ) 

  return result
}
