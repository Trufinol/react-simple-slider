import React from 'react';
import './SliderControls.css';

const SliderControls = ({nextSlide, prevSlide}) => (
	<div className='buttons-wrapper'>
		<button className='slide-button' onClick={() => prevSlide()}>❮</button>
		<button className='slide-button' onClick={() => nextSlide()}>❯</button>
	</div>
);

SliderControls.propTypes = {
	nextSlide: React.PropTypes.func,
	prevSlide: React.PropTypes.func
};

export default SliderControls;
