"use client"
import { Chart as ChartJS,registerables} from "chart.js"
import {Bar} from "react-chartjs-2"


ChartJS.register(
    ...registerables
)

export default function drawBarGraph({interMData}){


    const arr=new Array(5).fill(0)
    arr[0]=interMData.open*10
    arr[1]=interMData.conscientious*10
    arr[2]=interMData.extroversion*10
    arr[3]=interMData.agreeable*10
    arr[4]=interMData.neurotic*10
    
    const data={
        labels:["Openness","Conscientiousness","Extraversion","Agreeableness","Neuroticism"],
        datasets:[{
            data:arr,
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
