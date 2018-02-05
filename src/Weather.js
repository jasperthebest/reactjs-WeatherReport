import React from 'react';

class Weather extends React.Component {
	render () {
		const newhtml = this.props.data.map((item, key) => {
			let date = new Date(item.dt_txt);
			var d = date.toDateString();
    		d = d.split(" ");
    		let icon;
    		switch(item.weather[0].main) {
    			case "Clouds":
    				icon = "wi wi-day-cloudy";
    				break;
    			case "Rain":
    				icon = "wi wi-day-rain";
    				break;
    			default:
    				icon = "wi wi-day-sunny";
    		}
    		var calcdeg = (Math.ceil(item.wind.deg)/22.5)+.5;
    		var arr=["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
    		calcdeg %= 16;
    		calcdeg = arr[Math.floor(calcdeg)];
			return (
			<div key={key}>
			   <div className="gridView">
			   <div className="topName text-center">
			   <h3>{item.weather[0].main}</h3>
			   <span className="iconWeath"><i className={icon}></i></span>
			   <h2>{Math.ceil(item.main.temp)}<i className="wi wi-celsius"></i></h2>
			   <h4>{d[0] + ", " + d[2] + " " + d[1] + " " + d[3]}</h4>
			   </div>
			   <div className="dateExam">
			   <div>
			   <span><i className="wi wi-humidity"></i>Humidity</span>
			   <div>{Math.ceil(item.main.humidity)} <small>%</small></div>
			   </div>
			   <div>
			   <span><i className="wi wi-barometer"></i>Pressure</span>
			   <div>{Math.ceil(item.main.pressure)} <small>hpa</small></div>
			   </div>
			   </div>
			   <div className="dateExam">
			   <div>
			   <span><i className="wi wi-day-windy"></i>Wind Speed</span>
			   <div>{Math.ceil(item.wind.speed)} <small>m/s</small></div>
			   </div>
			   <div>
			   <span><i className="wi wi-sandstorm"></i>Wind Direction</span>
			   <div>{calcdeg}</div>
			   </div>
			   </div>
			   <div className="resultRec">
			   <div><i className="wi wi-time-7" aria-hidden="true"></i>Time:
			   <span>{date.toTimeString().split(" ")[0].split(":")[0]}'o Clock</span>
			   </div>
			   </div>
			   </div>
			</div>
			);
		});
		return(
			<div className="flexGrid">
			{newhtml}
			</div>
		);
	}
}

export default Weather;