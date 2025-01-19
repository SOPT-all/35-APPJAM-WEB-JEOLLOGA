import { useCallback } from 'react';

const useScroll = (headerHeight: number = 0) => {
  const scrollToElement = useCallback(
    (targetId: string) => {
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top; // 요소의 현재 화면 내 위치
        const offsetPosition = window.scrollY + elementPosition - headerHeight;

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

export default useScroll;
