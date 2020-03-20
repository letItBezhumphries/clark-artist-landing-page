
const setImageSize = (height, width) => {
  let styles;
  let disparity = height - width;
  if (disparity >= 200) {
    styles = { height: "98%", width: "35%", display: "block" }
  } else if (disparity <= -400) {
    styles = { height: "50%", width: "60%", display: "block" }
  } else if (disparity <= -200 && disparity >= -400) {
    styles = { height: "100%", width: "50%", display: "block" }
  } else {
    styles = { height: "100%", width: "45%", display: "block" }
  }
  return styles;
}

export default setImageSize;