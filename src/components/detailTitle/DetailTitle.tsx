import { titleContainerStyle, titleStyle, buttonStyle } from './detailTitle.css';

interface DetailTitleProps {
  title: string;
  isTotal?: boolean;
  onClick?: () => void;
}

const DetailTitle = ({ title, isTotal = false, onClick }: DetailTitleProps) => {
  return (
    <div className={titleContainerStyle}>
      <p className={titleStyle}>{title}</p>
      {isTotal && (
        <button className={buttonStyle} onClick={onClick}>
          전체보기
        </button>
      )}
    </div>
  );
};

export default DetailTitle;
