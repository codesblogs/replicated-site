import { useState } from 'react';
import React from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler,
)
function LineChart() {
    const [data, setData] = useState({
        labels: ['23%', '29%','58%', '75%', '33%', '20%', '73%', '49%'],
        datasets: [
            {
                data: [27, 28, 28, 29, 30, 29, 29, 28],
                backgroundColor: 'yellow',
                borderColor: '#f26c6d',
                borderColor: "red",
                tension: 0.4,
                fill: true,
                pointStyle: 'rect'
            }
        ]
    })

  return (
    <div className='L__graph' style={{width: '600px', height: '100px'}}>
      <Line data={data}>Hello</Line>
    </div>
  )
}

export default LineChart
