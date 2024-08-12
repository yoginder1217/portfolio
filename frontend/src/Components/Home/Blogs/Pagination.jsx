import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, nextPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number, event) => {
    event.preventDefault(); // Prevent any default action
    paginate(number);
  };

  const handleNextClick = (event) => {
    event.preventDefault(); // Prevent any default action
    nextPage();
  };

  return (
    <nav className='pagination-container'>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button 
              onClick={(e) => handleClick(number, e)} 
              className='page-link'
            >
              {number}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage >= Math.ceil(totalPosts / postsPerPage) ? 'disabled' : ''}`}>
          <button 
            onClick={(e) => handleNextClick(e)} 
            className='page-link'
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
