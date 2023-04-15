// 65 - 90

// 97 - 122

const lowerOrUpperCase = (character) => {
    let characterCharCode = character.charCodeAt(0)

    if (characterCharCode >= 65 && characterCharCode <= 90) {
        return [65, 90];
    } else {
        return [97, 122];
    }
};

const cipher = (c, k, MIN, MAX) => {
    let newCharacter = String.fromCharCode(c.charCodeAt(0) + k);
    let newCharacterCharCode = newCharacter.charCodeAt(0);

    while (newCharacterCharCode > MAX) {
        let remainder = newCharacterCharCode - MAX - 1;

        newCharacter = String.fromCharCode(MIN + remainder);
        newCharacterCharCode = newCharacter.charCodeAt(0);
    }

    return newCharacter;
};


function caesarCipher(s, k) {
    const encryptedTextArr = s.split('').map((c) => {
        if (c.length === 1 && c.match(/[a-z]/i)) {
            const [MIN, MAX] = lowerOrUpperCase(c);
            return cipher(c, k, MIN, MAX);   
        } else {
            return c;
        }
    });

    return encryptedTextArr.join('');
};
