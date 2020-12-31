import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';




function PieChart({data1}) {
	
	let pieData_Array = []
	Object.keys(data1).map(obj => {pieData_Array.push(data1[obj].population)})
	
	console.log("Pie Data Array",pieData_Array) 
	const data = {
		/*labels: [
			'Red',
			'Blue',
			'Yellow'
		],*/
		datasets: [{
			data: pieData_Array,
			backgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56'
			],
			hoverBackgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56'
			]
		}]
	};
	

	return (
		<div>
			<Pie  data= {data} height={100} />
		</div>
	);
}

export default PieChart;
