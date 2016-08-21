import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/maps';

class WeatherList extends Component{
	renderWeather(data){
		console.log(data.city.name)
		const temps = data.list.map(weather => weather.main.temp)
		const pressures = data.list.map(weather => weather.main.pressure)
		const humidities = data.list.map(weather => weather.main.humidity)
		// es6 destructuring. The const object must contain the same name on actual object itself
		const {lat,lon} = data.city.coord
		console.log(lat)
		console.log(lon)
		return (
			<tr key={data.city.id}>
				<td>
					<GoogleMap lat={lat} lng={lon}></GoogleMap>
				</td>
				<Chart data={temps} color='green' units='K'></Chart>
				<Chart data={pressures} color='green' units='hPa'></Chart>
				<Chart data={humidities} color='black' units='%'></Chart>
			</tr>
		)
	}
	render(){
		console.log(this.props.weather)
		return(
			<table className='table tabe-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps({weather}){
	return {weather}
}

export default connect(mapStateToProps)(WeatherList)
