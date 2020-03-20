import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import transformNumToFormattedString from "../../utils/transformNumToFormattedString";
import setCardTypeStyle from "../../utils/setImageLinkStyles";

const ImageLink = ({ to, image, type, clicked, classType }) => {
  const imgRef = useRef(null);
  const { title, imageUrl, year, price, height, width, inStock } = image;

  const setImageDimension = () => {
    console.log(
      "height:",
      imgRef.current.clientHeight,
      "width:",
      imgRef.current.clientWidth
    );
  };

  useEffect(() => {
    imgRef.current.addEventListener("load", setImageDimension);
    console.log("in ImageLink, to:", to, "type:", type);
  }, []);

  let styles = setCardTypeStyle(type);

  return (
    <Fragment>
      <Link
        to={to}
        onClick={clicked}
        style={{ textDecoration: "none" }}
        className={classType + "-link card border-white text-center"}
      >
        <img
          ref={imgRef}
          style={styles}
          // style={{ width: "100%", height: "auto" }}
          src={imageUrl}
          className={classType + "-img card-img-top"}
        />

        <div className={classType + "-details card-body"}>
          {type === "related" ? (
            <Fragment>
              <h6 className={classType + "-title card-title"}>
                Todd Clark - {title}, {year}
                {!inStock && (
                  <span className="details-box__out-of-stock-flag"></span>
                )}
              </h6>
              <span className={classType + "-price card-text"}>
                $ {transformNumToFormattedString(price)}
              </span>
            </Fragment>
          ) : (
            <Fragment>
              {type === "dropdown" ? (
                <Fragment>
                  <p className={classType + "-title card-title"}>
                    {title}, {year}
                  </p>
                  <p className={classType + "-price card-text"}>
                    <span className={classType + "-quantity card-text"}>
                      1 X{" "}
                    </span>
                    $ {transformNumToFormattedString(price)}
                  </p>
                </Fragment>
              ) : null}
            </Fragment>
          )}
        </div>
      </Link>
    </Fragment>
  );
};

export default ImageLink;
