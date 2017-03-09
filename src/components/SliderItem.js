import React from 'react';
import './SliderItem.css';

const SlideItem = ({data, slideWidth}) => (
	<div className="slider-item" style={{backgroundImage: `url(${data.hero})`}}>
		<div className="slider-item--caption">
			<img src={data.image} alt="" />
			<p className="slider-item--text">{data.text}</p>
		</div>
	</div>
);

SlideItem.propTypes = {
	data: React.PropTypes.shape({
		image: React.PropTypes.string,
		text: React.PropTypes.string,
		hero: React.PropTypes.string
	}),
};

export default SlideItem;
