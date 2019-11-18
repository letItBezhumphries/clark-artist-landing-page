import React, { Fragment } from 'react'

const PortfolioJournal = (props) => {
  return (
    <Fragment>
      <div className="portfolio__journal">
        <div className="portfolio__journal--left-box">
          <img src="" alt="" className="portfolio__journal--img" />
        </div>
        <div className="portfolio__journal--right-box">
          <h2 className="portfolio__journal--title"></h2>
          <p className="portfolio__journal--description"></p>
          <button className="btn btn-continue">
            See collection
            <span className="btn-continue__arrow">&rArr;</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default PortfolioJournal;
