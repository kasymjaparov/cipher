import React from 'react'

const useForm = (encrypt: any, descrypt: any, Key: string) => {
    const [text, setText] = React.useState("")
    const [key, setKey] = React.useState<string>(Key)

    const [file, setFile] = React.useState<File | null>()
    const handleText = (str: string) => {
        setText(str)
    }
    const handleKey = (str: string) => {
        setKey(str)
    }
    const handleFile = (file: File) => {
        setFile(file)
        const reader = new FileReader()
        reader.onload = function () {
            setText(reader.result!.toString())
        }
        if (file) {
            reader.readAsText(file)
            setText(reader.result!.toString())
        }
    }
    const onClickHandler = (type: string) => {
        if (type === "e") {
            encrypt()
        } else if ("d") {
            descrypt()
        }

    }
    return { text, file, handleText, onClickHandler, handleFile, handleKey, key }
}

export default useForm