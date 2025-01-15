import UnderlinedBtn from '@components/common/button/underlinedBtn/UnderlinedBtn';
import tapBarContainer from '@components/common/tapBar/tapBar.css';
import { TapType, TAPS } from '@constants/taps';
import { useState } from 'react';

interface TapBarProps {
  type: TapType;
}

const TapBar = ({ type }: TapBarProps) => {
  const taplist = TAPS[type];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={tapBarContainer}>
      {taplist.map((label, index) => (
        <UnderlinedBtn
          key={index}
          label={label}
          isActive={activeIndex === index}
          onClick={() => handleTabClick(index)}
        />
      ))}
    </div>
  );
};

export default TapBar;
