import pageBtnStyles from './pageBtn.css';

interface PageBtnProps {
  pageNum: number;
  currentPageNum: number;
}

const PageBtn = ({ pageNum, currentPageNum }: PageBtnProps) => {
  return (
    <button className={pageNum === currentPageNum ? pageBtnStyles.current : pageBtnStyles.default}>
      {pageNum}
    </button>
  );
};

export default PageBtn;
