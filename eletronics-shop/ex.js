function getMoneySpent(keyboards, drives, b) {
  let mostExpensiveOption = -1;
  
  let keyboardsSort = keyboards.sort().reverse()

  drives.forEach((dp) => {
    keyboardsSort.forEach((kp) => {
      let sum = dp + kp;

      if (sum <= b && sum > mostExpensiveOption) {
        mostExpensiveOption = sum;
      }
    })
  })

  return mostExpensiveOption;
} 

const input = [[40, 50, 60, 10], [5, 8, 12], 60];
const input2 = [[5, 1, 1], [4], 5];
const input3 = [[729580], [297], 560]

console.log(getMoneySpent(...input3));