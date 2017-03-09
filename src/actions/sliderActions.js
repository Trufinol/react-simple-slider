import {LOAD_SLIDES} from './types';

export function loadSlides(data) {
	return {
		type: LOAD_SLIDES,
		slider: data
	}
}
