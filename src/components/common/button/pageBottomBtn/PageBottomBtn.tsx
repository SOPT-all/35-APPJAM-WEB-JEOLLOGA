import bottomBtnStyle from './pageBottomBtn.css';

interface PageBottomBtnProps {
  btnText: string;
  size: 'small' | 'large';
  isDisabled: boolean;
  onClick: () => void;
}

const PageBottomBtn = ({ btnText, size, isDisabled, onClick }: PageBottomBtnProps) => {
  const className = bottomBtnStyle({
    size,
    isDisabled,
  });

  return (
    <button className={className} onClick={isDisabled ? undefined : onClick} disabled={isDisabled}>
      {btnText}
    </button>
  );
};

export default PageBottomBtn;
