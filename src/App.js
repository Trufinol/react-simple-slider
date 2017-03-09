import React, { Component } from 'react';
import {connect} from 'react-redux';
import Slider from './components/Slider';
import {loadSlides} from './actions/sliderActions';
import {feed} from './feed';

class App extends Component {
  componentDidMount() {
    this.props.loadSlides(feed.slider)
  }

  render() {
    const {slider} = this.props;
    return (
      <Slider slider={slider} interval={10000}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    slider: state.slider,
  }
}

export default connect(mapStateToProps, {loadSlides})(App);
