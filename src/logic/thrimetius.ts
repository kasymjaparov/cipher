const symbols = [" ", ".", ",", "'", ":", "-", "*", "-", "/", "^", "#", "\n", "\t", "\0", "\n", "\v", "\f", "\r"]
const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("")
export function encryptThrimetius(message: string, key: string) {
    let encryptedMsg = []
    let newKey = []
    for (let i = 0, j = 0; i < message.length; ++i, ++j) {
        if (j === key.length)
            j = 0
        newKey[i] = key[j];
    }
    for (let i = 0; i < message.length; ++i) {
        if (symbols.some((item) => item === message[i])) {
            encryptedMsg[i] = message[i]
            continue
        }
        encryptedMsg[i] = alphabet[(alphabet.indexOf(message[i]) + alphabet.indexOf(newKey[i])) % 26]
    }
    return encryptedMsg.join("")
}

export function decryptThrimetius(message: string, key: string) {
    let decryptedMsg: string[] = []
    let newKey: string[] = []
    for (let i = 0, j = 0; i < message.length; ++i, ++j) {
        if (j === key.length)
            j = 0
        newKey[i] = key[j];
    }
    for (let i = 0; i < message.length; ++i) {
        if (symbols.some((item) => item === message[i])) {
            decryptedMsg[i] = message[i]
            continue
        }
        decryptedMsg[i] = alphabet[(26 + alphabet.indexOf(message[i]) - alphabet.indexOf(newKey[i])) % 26]
    }
    return decryptedMsg.join("")
}