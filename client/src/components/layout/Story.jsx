import React from 'react';

const Story = (props) => {
  return (
    <section className="about-artist">
        <div className="about-artist__portrait">
          <img src="/uploads/toddpainting.jpg" className="about-artist__image" alt="artist painting on canvas"/>
        </div>
        <div className="about-artist__bio">
          <h3 className="heading-3">A little bit about me...</h3>
          <p className="bio__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Quidem, magnam consequatur reiciendis sunt sapiente dolorum suscipit, 
            corrupti ipsum obcaecati unde neque rem ducimus 
            quaerat eveniet esse aspernatur. Laudantium, cumque ea!
          </p>
          <div className="about-artist__contact-info">
            All questions/interest in my artwork can contact me at: &rarr
          </div>
        </div>
      
    </section>
  )
}

export default Story;