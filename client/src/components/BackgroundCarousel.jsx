import React, { Component } from 'react';
import ImageSlide from './ImageSlide.jsx';

export class BackgroundCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgImgs: props.bgImgs,
      currentIndex: props.currentIndex,
      
    }
    console.log('passed down from App', props)
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }
  
  prevSlide = () => {
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.bgImgs.length - 1
      })
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }))
  }

  nextSlide = () => {
    //if the currentIndex is the last element in the bgImgs array reset to zero
    if (this.state.currentIndex === this.state.bgImgs.length - 1) {
      return this.setState({
        currentIndex: 0
      })
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }

  componentDidMount() {
    this.state.currentIndex = setInterval(() => (
      this.nextSlide()
    ), 5000);
  }


  render() {
    console.log('this is the currentIndex', currentIndex);
    const { bgImgs, currentIndex } = this.state;
    
    const backgroundImages = bgImgs.map((image, index) => {
      return <ImageSlide key={index} imgUrl={image.imgUrl} slideIndex={currentIndex} prev={this.prevSlide} next={this.nextSlide} />
    });

    
    return (
      <div className="bg-carousel">
        {backgroundImages[currentIndex]}
      </div>
    )
  }
}

export default BackgroundCarousel;
