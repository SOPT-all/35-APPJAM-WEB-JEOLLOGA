import UnderlinedBtn from '@components/common/button/underlinedBtn/UnderlinedBtn';
import tabBarContainer from '@components/common/tabBar/tabBar.css';
import { useState } from 'react';

const TabBar = () => {
  const list = ['지역', '유형', '목적', '체험', '가격', '기타'];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={tabBarContainer}>
      {list.map((label, index) => (
        <UnderlinedBtn
          key={index}
          label={label}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

export default TabBar;
