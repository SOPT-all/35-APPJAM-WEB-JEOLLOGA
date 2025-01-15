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
  const calculatePageRange = () => {
    const rangeStart = Math.floor((currentPage - 1) / 5) * 5 + 1;
    const rangeEnd = Math.min(rangeStart + 4, totalPages);
    return { rangeStart, rangeEnd };
  };

  const { rangeStart, rangeEnd } = calculatePageRange();

  const isLeftDisabled = rangeStart === 1;
  const isRightDisabled = rangeEnd === totalPages;

  const renderPageNumbers = () => {
    const pages = Array.from({ length: rangeEnd - rangeStart + 1 }, (_, i) => rangeStart + i);

    return pages.map((page) => (
      <PageBtn
        key={page}
        pageIndex={page}
        currentPageNum={currentPage}
        onClick={() => onPageChange(page)}
      />
    ));
  };

  return (
    <nav className={styles.paginationContainer}>
      <button
        className={styles.leftArrowStyle}
        onClick={() => onPageChange(Math.max(1, rangeStart - 5))}
        disabled={isLeftDisabled}>
        <Icon.IcnLineArrowSmallLeft
          className={isLeftDisabled ? styles.disabledIcon : styles.iconStyle}
        />
      </button>
      {renderPageNumbers()}
      <button
        className={styles.rightArrowStyle}
        onClick={() => onPageChange(Math.min(totalPages, rangeStart + 5))}
        disabled={isRightDisabled}>
        <Icon.IcnLineArrowSmallRight
          className={isRightDisabled ? styles.disabledIcon : styles.iconStyle}
        />
      </button>
    </nav>
  );
};

export default Pagination;
