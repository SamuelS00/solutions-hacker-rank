function utopianTree(n) {
    let height = 1;
    
    let isSummer = false;
    
    for (let i = 0; i < n; i++) {
        if (isSummer) {
            height += 1;

            isSummer = false;
        } else {
            height *= 2;

            isSummer = true;
        }
    }
    
    return height;
}