import React from 'react';

const Datehead = props => {
	let date = new Date(props.datetime);
	let d = date.toDateString();
    d = d.split(" ");
    return <h4>{d[0] + ", " + d[2] + " " + d[1] + " " + d[3]}</h4>;
}

export default Datehead;