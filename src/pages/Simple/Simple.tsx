import { Box, Grid } from "@mui/material"
import React from "react"
import Form from "../../components/Form"
import FrequencyDictionary from "../../components/FrequencyDictionary"
import useForm from "../../hooks/useForm"
import simpleCrypt from "../../logic/simple"

const Simple = () => {
  const [result, setResult] = React.useState<string>("")
  const encrypt = () => {
    setResult(simpleCrypt(text, "e"))
  }
  const descrypt = () => {
    setResult(simpleCrypt(text, "d"))
  }
  const { text, onClickHandler, handleFile, handleText, key, handleKey } =
    useForm(encrypt, descrypt, 0)

  return (
    <div className="block">
      <Grid container>
        <Grid item md={6}>
          <Form
            onClickHandler={onClickHandler}
            handleFileChange={handleFile}
            handleTextChange={handleText}
            text={text}
            handleKey={handleKey}
          />
        </Grid>
        <Grid item md={6}>
          <Box sx={{ wordBreak: "break-all", lineHeight: "25px",fontSize:"18px" }}>
            {result}
          </Box>
        </Grid>
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

export default Simple
