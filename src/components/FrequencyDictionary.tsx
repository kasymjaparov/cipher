// @ts-nocheck
import React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Typography } from "@mui/material"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
}

export function wordFreq(string) {
  return string
    .replace(/[.]/g, "")
    .split("")
    .reduce(
      (map, word) =>
        Object.assign(map, {
          [word]: map[word] ? map[word] + 1 : 1,
        }),
      {}
    )
}
const symbols = [
  " ",
  ".",
  ",",
  "'",
  ":",
  "-",
  "*",
  "-",
  "/",
  "^",
  "#",
  "\n",
  "\t",
  "\0",
  "\n",
  "\v",
  "\f",
  "\r",
  "",
]
interface FreqDictProp {
  text: string
  tableName: string
}
const FrequencyDictionary: React.FC<FreqDictProp> = ({ text, tableName }) => {
  const prepareText = text.replace(/[^a-zа-яё]/gi, "")
  let data = wordFreq(prepareText)
  let dataForChart: any = []
  Object.entries(data).forEach(element => {
    if (symbols.includes(element[0])) {
      return
    }
    dataForChart.push([element[0], element[1] / prepareText.length])
  })

  const dataChart = {
    datasets: [
      {
        label: tableName,
        data: dataForChart,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y",
      },
    ],
  }
  console.log(dataForChart)
  return (
    <div>
      <Typography sx={{ marginY: "20px" }}>{tableName}</Typography>
      <TableContainer sx={{ width: 650 }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Символ</TableCell>
              <TableCell>Частота</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataForChart.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item[0] === "" ? "" : item[0]}</TableCell>
                <TableCell>{(item[1] * 100).toFixed(4)}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {text ? <Line options={options} data={dataChart} /> : null}
    </div>
  )
}

export default FrequencyDictionary
