import React, { Fragment } from "react";


const Heading = ({ items, added, removed }) => {
  // console.log("inside Heading1, added:", added);
  let message;

  if (added && removed === null) {
    message = (
      <p className="cart-added-item">
        ${added.title}, ${added.year} HAS BEEN ADDED TO YOUR CART
      </p>
    );
  } else if (removed && added === null) {
    message = (
      <p className="cart-deleted-item">
        ${removed.title}, ${removed.year} HAS BEEN REMOVED FROM YOUR CART
      </p>
    );
  } else if (items.length === 0) {
    message = <p className="cart-empty">YOUR CART IS CURRENTLY EMPTY</p>;
  } else {
    null;
  }
  // console.log("inside Heading, message:", message);

  return <Fragment>{message}</Fragment>;
};

export default Heading;
