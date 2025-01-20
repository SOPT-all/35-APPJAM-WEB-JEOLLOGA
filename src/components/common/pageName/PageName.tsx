import Icon from '@assets/svgs';
import React from 'react';

import * as PageNameStyle from './pageName.css';

interface PageNameProps {
  onLeftClick: () => void;
  title: string;
  onRightClick?: () => void;
  isLikeBtn?: boolean;
}

const PageName = ({ onLeftClick, title, onRightClick, isLikeBtn = true }: PageNameProps) => {
  return (
    <nav className={PageNameStyle.container}>
      <button className={PageNameStyle.buttonLayout} onClick={onLeftClick}>
        <Icon.IcnArrowBlackLeft />
      </button>
      <span className={PageNameStyle.titleStyle}>{title}</span>
      {isLikeBtn && (
        <button className={PageNameStyle.buttonLayout} onClick={onRightClick}>
          <Icon.IcnWish />
        </button>
      )}
    </nav>
  );
};

export default PageName;
