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
});

export default registDragEvent;
