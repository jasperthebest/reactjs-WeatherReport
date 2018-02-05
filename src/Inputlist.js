import React from 'react';

class Inputlist extends React.Component {
	render() {
		const sortdata = ["asc", "desc"];
		const listsortdate = sortdata.map((item, key) => {
			return <div className="radioBox sortBlock" key={key} onClick={this.props.sortBydate.bind(this, item, key)}>
			   <span className={this.props.sortdateindex === key ? "ui-button active" : "ui-button"}>{item}</span>
			   </div>;
		});
		return(
			<div className="inputNow">
				<div className="sortFilterblock">
					<div>
					<h4><i className="fa fa-sort-amount-desc" aria-hidden="true"></i>Sort by End Date</h4>
					{listsortdate}
					</div>
				</div>
			</div>
		);
	}
}

export default Inputlist;