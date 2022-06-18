import { ContextType, useCallback, useRef, useState } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import type { MouseEvent } from 'react';
type ScrollVisibilityType = ContextType<typeof VisibilityContext>;
export function useReactHorizontalScrollingDrag() {
  const [clicked, setClicked] = useState(false);
  const [dragging, setDragging] = useState(false);
  const position = useRef(0);
  const dragStart = useCallback((ev: MouseEvent) => {
    position.current = ev.clientX;
    setClicked(true);
  }, []);
  const dragStop = useCallback(
    () =>
      window.requestAnimationFrame(() => {
        setDragging(false);
        setClicked(false);
      }),
    []
  );
  const dragMove = useCallback(
    (ev: MouseEvent, cb: (posDif: number) => void) => {
      const newDiff = position.current - ev.clientX;
      const movedEnough = Math.abs(newDiff) > 5;
      if (clicked && movedEnough) {
        setDragging(true);
      }
      if (dragging && movedEnough) {
        position.current = ev.clientX;
        cb(newDiff);
      }
    },
    [dragging, clicked]
  );

  const handleDrag = useCallback(
    ({ scrollContainer }: ScrollVisibilityType) => {
      return (ev: MouseEvent) => {
        return dragMove(ev, (posDiff) => {
          if (scrollContainer.current) {
            scrollContainer.current.scrollLeft += posDiff;
          }
        });
      };
    },
    [dragMove]
  );
  return {
    dragStart,
    dragStop,
    dragMove,
    dragging,
    position,
    setDragging,
    handleDrag,
  };
}
