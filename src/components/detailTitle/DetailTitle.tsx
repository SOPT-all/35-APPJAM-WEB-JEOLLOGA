import { titleContainerStyle, titleStyle, buttonStyle } from './detailTitle.css';

interface DetailTitleProps {
  title: string;
  isTotal?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium';
  rightBtnLable?: string;
}

const DetailTitle = ({
  title,
  isTotal = false,
  onClick,
  size = 'medium',
  rightBtnLable = '젠체보기',
}: DetailTitleProps) => {
  return (
    <div className={titleContainerStyle}>
      <p className={titleStyle({ size })}>{title}</p>
      {isTotal && (
        <button className={buttonStyle} onClick={onClick}>
          {rightBtnLable}
        </button>
      )}
    </div>
  );
};

export default DetailTitle;
