import buttonBarContainer from '@components/common/button/buttonBar/buttonBar.css';
import FlowerBtn from '@components/common/button/flowerBtn/FlowerBtn';
import PageBottomBtn from '@components/common/button/pageBottom/PageBottomBtn';
import TextBtn from '@components/common/button/textBtn/TextBtn';
import { useState } from 'react';

interface ButtonBarProps {
  type: 'reset' | 'wish';
  label: string;
}

const ButtonBar = ({ type, label }: ButtonBarProps) => {
  const [isActive, setIsActive] = useState(false);

  const onClickLefthBtn = () => {
    setIsActive((prev) => !prev);
  };

  const renderLeftButton = () =>
    type === 'wish' ? (
      <FlowerBtn label="찜하기" isActive={isActive} isLeftIcn onClick={onClickLefthBtn} />
    ) : (
      <TextBtn
        text="초기화"
        onClick={onClickLefthBtn}
        leftIcon="IcnReset"
        size="medium"
        clicked={isActive}
      />
    );

  return (
    <div className={buttonBarContainer}>
      {renderLeftButton()}
      <PageBottomBtn btnText={label} size="small" onClick={() => {}} />
    </div>
  );
};

export default ButtonBar;
