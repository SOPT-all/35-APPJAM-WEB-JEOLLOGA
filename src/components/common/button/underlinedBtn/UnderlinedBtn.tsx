import ButtonStyle from '@components/common/button/underlinedBtn/underlinedBtn.css';

interface UnderlinedBtnProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
}

const UnderlinedBtn = ({ label, onClick, isActive = false }: UnderlinedBtnProps) => {
  return (
    <button onClick={onClick} className={ButtonStyle({ isActive: isActive ? true : false })}>
      {label}
    </button>
  );
};

export default UnderlinedBtn;
