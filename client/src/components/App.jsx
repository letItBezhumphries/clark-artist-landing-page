import React, { Component } from 'react';
import Navbar from './Navbar.jsx';

import { Switch, Route } from 'react-router-dom';
import BackgroundCarousel from './BackgroundCarousel.jsx';

import Story from './Story.jsx';
import { STATES } from 'mongoose';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bgImgs: [{
          imgUrl: "/css/images/cubagirl.jpg",
          portraitGroup: "people & places"
        },
        {
          imgUrl: "/css/images/abstract.jpg",
          portraitGroup: "early works"
        },
        {
          imgUrl: "/css/images/chicagoLtrain.jpg",
          portraitGroup: "early works"
        },
        {
          imgUrl: "/css/images/havanafunhouse.jpg",
          portraitGroup: "people & places"
        },
        {
          imgUrl: "/css/images/napaValley.jpg",
          portraitGroup: "people & places"
        },
        {
          imgUrl: "/css/images/peterhaber.jpg",
          portraitGroup: "early works"
        },
        {
          imgUrl: "/css/images/aerial4.jpg",
          portraitGroup: "aerials"
        },
        {
          imgUrl: "/css/images/aerial1.jpg",
          portraitGroup: "aerials"
        },
        {
          imgUrl: "/css/images/aerial2.jpg",
          portraitGroup: "aerials"
        },
      ],
      currentGalleryIndex: 0
    }
  }


  handleSliderClick = () => {

  }


  render() {
    return (
      <div className = "container">
        <BackgroundCarousel bgImgs={this.state.bgImgs} currentIndex={this.state.currentGalleryIndex}/>  
        <Navbar/> 
        {/* <Navbar />
                <Switch>
                  <Route path="/" exact component={GalleryBackground} />        
                  <Route path="/story" component={Story} />
                </Switch> */} 
      </div>
    )
  }
}