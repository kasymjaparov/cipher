// @ts-nocheck

export function encryptThrimetius(plainString, key) {
    let shiftAmount = key * 3 + 1
    var cipheredtext = "";
    for (var i = 0; i < plainString.length; i++) {
        var plainCharacter = plainString.charCodeAt(i);
        if (plainCharacter >= 97 && plainCharacter <= 122) {
            cipheredtext += String.fromCharCode((plainCharacter - 97 + shiftAmount) % 26 + 97);
        } else if (plainCharacter >= 65 && plainCharacter <= 90) {
            cipheredtext += String.fromCharCode((plainCharacter - 65 + shiftAmount) % 26 + 65);
        } else {
            cipheredtext += String.fromCharCode(plainCharacter);
        }
    }
    return cipheredtext;
}

export function decryptThrimetius(encryptedString, key) {
    let unshiftAmount = key * 3 + 1
    let plainText = "";
    for (let i = 0; i < encryptedString.length; i++) {
        let encryptedCharacter = encryptedString.charCodeAt(i);
        if (encryptedCharacter >= 97 && encryptedCharacter <= 122) {
            plainText += String.fromCharCode((encryptedCharacter - 97 - unshiftAmount + 26) % 26 + 97);
        } else if (encryptedCharacter >= 65 && encryptedCharacter <= 90) {
            plainText += String.fromCharCode((encryptedCharacter - 65 - unshiftAmount + 26) % 26 + 65);
        } else {
            plainText += String.fromCharCode(plainCharacter);
        }
    }
    return plainText;
}