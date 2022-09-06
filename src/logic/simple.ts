import { alphabetA, alphabetB } from "../alphabetSimple"

const simpleCrypt = (text: string, type: string) => {
    const textLowerCase = text.toLowerCase()
    let i = 0
    let result = ""
    if (type === "e") {
        while (i < textLowerCase.length) {
            let ind = alphabetA.indexOf(textLowerCase.charAt(i))
            result = result + alphabetB.charAt(ind)
            i++
        }
    } else {
        while (i < textLowerCase.length) {
            let ind = alphabetB.indexOf(textLowerCase.charAt(i))
            result = result + alphabetA.charAt(ind)
            i++
        }
    }
    return result
}
export default simpleCrypt