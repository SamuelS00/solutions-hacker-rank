function kangaroo(x1, v1, x2, v2) {
  if (v2 >= v1 || x1 > x2) {
    return "NO"
  }

  if (x1 == x2) {
      return "YES"
  }

  return kangaroo(x1 + v1, v1, x2 + v2, v2)
}


console.log(kangaroo(4, 2, 0, 3))