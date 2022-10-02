import Form from "../../components/Form"
import useForm from "../../hooks/useForm"
import { decryptCeaser, encryptCeaser } from "../../logic/ceaser"
import React from "react"
import { Box, Button, Grid, Typography } from "@mui/material"
import FrequencyDictionary, {
  wordFreq,
} from "../../components/FrequencyDictionary"
import CopyToClipboard from "react-copy-to-clipboard"
import InitGraph from "../../components/InitGraph"
import initFrequency from "../../initFrequency"
const initFrequencyObj = [
  { symbol: "a", value: 8.2 },
  { symbol: "b", value: 1.5 },
  { symbol: "c", value: 2.8 },
  { symbol: "d", value: 4.3 },
  { symbol: "e", value: 13 },
  { symbol: "f", value: 2.2 },
  { symbol: "g", value: 2 },
  { symbol: "h", value: 6.1 },
  { symbol: "i", value: 7 },
  { symbol: "j", value: 0.15 },
  { symbol: "k", value: 0.77 },
  { symbol: "l", value: 4 },
  { symbol: "m", value: 2.4 },
  { symbol: "n", value: 6.7 },
  { symbol: "o", value: 7.5 },
  { symbol: "p", value: 1.9 },
  { symbol: "q", value: 0.095 },
  { symbol: "r", value: 6 },
  { symbol: "s", value: 6.3 },
  { symbol: "t", value: 9.1 },
  { symbol: "u", value: 2.8 },
  { symbol: "v", value: 0.98 },
  { symbol: "w", value: 2.4 },
  { symbol: "x", value: 0.15 },
  { symbol: "", value: 2 },
  { symbol: "z", value: 0.074 },
]
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
    for (let i = 1; i < initFrequencyObj.length; i++) {
      let frequences: { symbol: string; value: number }[] = []
      const prepareText = decryptCeaser(text, i).replace(/[^a-zа-яё]/gi, "")
      let data = wordFreq(prepareText)
      Object.entries(data).forEach((element: any) => {
        frequences.push({
          symbol: element[0],
          value: Number(((element[1] / prepareText.length) * 100).toFixed(4)),
        })
      })
      // console.log(initFrequencyObj[i].symbol, frequences[i].symbol)
      // if (initFrequencyObj[i].symbol === frequences[i].symbol) {
      //   console.log(frequences[i].symbol)
      // }
      // frequences.forEach((item: any[]) => {
      //   let sum = 0
      //   const symbol = item[0]
      //   const value = item[1]
      //   const a = Number(initFrequencyObj.find(el => el.symbol === symbol))
      //   sum += a * Number(value)
      //   maxSums.push(sum)
      // })
      // console.log(maxSums)
    }
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
          <Button
            sx={{ marginY: "15px" }}
            onClick={onGetKey}
            variant="contained"
          >
            Узнать ключ
          </Button>

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
          <FrequencyDictionary tableName="После шифрования" text={result} />
        </Grid>
        <Grid item md={6}>
          <InitGraph />
        </Grid>
      </Grid>
    </div>
  )
}

export default Cesar
