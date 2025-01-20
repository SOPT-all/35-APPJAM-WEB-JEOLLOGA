import pageBtnStyles from './pageBtn.css';

interface PageBtnProps {
  pageIndex: number;
  currentPageNum: number;
  onClick: () => void;
}

const PageBtn = ({ pageIndex, currentPageNum, onClick }: PageBtnProps) => {
  return (
    <button
      className={pageIndex === currentPageNum ? pageBtnStyles.current : pageBtnStyles.default}
      onClick={onClick}>
      {pageIndex}
    </button>
  );
};

export default PageBtn;
