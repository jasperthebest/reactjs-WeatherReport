import React, { Component } from 'react';
import Weather from './Weather';
import Chart from './Chart';
import 'normalize.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Bangalore,IN&APPID=57a47187849aba29173dbd3304c45708&units=metric').then(response => {
        return response.json();
      }).then(data => {
        console.log(data.list[0]);
        this.setState({
          data: data.list
        });
      });
  }
  render() {
    return (
      <div className="App">
      <h1 className="text-center">Weather Challenge<small>Done by <a rel="noopener noreferrer" href="http://www.jasperthebest.com/" target="_blank">Jasper</a></small></h1>
      <div className="chartContainer">
      <h2 className="nextTitle">Next 24 Hours Temperature - Bangalore</h2>
      <Chart datedata={this.state.data}/>
      </div>
      <h2 className="fiveDay">5 day / 3 hour Forecast - Bangalore</h2>
      <Weather data={this.state.data}/>
      </div>
    );
  }
}

export default App;
