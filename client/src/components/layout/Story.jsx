import React from 'react';

const Story = (props) => {
  return (
    <section className="story">
        <div className="story__artist-pics">
          <img src="/css/images/cubagirl.jpg" alt="artist " className="story__img-1"/>
          <img src="/css/images/toddC.jpg" alt="artist self portrait" className="story__img-2"/>
          
        </div>
        <div className="story__artist-bio">
          <h3 className="heading-3">About Me </h3>
          <p className="story__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, magnam consequatur reiciendis sunt sapiente dolorum suscipit, corrupti ipsum obcaecati unde neque rem ducimus quaerat eveniet esse aspernatur. Laudantium, cumque ea!
          </p>
        </div>
      
    </section>
  )
}

export default Story;