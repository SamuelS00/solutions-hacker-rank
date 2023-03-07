// 97 - 122

function designerPdfViewer(h, word) {
    const lettersLength = [];
    let tallestLetter = 0;

    word.split('').forEach((char) => {
        const charCode = char.codePointAt(0) - 97;
        lettersLength.push(h[charCode]);
    });

    tallestLetter = Math.max(...lettersLength)
    return tallestLetter * word.length;
}
