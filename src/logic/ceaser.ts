// @ts-nocheck

export function encryptCeaser(str: string, num: number): string {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    num = num % 26;
    const strLowerCase = str.toLowerCase();
    let newStr = "";

    for (let i = 0; i < strLowerCase.length; i++) {
        const currentLetter = strLowerCase[i];

        if (currentLetter === " ") {
            newStr += currentLetter;
            continue;
        }

        const currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex + num;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = 26 + newIndex;
        if (str[i] === str[i].toUpperCase()) {
            newStr += alphabet[newIndex].toUpperCase();
        } else {
            newStr += alphabet[newIndex];
        }
    }
    return newStr;
}

export function decryptCeaser(text, shift) {
    var result = ""
    shift = (26 - shift) % 26
    result = encryptCeaser(text, shift)
    return result
}
