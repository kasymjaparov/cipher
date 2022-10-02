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
import initFrequency from "../initFrequency"
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
    y1: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
}
const InitGraph = () => {
  const dataChart = {
    datasets: [
      {
        label: "Изначально",
        data: initFrequency.sort((a: any, b: any) => b[1] - a[1]),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
    ],
  }
  return (
    <div>
      <Typography sx={{ marginY: "20px" }}>Изначально</Typography>
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
            {initFrequency.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item[0]}</TableCell>
                <TableCell>{item[1]} %</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Line options={options} data={dataChart} />
    </div>
  )
}

export default InitGraph
