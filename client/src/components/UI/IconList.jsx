import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const IconList = ({ location, landing }) => (
  <Fragment>
    {location === "artwork" ? (
      <ul
        className="details-box__media-links-list"
        style={{
          display: "flex",
          justifyContent: "center"
          // padding: "1rem 2.4rem"
        }}
      >
        <li className="details-box__media-list-item">
          <Icon
            iconType="icon-pinterest"
            class="details-box__media-item-icon"
            landing={landing}
          />
        </li>
        <li className="details-box__media-list-item">
          <Icon iconType="icon-facebook" class="details-box__media-item-icon" />
        </li>
        <li className="details-box__media-list-item">
          <Icon iconType="icon-printer" class="details-box__media-item-icon" />
        </li>
        <li className="details-box__media-list-item">
          <Icon iconType="icon-envelope" class="details-box__media-item-icon" />
        </li>
      </ul>
    ) : (
      <ul
        className="media-links-list"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1rem 2.4rem"
        }}
      >
        <li className="media-links-list__item">
          <Icon
            iconType="icon-facebook"
            class="media-links-list__icon"
            landing={landing}
          />
        </li>
        <li className="media-links-list__item">
          <Icon
            iconType="icon-instagram"
            class="media-links-list__icon"
            landing={landing}
          />
        </li>
        <li className="media-links-list__item">
          <Icon
            iconType="icon-twitter"
            class="media-links-list__icon"
            landing={landing}
          />
        </li>
      </ul>
    )}
  </Fragment>
);

export default IconList;