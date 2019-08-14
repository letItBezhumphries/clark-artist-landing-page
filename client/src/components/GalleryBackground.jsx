import React from 'react';
import { Background, Parallax } from 'react-parallax';

const GalleryBackground = (props) => {
  return (
    <div className="section-background">
      <Background className="custom-bg">
        <div className="chevron-left"></div>
        <div className="chevron-right"></div>
      </Background> 
    </div>
  )
}

export default GalleryBackground;