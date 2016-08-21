import axios from 'axios';

const API_KEY = '0c5359e09a3d8b842ca5adf554b2138f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`
	const request = axios.get(url);

	console.log('request is: ', request);

	return{
		type:FETCH_WEATHER,
		payload:request
	}
}
