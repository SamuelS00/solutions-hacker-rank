function extraLongFactorials(n) {
    let result = BigInt(n);
    
    if (n === 0 || n === 1) {
        console.log("1"); 
        return;
    }
      
    while (n > 1) { 
      n--;
      result *= BigInt(n);
    }
    console.log(result.toString());
}
