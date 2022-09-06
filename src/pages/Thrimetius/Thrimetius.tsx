import Form from "../../components/Form"
import useForm from "../../hooks/useForm"
import React from "react"
import { Grid } from "@mui/material"
import FrequencyDictionary from "../../components/FrequencyDictionary"
import { decryptThrimetius, encryptThrimetius } from "../../logic/thrimetius"

const Thrimetius = () => {
  const encrypt = () => {
    setResult(encryptThrimetius(text, key))
  }
  const descrypt = () => {
    setResult(decryptThrimetius(text, key))
  }
  const { text, onClickHandler, handleFile, handleText, key, handleKey } =
    useForm(encrypt, descrypt, 1)
  const [result, setResult] = React.useState<string>("")
  
  return (
    <div className="block">
      <Form
        onClickHandler={onClickHandler}
        handleFileChange={handleFile}
        handleTextChange={handleText}
        text={text}
        Key={key as number}
        handleKey={handleKey}
      />
      <Grid container>
        <Grid item md={6}>
          <FrequencyDictionary tableName="Изначально" text={text} />
        </Grid>
        <Grid item md={6}>
          <FrequencyDictionary tableName="После шифрования" text={result} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Thrimetius
