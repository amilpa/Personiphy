"use client"
import { Chart as ChartJS,registerables} from "chart.js"
import {Pie} from "react-chartjs-2"

ChartJS.register(
    ...registerables
)

export default function drawPieChart(){
    const data={
        labels:["Openness","Conscientiousness","Extraversion","Agreeableness","Neuroticism"],
        datasets:[{
            data:[23,47,65,81,94],
            label:"Personality",
            backgroundColor:[
                "#1E5A8D",
                "#73A444",
                "#E7811C",
                "#D03132",
                "#852465",
            ],
        }]
    }

    const options={
    
        legend:{
            labels:{
                color:"white"
            }
        }
    }

    return(
        <Pie data={data} options={options}/>
    )
}   
