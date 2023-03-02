function pickingNumbers(a) {
    const appearanceRank = {}
    const numbersSet = [...new Set(a)].sort();
    let longestSequence = 0;

    a.forEach((n) => {
        appearanceRank[n] 
            ? appearanceRank[n]++
            : appearanceRank[n] = 1
    });

    numbersSet.forEach((n1, i, arr) => {
        let length = appearanceRank[n1];
        longestSequence = Math.max(length, longestSequence);

        arr.forEach((n2, j) => {
            const difference = Math.abs(n1 - n2);
            length = appearanceRank[n1] + appearanceRank[n2];

            if (difference <= 1 && i != j) {
                longestSequence = Math.max(length, longestSequence);
            }
        })
    })

    return longestSequence
}

