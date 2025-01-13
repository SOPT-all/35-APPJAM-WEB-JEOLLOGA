import React from 'react';

import textButtonStyle from './textButton.css';

interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: 'lightGray' | 'gray';
  state: 'default' | 'pressed';
  size: 'small' | 'medium';
  leftIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  rightIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
}

const TextButton = ({ theme, state, size, text, ...props }: TextButtonProps) => {
  return (
    <button className={textButtonStyle({ theme, state, size })} {...props}>
      {/* {LeftIcon && <LeftIcon />} */}
      <span>{text}</span>
      {/* {RightIcon && <RightIcon />} */}
    </button>
  );
};

export default TextButton;
