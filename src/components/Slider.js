import React, {PropTypes} from 'react';
import SliderItem from './SliderItem';
import SliderControls from './SliderControls';
import './Slider.css'

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			currentSlide: 0,
			slideWidth: 0,
			totalSlides: 0,
			transformXValue: '',
			slideIntervalId: null,
		}
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.slider.length !== this.props.slider.length) {
      this.setState({ totalSlides: nextProps.slider.length });
    }
  }

	componentDidMount() {
		const slideWidth = document.querySelector('.scroller').offsetWidth;
		const slideIntervalId = this._setInverval();
    console.log(this.props.slider.length)
		this.setState({
			slideWidth,
      slideIntervalId,
		});
	}

	componentWillUnmount() {
		this._clearInterval(this.state.slideIntervalId)
	}

	_clearInterval = () => {
		clearInterval(this.state.slideIntervalId)
	}

	_setInverval = () => {
    const {interval} = this.props;
		const id = setInterval(this.nextSlide, interval);
		this.setState({slideIntervalId: id})
		return id;
	}

	prevSlide = () => {
		const {currentSlide, slideWidth, totalSlides} = this.state;
    // set last picture
		if(currentSlide === 0) {
			const nextSlide = totalSlides - 1;
			const transformXValue = `-${nextSlide * slideWidth}px`;
			return this.setState({transformXValue, currentSlide: nextSlide});
		}
		const nextSlide = currentSlide - 1;
		const transformXValue = `-${nextSlide * slideWidth}px`;
		this.setState({transformXValue, currentSlide: nextSlide});
	}

	nextSlide = () => {
		const {currentSlide, slideWidth, totalSlides} = this.state;
    // set first picture
		if(currentSlide === totalSlides - 1) {
			return this.setState({transformXValue: '', currentSlide: 0});
		}

		const nextSlide = currentSlide + 1;
		const transformXValue = `-${nextSlide * slideWidth}px`;
		this.setState({transformXValue, currentSlide: nextSlide});
	}

  render() {
		const {slider} = this.props;
		const {transformXValue} = this.state;

		const SlideList = slider.map((item, index) => (
			<SliderItem key={index} data={item} />
		));

    return (
			<div className='slider-container'>
				<div className="scroller"
					onMouseOver={this._clearInterval}
					onMouseLeave={this._setInverval}>
					<div className="items"
						style={{
              transform: `translate3D(${transformXValue ? transformXValue : '0px'}, 0px, 0px)`
            }}>
						{SlideList}
					</div>
				</div>
				<SliderControls nextSlide={this.nextSlide} prevSlide={this.prevSlide} />
			</div>
		);
  }
}

Slider.propTypes = {
	slider: PropTypes.arrayOf(PropTypes.shape({
		hero: PropTypes.string,
		text: PropTypes.string,
		image: PropTypes.string
	})).isRequired,
  interval: PropTypes.number.isRequired
};
