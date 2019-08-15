import React, { Component } from 'react';
import Navbar from './Navbar.jsx';

import { Switch, Route } from 'react-router-dom';
import GalleryBackground from './GalleryBackground.jsx';

import Story from './Story.jsx';


export default class App extends Component {
  render() {
    return (
      <div className="container"> 
        <GalleryBackground /> 
        <Navbar />  
        {/* <Navbar />
        <Switch>
          <Route path="/" exact component={GalleryBackground} />        
          <Route path="/story" component={Story} />
        </Switch> */}
      </div>
    )}
}
