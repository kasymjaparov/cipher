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
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
}

function wordFreq(string) {
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
  const data = wordFreq(text)
  const dataChart = {
    datasets: [
      {
        label: tableName,
        data: Object.entries(data)
          .filter(entry => entry[0] === " ")
          .sort(function (a, b) {
            return b[1] - a[1]
          }),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
    ],
  }
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
            {Object.entries(data)
              .sort(function (a, b) {
                return b[1] - a[1]
              })
              .map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item[0] === "" ? "" : item[0]}</TableCell>
                  <TableCell>{(item[1] / text.length).toFixed(4)}</TableCell>
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
