// @ts-nocheck

export function encryptThrimetius(text, shift) {
    const key = shift * 3 + 1
    let result = ""
    for (var i = 0; i < text.length; i++) {
        var c = text.charCodeAt(i)

        if (c >= 65 && c <= 90) {
            result += String.fromCharCode(((c - 65 + key) % 26) + 65)
        } else if (c >= 97 && c <= 122) {
            result += String.fromCharCode(((c - 97 + key) % 26) + 97)
        } else {
            result += text.charAt(i)
        }
    }
    return result
}

export function decryptThrimetius(text, shift) {
    const key = shift * 3 + 1
    var result = ""
    shift = (26 - key) % 26
    result = encrypt(text, key)
    return result
}