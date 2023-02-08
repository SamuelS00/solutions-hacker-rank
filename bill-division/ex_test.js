// Test case 1
const bill1 = [3, 10, 2, 9];
const k1 = 1;
const b1 = 12;
const result1 = bonAppetit(bill1, k1, b1);
console.assert(result1 === 5, `Expected 5 but got ${result1}`);

// Test case 2
const bill2 = [3, 10, 2, 9];
const k2 = 1;
const b2 = 7;
const result2 = bonAppetit(bill2, k2, b2);
console.assert(result2 === 'Bon Appetit', `Expected 'Bon Appetit' but got ${result2}`);

// Test case 3
const bill3 = [3, 10, 2, 9, 5];
const k3 = 4;
const b3 = 8;
const result3 = bonAppetit(bill3, k3, b3);
console.assert(result3 === 'Bon Appetit', `Expected 'Bon Appetit' but got ${result3}`);

// Test case 4
const bill4 = [3, 10, 2, 9, 5];
const k4 = 4;
const b4 = 6;
const result4 = bonAppetit(bill4, k4, b4);
console.assert(result4 === 1, `Expected 1 but got ${result4}`);