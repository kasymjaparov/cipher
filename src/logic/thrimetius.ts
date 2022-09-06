// @ts-nocheck

import { decryptCeaser, encryptCeaser } from "./ceaser";

export function encryptThrimetius(plainString, key) {
    let shiftAmount = key * 3 + 1
    return encryptCeaser(plainString, shiftAmount)
}

export function decryptThrimetius(encryptedString, key) {
    let unshiftAmount = key * 3 + 1
    return decryptCeaser(encryptedString, unshiftAmount)
}