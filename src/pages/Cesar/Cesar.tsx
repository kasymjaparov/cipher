import Form from "../../components/Form"
import useForm from "../../hooks/useForm"
import { decryptCeaser, encryptCeaser } from "../../logic/ceaser"
import React from "react"
import { Grid } from "@mui/material"
import FrequencyDictionary from "../../components/FrequencyDictionary"

const Cesar = () => {
  const encrypt = () => {
    setResult(encryptCeaser(text, key))
  }
  const descrypt = () => {
    setResult(decryptCeaser(text, key))
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

export default Cesar
