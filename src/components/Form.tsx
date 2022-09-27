import React from "react"
import {
  FormControl,
  Button,
  TextareaAutosize,
  OutlinedInput,
} from "@mui/material"

interface FormProp {
  onClickHandler: any
  handleFileChange: any
  handleTextChange: any
  text: string
  Key?: string
  handleKey?: any
}
const Form: React.FC<FormProp> = ({
  onClickHandler,
  handleFileChange,
  handleTextChange,
  handleKey,
  Key,
  text,
}) => {
  return (
    <div>
      <FormControl>
        <input
          onChange={e => {
            if (!e.target.files) return
            handleFileChange(e.target.files[0])
          }}
          type="file"
          accept=".txt"
          style={{ display: "none" }}
          id="raised-button-file"
        />
        <label htmlFor="raised-button-file">
          <Button
            fullWidth
            sx={{ marginTop: "3px" }}
            variant="outlined"
            component="span"
          >
            Выберите файл
          </Button>
        </label>
      </FormControl>
      <br />
      <TextareaAutosize
        onChange={e => {
          handleTextChange(e.target.value)
        }}
        value={text}
        placeholder="Empty"
        style={{ width: 300, marginTop: "20px", border: "1px solid blue" }}
        minRows={20}
      />
      <br />
      <br />

        <>
          <div>КЛЮЧ</div>
          <OutlinedInput
            value={Key}
            onChange={e => handleKey(e.target.value as unknown as string)}
            placeholder="КЛЮЧ"
          />
        </>
    
      <br />
      <Button
        onClick={() => onClickHandler("e")}
        sx={{ marginY: "20px" }}
        variant="contained"
      >
        Зашифровать
      </Button>
      <br />
      <Button onClick={() => onClickHandler("d")} variant="contained">
        Дешифровать
      </Button>
    </div>
  )
}

export default Form
