import React from 'react';

const Iconshow = props => {
	let icon;
	switch(props.icon) {
		case "Clouds":
			icon = "wi wi-day-cloudy";
			break;
		case "Rain":
			icon = "wi wi-day-rain";
			break;
		default:
			icon = "wi wi-day-sunny";
	}
	return <span className="iconWeath"><i className={icon}></i></span>;
}

export default Iconshow;