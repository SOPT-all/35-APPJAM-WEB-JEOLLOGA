import UnderlinedBtn from '@components/common/button/underlinedBtn/UnderlinedBtn';
import tapBarContainer from '@components/common/tapBar/tapBar.css';
import { HEADER_HEIGHT } from '@constants/constants';
import FILTERS from '@constants/filters';
import { TapType, TAPS } from '@constants/taps';
import { useState } from 'react';
import useMoveScroll from 'src/hook/useMoveScroll';
import useScrollTracker from 'src/hook/useScrollTrack';

interface TapBarProps {
  type: TapType;
}

const TapBar = ({ type }: TapBarProps) => {
  const taplist = TAPS[type];
  const sectionIds = Object.keys(FILTERS);
  const [activeIndex, setActiveIndex] = useState(0);

  useScrollTracker(sectionIds, HEADER_HEIGHT, activeIndex, setActiveIndex);
  const scrollToElement = useMoveScroll(HEADER_HEIGHT);

  const handleTabClick = (activeIndex: number) => {
    scrollToElement(sectionIds, activeIndex);
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
