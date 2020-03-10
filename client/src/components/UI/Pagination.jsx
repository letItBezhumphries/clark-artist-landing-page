import React from 'react';

const Pagination = ({ artworkPerPage, totalArtwork, paginate }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalArtwork / artworkPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-ctrls-container">
      <ul className="pagination pagination-lg">
        {pageNumbers.map(number => (
          <li key={number} className="page-item page-ctrl-item">
            <a onClick={() => paginate(number)} className="page-link page-ctrl-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
