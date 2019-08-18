import React from 'react'

const Slider = ({ direction, prev, next }) => {
  var click;
  if (direction === "left") {
    click = prev;
  } else {
    click = next;
  }
  return (
    <div className={"iconbox--" + direction} onClick={() => click()}>
      <svg className={"icon--" + direction}>
        <use xlinkHref={"/css/icons/sprites.svg#icon-chevron-thin-" + direction}></use>
      </svg>
    </div>
  )
}

export default Slider;
