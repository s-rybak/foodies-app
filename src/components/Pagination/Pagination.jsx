import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './Pagination.module.css';

const Pagination = ({ total, limit = 10 }) => {
  const [count, setCount] = useState(3);
  const [searchParams, setSearchParams] = useSearchParams();
  const totalPages = Math.ceil(total / limit);
  const currentPage = parseInt(searchParams.get('page')) || 1;

  const getCount = () => {
    const paginationContainer = document.querySelector(
      `.${css['pagination-container']}`
    );
    const rootStyles = window.getComputedStyle(paginationContainer);
    return parseInt(
      rootStyles.getPropertyValue('--count')
    );
  };

  useEffect(() => {
    setCount(getCount());

    const handleResize = () => {
      setCount(getCount());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setSearchParams(new URLSearchParams({ page: totalPages.toString() }));
    }
  }, [currentPage, totalPages, setSearchParams]);

  const handlePageQuery = (page) => {
    if (page >= 1 && page <= totalPages) {
      setSearchParams({ page: page });
    }
  };

  const getPageNumbers = () => {
    let startPage = Math.max(1, currentPage - Math.floor(count / 2));
    let endPage = startPage + count - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, totalPages - count + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageQuery(i)}
          className={`${css.btn} ${currentPage === i ? css.active : ''}`}
          aria-current={currentPage === i ? 'page' : undefined}
          aria-label={`Go to page ${i}`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div
      className={css['pagination-container']}
      role="navigation"
      aria-label="Pagination Navigation"
    >
      {getPageNumbers()}
    </div>
  );
};

export default Pagination;
