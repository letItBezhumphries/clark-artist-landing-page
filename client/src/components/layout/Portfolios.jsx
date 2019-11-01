import React, { Fragment } from 'react';
import ImageCard from '../UI/ImageCard';

const Portfolios = ({ getPortfolio }) => (
  <Fragment>
    This section will contain a gallery of
    <ImageCard />
    <ImageCard />
    <ImageCard />
    <ImageCard />
    <ImageCard />
  </Fragment>
);

export default Portfolios;