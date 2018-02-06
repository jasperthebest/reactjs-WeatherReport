import React from 'react';
import Iconshow from './Icon';
import Direction from './Direction';
import Datehead from './Datehead';
import Timehead from './Timehead';

const Gridview = props => {
	const griddata = props.data.map((item, key) => {
		return (
		<div key={key}>
		   <div className="gridView">
		   <div className="topName text-center">
		   <h3>{item.weather[0].main}</h3>
		   <Iconshow icon={item.weather[0].main} />
		   <h2>{Math.ceil(item.main.temp)}<i className="wi wi-celsius"></i></h2>
		   <Datehead datetime={item.dt_txt}/>
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
		   <div><Direction winddeg={item.wind.deg} /></div>
		   </div>
		   </div>
		   <div className="resultRec">
		   <div><i className="wi wi-time-7"></i>Time:
		   <Timehead datetime={item.dt_txt}/>
		   </div>
		   </div>
		   </div>
		</div>
		);
	});
	return griddata;
}

export default Gridview;