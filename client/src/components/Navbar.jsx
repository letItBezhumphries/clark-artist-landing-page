import React from 'react';
import DropdownList from './DropdownList.jsx';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__artist">
        {/* <img className="navbar__background" src="/css/images/trees.jpg" alt="trees montage"/> */}
        <span className="name-first">Todd</span>
        <span className="name-last">Clark</span>
      </div>
      <div className="navbar__links">
        <a href="/story" className="navbar__link">story</a>
        <DropdownList/>
        <a href="/events" className="navbar__link">events</a>
        <a href="/store" className="navbar__link">store</a>
        <a href="/login" className="navbar__link">login</a>
      </div>
    </header>
  )
}

export default Navbar;
