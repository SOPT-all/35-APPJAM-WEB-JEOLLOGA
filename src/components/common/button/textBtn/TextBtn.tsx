import Icon from '@assets/svgs';
import React from 'react';

import textBtnStyle from './textBtn.css';

interface TextBtnProps {
  theme: 'lightGray' | 'gray';
  clicked?: boolean;
  size: 'small' | 'medium';
  leftIcon?: keyof typeof Icon;
  rightIcon?: keyof typeof Icon;
  text: string;
  onClick: () => void;
}

const TextBtn = ({
  theme,
  clicked,
  size,
  text,
  leftIcon,
  rightIcon,
  onClick,
  ...props
}: TextBtnProps) => {
  const LeftIconComponent = leftIcon ? Icon[leftIcon] : null;
  const RightIconComponent = rightIcon ? Icon[rightIcon] : null;

  return (
    <button
      className={textBtnStyle({ theme, state: clicked ? 'pressed' : 'default', size })}
      onClick={onClick}
      {...props}>
      {LeftIconComponent && <LeftIconComponent />}
      <span>{text}</span>
      {RightIconComponent && <RightIconComponent />}
    </button>
  );
};

export default TextBtn;
