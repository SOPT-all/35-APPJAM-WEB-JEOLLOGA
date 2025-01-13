import Icon from '@assets/svgs';
import buttonStyle from '@components/common/button/basicBtn/basicBtn.css';

interface ButtonProps {
  variant?: 'primary' | 'grayOutlined' | 'blackOutlined';
  size?: 'large' | 'medium' | 'small';
  label: string;
  leftIcon?: keyof typeof Icon;
  rightIcon?: keyof typeof Icon;
  onClick?: () => void;
  isActive?: boolean;
}

const BasicBtn = ({
  variant = 'primary',
  size = 'medium',
  label,
  leftIcon,
  rightIcon,
  onClick,
  isActive = false,
}: ButtonProps) => {
  const SelectedLeftIcon = leftIcon ? Icon[leftIcon] : null;
  const SelectedRightIcon = rightIcon ? Icon[rightIcon] : null;

  return (
    <button
      className={buttonStyle({ color: variant, size, active: isActive ? true : false })}
      onClick={onClick}>
      {SelectedLeftIcon && <SelectedLeftIcon />}
      <p>{label}</p>
      {SelectedRightIcon && <SelectedRightIcon />}
    </button>
  );
};

export default BasicBtn;
