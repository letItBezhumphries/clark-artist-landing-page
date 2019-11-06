import React from 'react';
import Button from '../UI/Button';

const Story = (props) => {
  return (
    <section className="artist-story">
      <h1 className="heading-1 u-margin-top-">about the artist</h1>
      <div className="artist-story__bio">
        <p className="artist-story__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem,
          magnam consequatur reiciendis sunt sapiente dolorum suscipit, corrupti
          ipsum obcaecati unde neque rem ducimus quaerat eveniet esse
          aspernatur. Laudantium, cumque ea! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Quidem, magnam consequatur reiciendis
          sunt sapiente dolorum suscipit, corrupti ipsum obcaecati unde neque
          rem ducimus quaerat eveniet esse aspernatur. Laudantium, cumque ea!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem,
          magnam consequatur reiciendis sunt sapiente dolorum suscipit, corrupti
          ipsum obcaecati unde neque rem ducimus quaerat eveniet esse
          aspernatur. Laudantium, cumque ea! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Quidem, magnam consequatur reiciendis
          sunt sapiente dolorum suscipit, corrupti ipsum obcaecati unde neque
          rem ducimus quaerat eveniet esse aspernatur. Laudantium, cumque ea!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem,
          magnam consequatur reiciendis sunt sapiente dolorum suscipit, corrupti
          ipsum obcaecati unde neque rem ducimus quaerat eveniet esse
          aspernatur. Laudantium, cumque ea!
        </p>
        <img
          className="artist-story__img"
          src="/uploads/soloTodd.jpg"
          alt="photo 1"
        />
      </div>
      
      <div className="artist-story__contact-info">
        Questions/interest in artwork: 
        <Button>Contact artist &rarr;</Button>
      </div>
    </section>
  );
}

export default Story;