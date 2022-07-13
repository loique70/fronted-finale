import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';

ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)

function ViewChartjs({valeur}) {
    console.log(valeur)
    const [data,setData] = useState({
        labels:[2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],
        datasets:[
            {
                label:"Prevision",
                data:valeur[1],
                backgroundColor:'green'
            }
        ]
    });

  return (
    <div  >
      <Line 
        data ={data}
      />
    </div>
  )
}

export default ViewChartjs