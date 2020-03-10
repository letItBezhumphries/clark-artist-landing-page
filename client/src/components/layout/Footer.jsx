import React from 'react';
import IconList from '../UI/IconList';

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        height: "30rem",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        marginTop: "5rem"
      }}
    >
      <div className="footer-top" style={{ backgroundColor: 'white', width: '100%' }}>
        <IconList />
      </div>
    </footer>
  );
}

export default Footer;
