function dayOfProgrammer(year) {
  if (year === 1918) return '26.09.1918';

  let isLeapYear = year < 1918
    ? year % 4 === 0
    : year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

  return isLeapYear 
    ? `12.09.${year}` 
    : `13.09.${year}`;
}

console.log(dayOfProgrammer(1800))
console.log(dayOfProgrammer(2016))
console.log(dayOfProgrammer(2017))
console.log(dayOfProgrammer(1900))
console.log(dayOfProgrammer(1917))
