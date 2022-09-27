import Form from "../../components/Form"
import useForm from "../../hooks/useForm"
import React from "react"
import { Box, Grid } from "@mui/material"
import FrequencyDictionary from "../../components/FrequencyDictionary"
import { decryptThrimetius, encryptThrimetius } from "../../logic/thrimetius"
import CopyToClipboard from "react-copy-to-clipboard"

const Thrimetius = () => {
  const encrypt = () => {
    setResult(encryptThrimetius(text, key))
  }
  const descrypt = () => {
    setResult(decryptThrimetius(text, key))
  }
  const { text, onClickHandler, handleFile, handleText, key, handleKey } =
    useForm(encrypt, descrypt, "")
  const [result, setResult] = React.useState<string>("")

  return (
    <div className="block">
      <Grid container>
        <Grid item md={6}>
          <Form
            onClickHandler={onClickHandler}
            handleFileChange={handleFile}
            handleTextChange={handleText}
            text={text}
            Key={key}
            handleKey={handleKey}
          />
        </Grid>
        <Grid item md={6}>
          <Box
            sx={{
              wordBreak: "break-all",
              lineHeight: "25px",
              fontSize: "18px",
            }}
          >
             <CopyToClipboard text={result}>
              <div>{result}</div>
            </CopyToClipboard>
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

export default Thrimetius
