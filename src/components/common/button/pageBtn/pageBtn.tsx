import pageBtnStyles from './pageBtn.css';

interface PageBtnProps {
  pageIndex: number;
  currentPageNum: number;
}

const PageBtn = ({ pageIndex, currentPageNum }: PageBtnProps) => {
  return (
    <button
      className={pageIndex === currentPageNum ? pageBtnStyles.current : pageBtnStyles.default}>
      {pageIndex}
    </button>
  );
};

export default PageBtn;
