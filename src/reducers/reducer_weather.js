import { FETCH_WEATHER } from '../actions/index';

export default function(state=[],action){
	// console.log('Action received:',action)
	switch(action.type){
		case FETCH_WEATHER:
		// taking .data because that is what we only care about...
		// Never manipulate state! state.push(action.payload.data) NEVER!
		// use .concat() or es6 syntas:
			return [action.payload.data, ...state]
	}
	return state
}
