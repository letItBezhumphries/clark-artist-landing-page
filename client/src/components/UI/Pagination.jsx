import React, { useState } from 'react';
import Icon from '../UI/Icon';
import PaginationLink from './PaginationLink';

const Pagination = ({ artworkPerPage, totalArtwork, paginate, currentPage }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalArtwork / artworkPerPage); i++) {
    pageNumbers.push(i);
  }

  // let prevLink, nextLink;

  // if (currentPage > 1) {
  //   prevLink = (
  //     <li className="page-item page-ctrl-item">
  //       <a className="page-link page-ctrl-link prev">
  //         <Icon clicked={() => prevPage(currentPage)} iconType="chevron-thin-left" />
  //       </a>
  //     </li>
  //   )
  // } else {
  //   prevLink = null;
  // }

  // if (currentPage < pageNumbers[pageNumbers.length - 1]) {
  //   nextLink = (
  //     <li className="page-item page-ctrl-item">
  //       <a className="page-link page-ctrl-link next">
  //         <Icon clicked={() => nextPage(currentPage)} iconType="chevron-thin-right" />
  //       </a>
  //     </li>
  //   );
  // } else { 
  //   nextLink = null
  // }

  const prevPage = currentPage => {
    console.log('prev page')
    let prev = currentPage - 1;
    paginate(prev);
  }

  const nextPage = currentPage => {
    console.log("next page");
    let next = currentPage + 1;
    paginate(next);
  };

  return (
    <nav className="pagination-ctrls-container">
      <ul className="pagination pagination-lg">
        { currentPage > 1 ? (
          <li className="page-item page-ctrl-item">
            <a className="page-link page-link-prev">
              <Icon clicked={() => prevPage(currentPage)} iconType="icon-chevron-thin-left" class="page-link-prev__icon"/>
            </a>
          </li>
        ) : null }
        {pageNumbers.map(number => (
          <PaginationLink key={number} clicked={() => paginate(number)} number={number} current={currentPage}/>
        ))}
        { currentPage < pageNumbers[pageNumbers.length - 1] ? (
          <li className="page-item page-ctrl-item">
            <a className="page-link page-link-next">
              <Icon clicked={() => nextPage(currentPage)} iconType="icon-chevron-thin-right" class="page-link-next__icon"/>
            </a>
          </li>
        ) : null }
      </ul>
    </nav>
  );
}

export default Pagination;
          {
            /* <li key={number} className="page-item page-ctrl-item">
            <a
              onClick={() => paginate(number)}
              className="page-link page-ctrl-link"
            >
              {number}
            </a>
          </li> */
          }