import bottomBtnStyle from './pageBottomBtn.css';

interface PageBottomBtnProps {
  btnText: string;
  size: 'small' | 'large';
  disabled: boolean;
  onClick: () => void;
}

const PageBottomBtn = ({ btnText, size, disabled, onClick }: PageBottomBtnProps) => {
  const className = bottomBtnStyle({
    size,
    disabled,
  });

  return (
    <button className={className} onClick={disabled ? undefined : onClick}>
      {btnText}
    </button>
  );
};

export default PageBottomBtn;
