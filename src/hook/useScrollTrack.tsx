import { extraOffsetValue } from '@constants/constants';
import { useEffect } from 'react';

const useScrollTracker = (
  sections: string[],
  headerHeight: number = 0,
  activeIndex: number,
  setActiveIndex: (index: number) => void,
) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + headerHeight;
      let newIndex = -1;

      sections.forEach((sectionId, index) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const extraOffset = index === sections.length - 2 ? extraOffsetValue : 0; // 마지막에서 2번째 앞일때 위치 조정 추가
        const elementTop = element.offsetTop - extraOffset;
        const elementBottom = elementTop + element.offsetHeight;

        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          newIndex = index;
        }
      });

      const pageBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (pageBottom) {
        newIndex = sections.length - 1;
      }

      if (newIndex !== -1 && newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections, headerHeight, activeIndex, setActiveIndex]);
};

export default useScrollTracker;
