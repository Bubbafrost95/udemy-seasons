import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			lat: null,
			lon: null
		};

		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({lat: position.coords.latitude, lon: position.coords.longitude});
			},
			(err) => {
				console.log('position', err);
			}
		);
	}



	render() {
		console.log()
		return(
			<div>Lattitude: {this.state.lat}, Longitude: {this.state.lon}</div>
		);
	}

}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
)