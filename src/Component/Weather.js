import React from 'react';
import Gridview from './Gridview';

class Weather extends React.Component {
	render () {
		return(
			<div className="flexGrid">
			<Gridview data={this.props.data} />
			</div>
		);
	}
}

export default Weather;