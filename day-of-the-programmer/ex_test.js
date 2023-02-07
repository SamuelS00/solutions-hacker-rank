// Test cases for the years before 1918
console.assert(dayOfProgrammer(1600) === '12.09.1600');
console.assert(dayOfProgrammer(1700) === '13.09.1700');
console.assert(dayOfProgrammer(1712) === '12.09.1712');

// Test case for the year 1918
console.assert(dayOfProgrammer(1918) === '26.09.1918');

// Test cases for the years after 1918
console.assert(dayOfProgrammer(1920) === '12.09.1920');
console.assert(dayOfProgrammer(2000) === '12.09.2000');
console.assert(dayOfProgrammer(2100) === '13.09.2100');