import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends Component {
  render() {
  	let newdate = this.props.datedata.filter((item, key) => {
  		return key<=8;
  	});
  	let actdata = newdate.map((item, key) => {
  		return Math.ceil(item.main.temp);
  	});
  	let actdate = newdate.map((item, key) => {
  		let date = new Date(item.dt_txt);
  		return date.toTimeString().split(" ")[0].split(":")[0] + "'o Clock";
  	});
  	const data = {
	  labels: [...actdate],
	  datasets: [
	    {
	      label: 'Celsius',
	      fill: false,
	      lineTension: 0.1,
	      backgroundColor: 'rgba(75,192,192,0)',
	      borderColor: '#255af4',
	      borderCapStyle: 'butt',
	      borderDash: [],
	      borderDashOffset: 0.0,
	      borderJoinStyle: 'miter',
	      pointBorderColor: '#255af4',
	      pointBackgroundColor: '#255af4',
	      pointBorderWidth: 1,
	      pointHoverRadius: 5,
	      pointHoverBackgroundColor: '#255af4',
	      pointHoverBorderColor: '#255af4',
	      pointHoverBorderWidth: 2,
	      pointRadius: 1,
	      pointHitRadius: 10,
	      data: [...actdata]
	    }
	  ]
	};
	let annotation = {
	    annotations: [{
	        type: 'line',
	        mode: 'horizontal',
	        scaleID: 'x-axis-label',
	        borderColor: '#b6fcd5',
	        borderWidth: 2,
	        value:'March'
	    }],
	    drawTime: "afterDraw"
	};

	let options = {
	  maintainAspectRatio: true,
	  annotation: annotation,
	  responsive: true,
	  legend: {
	            display: false
	         },
	  title:{
	        display:false,
	        text:'Chart.js Line Chart'
	      },
	  tooltips: {
	        mode: 'index',
	        intersect: false,
	      },
	  hover: {
	        mode: 'nearest',
	        intersect: true
	      },
	  scales: {
	      xAxes: [{
	              display: true,
	              gridLines: {
	                    display: false,
	                },
	              scaleLabel: {
	                  display: false,
	                  labelString: 'Month'
	              }
	          }],
	      yAxes: [{
	              display: true,
	              gridLines: {
	                drawBorder: false,
	              },
	              scaleLabel: {
	                  display: false,
	                  labelString: 'Temperature'
	              }
	          }]
	      }
	};
    return <Line data={data} height={50} options={options} ref='chart' />;
  }
}

export default Chart;