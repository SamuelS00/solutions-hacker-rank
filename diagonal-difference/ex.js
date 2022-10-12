function diagonalDifference(arr) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;
  let reverseIndexCount = 0;
  
  arr.forEach((d2, d1Index) => {
    if(!reverseIndexCount) 
      reverseIndexCount = d2.length;

    reverseIndexCount -= 1;

    leftDiagonal += d2[d1Index];
    rightDiagonal += d2[reverseIndexCount];
  });

  return Math.abs(leftDiagonal - rightDiagonal);
}

console.time();
diagonalDifference2(arr3x3);
console.timeEnd();
