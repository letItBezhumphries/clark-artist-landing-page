import React, { Component } from 'react';
import Navbar from './Navbar.jsx';

import { Switch, Route } from 'react-router-dom';
import GalleryBackground from './GalleryBackground.jsx';

import Story from './Story.jsx';


export default class App extends Component {
  render() {
    return (
      <div className="container">    
        <Navbar />
        {/* <Switch>
          <Route path="/" exact component={GalleryBackground} />        
          <Route path="/story" component={Story} />
        </Switch> */}
        <main className="content">
          <Story />

          <section className="porfolio">
            Portfolio
          </section>

          <section className="news">
            News
          </section>

          <section className="store">
            Store
          </section>
        </main>

      </div>
    )}
}
