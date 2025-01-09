import buttonStyle from './button.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  size?: 'xLarge' | 'large' | 'medium';
  isDisabled?: boolean;
  label: string;
}

const Button = ({
  variant = 'primary',
  size = 'medium',
  isDisabled = false,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={buttonStyle({ color: variant, size: size })}
      disabled={isDisabled}
      {...props}>
      {label}
    </button>
  );
};

export default Button;
