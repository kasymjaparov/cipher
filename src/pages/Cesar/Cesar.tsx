import Form from "../../components/Form"
import useForm from "../../hooks/useForm"
import { decryptCeaser, encryptCeaser } from "../../logic/ceaser"
import React from "react"
import { Box, Button, Grid, Typography } from "@mui/material"
import FrequencyDictionary from "../../components/FrequencyDictionary"
import CopyToClipboard from "react-copy-to-clipboard"

const Cesar = () => {
  const [result, setResult] = React.useState<string>("")
  const [findOutKey, setFindOutKey] = React.useState<number>(0)
  const encrypt = () => {
    setResult(encryptCeaser(text, key))
  }
  const descrypt = () => {
    setResult(decryptCeaser(text, key))
  }
  const { text, onClickHandler, handleFile, handleText, key, handleKey } =
    useForm(encrypt, descrypt, "1")
  const onGetKey = () => {
    let k = 0
    for (let i = 1; i < 25; i++) {
      if (text === decryptCeaser(result, i)) {
        k = i
        break
      }
    }
    setFindOutKey(k)
  }
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
          {/* <Button
            sx={{ marginY: "15px" }}
            onClick={onGetKey}
            variant="contained"
          >
            Узнать ключ
          </Button> */}

          {findOutKey ? <Typography>КЛЮЧ {findOutKey}</Typography> : null}
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

export default Cesar
