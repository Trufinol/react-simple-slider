import {LOAD_SLIDES} from '../actions/types';

const initialState = {slider: []}

export default function rootReducer(state = initialState, action) {
	switch(action.type) {
		case(LOAD_SLIDES):
			return {
				...state,
				slider: action.slider
			}
		default:
			return state;
	}
}
