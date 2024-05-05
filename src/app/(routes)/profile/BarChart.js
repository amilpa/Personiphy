"use client"
import { Chart as ChartJS,registerables} from "chart.js"
import {Bar} from "react-chartjs-2"

ChartJS.register(
    ...registerables
)

export default function drawBarGraph(){
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

            borderWidth:1,

        }]
    }

    const options={
        indexAxis:"y",

        scales:{
            y:{
                
                ticks:{
                    color:"white",
                    fontSize:10,
                    beginAtZero:true
                }
            },

            x:{
                ticks:{
                    color:"white",
                },
                max:100
            }
                
            
        },

        elements:{
            bar:{
                borderWidth:0.5
            }
        }
    }

    return(
        <Bar data={data} options={options} />
    )
}
