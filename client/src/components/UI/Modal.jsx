import React from 'react';

const Modal = (props) => (
  <div className={"modal" + props.classes}>
    {props.children}
  </div>
);

export default Modal;