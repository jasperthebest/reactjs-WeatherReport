const Direction = props => {
	let calcdeg = (Math.ceil(props.winddeg)/22.5)+.5;
    let arr = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
    calcdeg %= 16;
  	return arr[Math.floor(calcdeg)];
}

export default Direction;