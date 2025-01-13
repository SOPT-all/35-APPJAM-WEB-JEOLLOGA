import { currentPageNumStyle, pageNumStyle } from './pageBtn.css';

interface PageBtnProps {
  pageNum: number;
  currentPageNum: number;
}

const PageBtn = ({ pageNum, currentPageNum }: PageBtnProps) => {
  return (
    <button className={pageNum === currentPageNum ? currentPageNumStyle : pageNumStyle}>
      {pageNum}
    </button>
  );
};

export default PageBtn;
