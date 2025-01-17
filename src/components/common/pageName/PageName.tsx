import Icon from '@assets/svgs';
import useNavigateToPrev from 'src/hook/useNavigateToPrev';

import * as PageNameStyle from './pageName.css';

interface PageNameProps {
  title: string;
  onRightClick?: () => void;
  isLikeBtn?: boolean;
}

const PageName = ({ title, onRightClick, isLikeBtn = true }: PageNameProps) => {
  return (
    <nav className={PageNameStyle.container}>
      <button className={PageNameStyle.buttonLayout} onClick={useNavigateToPrev()}>
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
