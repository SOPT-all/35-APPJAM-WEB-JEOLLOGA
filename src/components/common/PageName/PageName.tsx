import Icon from '@assets/svgs';
import React from 'react';

import * as PageNameStyle from './pageName.css';

interface PageNameProps {
  leftIcon: keyof typeof Icon;
  onLeftClick: () => void;
  title: string;
  rightIcon?: keyof typeof Icon;
  onRightClick?: () => void;
}

const PageName = ({ leftIcon, onLeftClick, title, rightIcon, onRightClick }: PageNameProps) => {
  const LeftIconComponent = Icon[leftIcon];
  const RightIconComponent = rightIcon ? Icon[rightIcon] : null;

  return (
    <nav className={PageNameStyle.container}>
      <button className={PageNameStyle.buttonLayout} onClick={onLeftClick}>
        <LeftIconComponent />
      </button>
      <span className={PageNameStyle.titleStyle}>{title}</span>
      {RightIconComponent && (
        <button className={PageNameStyle.buttonLayout} onClick={onRightClick}>
          <RightIconComponent />
        </button>
      )}
    </nav>
  );
};

export default PageName;
