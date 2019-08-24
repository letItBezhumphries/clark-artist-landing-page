import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar.jsx';
import BackgroundCarousel from './layout/BackgroundCarousel.jsx';
import Alert from './layout/Alert.jsx';
import Story from './layout/Story.jsx';

//Redux 
import { Provider } from 'react-redux';
import store from './store.js';


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
      <Provider store={store}>
        <Router>
          <Fragment>
            <div className = "container">
            <Alert />
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
          </Fragment>
        </Router>
      </Provider>
    )
  }
}