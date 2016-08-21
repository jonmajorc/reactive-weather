import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = { term:'' };
	}
	onInputChange(term){
		this.setState({term})
	}
	onFormSubmit(e){
		e.preventDefault();
		// console.log(this.state.term)
		// GO FETCH WEATHER DATA
		
		//CALL ACTION CREATOR!
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' })
	}
	render(){
		return(
			// Input is a controlled field - State dictates value of input
			<form onSubmit={(e) => this.onFormSubmit(e)} className='input-group'>
				<input 
					onChange={(e) => this.onInputChange(e.target.value)} 
					value={this.state.term}
					type='text'
					className='form-control' 
					placeholder='Search for a five day forecast in a city...'/>
				<span className='input-group-btn'>
					<button type='submit' className='btn btn-secondary'>Submit</button>
				</span>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch){
	// dispatch actions to reducers
	return bindActionCreators({ fetchWeather },dispatch)
}

// passing null in as firts argument because we are not mapping state to props. mapDispatchToProps should and always be second arg.
// we don't need state because we are using component level state.
export default connect(null,mapDispatchToProps)(SearchBar)