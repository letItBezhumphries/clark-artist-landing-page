import React from 'react'

const Icon = props => (
  <svg className="icon--left" onClick={props.clicked}>
    <use xlinkHref={"/css/icons/sprites.svg#" + props.iconType}></use>
  </svg>
);

export default Icon;
