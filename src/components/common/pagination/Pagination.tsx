import Icon from '@assets/svgs';
import React from 'react';

import * as styles from './pagination.css';
import PageBtn from '../button/pageBtn/PageBtn';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const isLeftDisabled = currentPage === 1;
  const isRightDisabled = currentPage === totalPages;

  const renderPageNumbers = () => {
    if (totalPages <= 8) {
      return Array.from({ length: totalPages }, (_, index) => (
        <PageBtn
          key={index + 1}
          pageIndex={index + 1}
          currentPageNum={currentPage}
          onClick={() => onPageChange(index + 1)}
        />
      ));
    }

    const pages: (number | string)[] = [];

    if (currentPage <= 3) {
      pages.push(...[1, 2, 3, 4, '...', totalPages - 1, totalPages]);
    } else if (currentPage >= totalPages - 2) {
      pages.push(...[1, 2, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages]);
    } else {
      pages.push(
        ...[
          1,
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages - 1,
          totalPages,
        ],
      );
    }
    return pages.map((page, index) => {
      if (typeof page === 'string') {
        return (
          <span key={index + 1} className={styles.dotStyle}>
            ...
          </span>
        );
      }
      return (
        <PageBtn
          key={page}
          pageIndex={page as number}
          currentPageNum={currentPage}
          onClick={() => onPageChange(page as number)}
        />
      );
    });
  };
  return (
    <nav className={styles.paginationContainer}>
      <button
        className={styles.leftArrowStyle}
        onClick={() => !isLeftDisabled && onPageChange(currentPage - 1)}
        disabled={isLeftDisabled}>
        <Icon.IcnLineArrowSmallLeft
          className={isLeftDisabled ? styles.disabledIcon : styles.iconStyle}
        />
      </button>
      {renderPageNumbers()}
      <button
        className={styles.rightArrowStyle}
        onClick={() => !isRightDisabled && onPageChange(currentPage + 1)}
        disabled={isRightDisabled}>
        <Icon.IcnLineArrowSmallRight
          className={isLeftDisabled ? styles.disabledIcon : styles.iconStyle}
        />
      </button>
    </nav>
  );
};

export default Pagination;
