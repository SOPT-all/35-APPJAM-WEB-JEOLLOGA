import Icon from '@assets/svgs';
import React from 'react';

import textButtonStyle from './textButton.css';

interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: 'lightGray' | 'gray';
  clicked?: boolean;
  size: 'small' | 'medium';
  leftIcon?: keyof typeof Icon;
  rightIcon?: keyof typeof Icon;
  text: string;
}

const TextButton = ({
  theme,
  clicked,
  size,
  text,
  leftIcon,
  rightIcon,
  onClick,
  ...props
}: TextButtonProps) => {
  const LeftIconComponent = leftIcon ? Icon[leftIcon] : null;
  const RightIconComponent = rightIcon ? Icon[rightIcon] : null;

  return (
    <button
      className={textButtonStyle({ theme, state: clicked ? 'pressed' : 'default', size })}
      onClick={onClick}
      {...props}>
      {LeftIconComponent && <LeftIconComponent />}
      <span>{text}</span>
      {RightIconComponent && <RightIconComponent />}
    </button>
  );
};

export default TextButton;
