function catAndMouse(x, y, z) {
  const catA = Math.abs(z - x);
  const catB = Math.abs(z - y);

  if(catA < catB){
    return 'Cat A'
  } else if (catA > catB){
    return 'Cat B'
  } else{
    return 'Mouse C'
  }
}

console.log(catAndMouse(1, 3, 2))