import React from 'react';

const Timehead = props => {
	let date = new Date(props.datetime);
    return <span>{date.toTimeString().split(" ")[0].split(":")[0] + "'o Clock"}</span>;
}

export default Timehead;