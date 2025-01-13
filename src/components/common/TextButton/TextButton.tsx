import Icon from '@assets/svgs';
import React from 'react';

import textButtonStyle from './textButton.css';

interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: 'lightGray' | 'gray';
  state: 'default' | 'pressed';
  size: 'small' | 'medium';
  leftIcon?: keyof typeof Icon;
  rightIcon?: keyof typeof Icon;
  text: string;
}

const TextButton = ({
  theme,
  state,
  size,
  text,
  leftIcon,
  rightIcon,
  ...props
}: TextButtonProps) => {
  const LeftIconComponent = leftIcon ? Icon[leftIcon] : null;
  const RightIconComponent = rightIcon ? Icon[rightIcon] : null;

  return (
    <button className={textButtonStyle({ theme, state, size })} {...props}>
      {LeftIconComponent && <LeftIconComponent />}
      <span>{text}</span>
      {RightIconComponent && <RightIconComponent />}
    </button>
  );
};

export default TextButton;
