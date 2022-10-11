function plusMinus(arr) {
  const propObj = { p: 0, n: 0, z: 0}
  
  arr.forEach((number) => {
    if(Math.sign(number) === 1) propObj.p++
    if(Math.sign(number) === -1) propObj.n++ 
    if(Math.sign(number) === 0) propObj.z++ 
  });

  let propArr = [propObj.p, propObj.n, propObj.z];
  const radius = propArr.map((n) => (n / arr.length).toFixed(6));

  console.log(`${radius[0]}\n${radius[1]}\n${radius[2]}`)
};
