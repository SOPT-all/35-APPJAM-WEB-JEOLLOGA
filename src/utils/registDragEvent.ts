const registDragEvent = ({
  onDragChange,
  onDragEnd,
  stopPropagation,
}: {
  onDragChange?: (dx: number, dy: number) => void;
  onDragEnd?: (dx: number, dy: number) => void;
  stopPropagation?: boolean;
}) => ({
  onMouseDown: (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
    if (stopPropagation) clickEvent.stopPropagation(); // 부모로 클릭 이벤트 전달 안 되도록

    // 마우스 이동거리 계산
    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      const dx = moveEvent.pageX - clickEvent.pageX;
      const dy = moveEvent.pageY - clickEvent.pageY;
      onDragChange?.(dx, dy);
    };

    const mouseUpHandler = (moveEvent: MouseEvent) => {
      const dx = moveEvent.pageX - clickEvent.pageX;
      const dy = moveEvent.pageY - clickEvent.pageY;
      onDragEnd?.(dx, dy);
      document.removeEventListener('mousemove', mouseMoveHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler, { once: true });
  },
  onTouchStart: (touchEvent: React.TouchEvent<Element>) => {
    if (stopPropagation) touchEvent.stopPropagation();

    const touchMoveHandler = (moveEvent: TouchEvent) => {
      const dx = moveEvent.touches[0].pageX - touchEvent.touches[0].pageX;
      const dy = moveEvent.touches[0].pageY - touchEvent.touches[0].pageY;
      onDragChange?.(dx, dy);
    };

    const touchEndHandler = (endEvent: TouchEvent) => {
      const dx = endEvent.changedTouches[0].pageX - touchEvent.touches[0].pageX;
      const dy = endEvent.changedTouches[0].pageY - touchEvent.touches[0].pageY;
      onDragEnd?.(dx, dy);
      document.removeEventListener('touchmove', touchMoveHandler);
    };

    document.addEventListener('touchmove', touchMoveHandler);
    document.addEventListener('touchend', touchEndHandler, { once: true });
  },
});

export default registDragEvent;
