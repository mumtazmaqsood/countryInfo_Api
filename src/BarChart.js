import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart({panelData}) {
    console.log("paneldata", panelData)

    let populationArray = []
    let countryArray = []

    /* Object.keys(panelData).map( (obj) =>   
        {
            if(panelData[obj].population > 180000000){
            populationArray.push(panelData[obj].population)
            countryArray.push(panelData[obj].name)
        }
    }
    ); */

    Object.keys(panelData).forEach( (obj) =>   
        {
            if(panelData[obj].population > 180000000){
            populationArray.push(panelData[obj].population)
            countryArray.push(panelData[obj].name)
        }
    }
    );


    const data = {
        labels: countryArray,
        datasets: [
            {
                label: 'Population',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: populationArray
            }
        ]
    };

    return (
        <div>
            <h2>7 Most Populated Countries</h2>

            {<Bar
              data={data}
              width={150}
              height={150}
              options={{
              maintainAspectRatio: false
              }}
            />}
            
             
        </div>
    );
}

export default BarChart;




