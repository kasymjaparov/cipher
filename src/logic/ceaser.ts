// @ts-nocheck

export function encryptCeaser(text, shift) {
    var result = ""
    for (var i = 0; i < text.length; i++) {
        var c = text.charCodeAt(i)

        if (c >= 65 && c <= 90) {
            result += String.fromCharCode(((c - 65 + shift) % 26) + 65)
        } else if (c >= 97 && c <= 122) {
            result += String.fromCharCode(((c - 97 + shift) % 26) + 97)
        } else {
            result += text.charAt(i)
        }
    }
    return result
}

export function decryptCeaser(text, shift) {
    var result = ""
    shift = (26 - shift) % 26
    result = encrypt(text, shift)
    return result
}