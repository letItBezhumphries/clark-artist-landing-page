import React, { Fragment, useEffect, useState } from 'react';



const PaginationLink = ({ current, clicked, number, active }) => {
  const [showActiveStyle, setShowActiveStyle] = useState(false);

  let unActiveStyle = {
    backgroundColor: "#fff",
    color: "#B4B4B4"
  };

  let activeStyle = {
    backgroundColor: "#B4B4B4",
    color: "black"
  }

  useEffect(() => {
    // if (current === number) {
    //   styles.backgroundColor = "#B4B4B4"; 
    //   styles.color = "black";
    // }
  }, []);



  return (
    <Fragment>
      <li
        className={
          current === number
            ? "page-item page-ctrl-item--active"
            : "page-item page-ctrl-item"
        }
        // style={showActiveStyle ? activeStyle : unActiveStyle }
      >
        <a onClick={clicked} className={
          current === number
            ? "page-link page-ctrl-link--active"
            : "page-link page-ctrl-link"
        }>
          {number}
        </a>
      </li>
    </Fragment>
  );
}

export default PaginationLink;