import React, { Component } from 'react';
import Navbar from './Navbar.jsx';

import { Switch, Route } from 'react-router-dom';
import BackgroundCarousel from './BackgroundCarousel.jsx';

import Story from './Story.jsx';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bgImgs: [{
          imgUrl: "/css/images/cubagirl.jpg",
          portraitGroup: "people & places"
        },
        {
          imgUrl: "/css/images/carouselGlenEcho960x604.jpg",
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
          imgUrl: "/css/images/metallicStillLifeno3754x960.jpg",
          portraitGroup: "early works"
        },
        {
          imgUrl: "/css/images/bambooforest960x637.jpg",
          portraitGroup: "early works"
        },
        {
          imgUrl: "/css/images/battleships960x733.jpg",
          portraitGroup: "early works"
        },
        {
          imgUrl: "/css/images/baltimore604x417.jpg",
          portraitGroup: "photographs"
        },
        {
          imgUrl: "/css/images/aerial5d960x639.jpg",
          portraitGroup: "aerials"
        },
      ],
      currentGalleryIndex: 0
    }
  }


  render() {
    return (
      <div className = "container">
        {/* <BackgroundCarousel bgImgs={this.state.bgImgs} currentIndex={this.state.currentGalleryIndex}/>   */}
        {/* <Navbar/>  */}
        {/* <Switch>
          <Route path="/" exact component={App} />        
          <Route path="/story" component={Story} />
        </Switch>  */}
        {/* <Switch>
          <Route path="/" exact component={App} />        
          
        </Switch> */}
        {/* <Route path="/" exact component={BackgroundCarousel bgImgs={this.state.bgImgs} currentIndex={this.state.currentGalleryIndex} } /> */}
        <Route path="/" component={Navbar} />
        <Route path="/story" component={Story} />
      </div>
    )
  }
}