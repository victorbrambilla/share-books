import React, { useContext, useEffect, useState } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { ArrowForward } from '@mui/icons-material';
import { HorizontalScrollArrowComponent } from './ArrowComponent';

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } =
    useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  useEffect(() => {
    if (visibleItemsWithoutSeparators.length) setDisabled(isLastItemVisible);
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <HorizontalScrollArrowComponent
      disabled={disabled}
      onClick={() => scrollNext()}
    >
      <div style={{ position: 'relative' }}>
        <ArrowForward aria-label='Scroll right' />
      </div>
    </HorizontalScrollArrowComponent>
  );
}
