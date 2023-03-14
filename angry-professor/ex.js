function angryProfessor(k, a) {
    let attended = 0;

    a.forEach((s) => {
        if (s <= 0) {
            attended++;
        }
    })

    return (attended < k) ? 'YES' : 'NO';
}


console.log(angryProfessor(3, [-1, -3, 4, 2]));