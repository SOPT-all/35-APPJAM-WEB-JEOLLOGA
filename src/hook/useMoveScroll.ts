import { extraOffsetValue } from '@constants/constants';
import { useCallback } from 'react';

const useMoveScroll = (headerHeight: number = 0) => {
  const scrollToElement = useCallback(
    (sectionIds: string[], activeIndex: number) => {
      const targetElement = document.getElementById(sectionIds[activeIndex]);

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top; // 요소의 현재 화면 내 위치
        const extraOffset = activeIndex === sectionIds.length - 2 ? extraOffsetValue : 0; // 마지막에서 2번째 앞일때 위치 조정 추가
        const offsetPosition = window.scrollY + elementPosition - headerHeight - extraOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    },
    [headerHeight],
  );

  return scrollToElement;
};

export default useMoveScroll;
