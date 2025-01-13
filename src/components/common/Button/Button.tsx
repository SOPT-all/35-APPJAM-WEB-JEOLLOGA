import Icon from '@assets/svgs';

import buttonStyle from './button.css';

interface ButtonProps {
  variant?: 'primary' | 'grayOutlined' | 'blackOutlined';
  size?: 'large' | 'medium' | 'small';
  label: string;
  leftIcon?: keyof typeof Icon;
  rightIcon?: keyof typeof Icon;
  onClick?: () => void;
  isActive?: boolean;
}

const Button = ({
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
      {label}
      {SelectedRightIcon && <SelectedRightIcon />}
    </button>
  );
};

export default Button;
