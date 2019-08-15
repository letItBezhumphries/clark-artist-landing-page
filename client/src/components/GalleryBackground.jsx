import React from 'react';
// import { Background, Parallax } from 'react-parallax';

const GalleryBackground = (props) => {
  // return (
  //   <div className="section-background">
  //     <Background className="custom-bg">
  //       <div className="chevron-left"></div>
  //       <div className="chevron-right"></div>
  //     </Background> 
  //   </div>
  // )
  return (
    <div className="background__img">
      <div className="chevron-left">O</div>
      <div className="chevron-right">O</div>
      <div className="img-details">Image Details</div>
    </div>
  );
}

export default GalleryBackground;