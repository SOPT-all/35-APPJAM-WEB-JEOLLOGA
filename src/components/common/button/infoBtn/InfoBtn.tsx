import Icon from '@assets/svgs';
import buttonStyle from '@components/common/button/infoBtn/infoBtn.css';

interface InfoBtnProps {
  label: string;
  onClick: () => void;
  hasDivider?: boolean;
}

const InfoBtn = ({ label, onClick, hasDivider = false }: InfoBtnProps) => {
  return (
    <button onClick={onClick} className={buttonStyle({ hasDivider })}>
      <p>{label} </p>
      <Icon.IcnArrowGrayRight />
    </button>
  );
};

export default InfoBtn;
