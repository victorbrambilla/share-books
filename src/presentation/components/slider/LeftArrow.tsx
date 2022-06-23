import React from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { ArrowBack } from '@mui/icons-material';
import { HorizontalScrollArrowComponent } from './ArrowComponent';

export function LeftArrow() {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleItemsWithoutSeparators,
    initComplete,
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <HorizontalScrollArrowComponent
      disabled={disabled}
      onClick={() => scrollPrev()}
    >
      <ArrowBack />
    </HorizontalScrollArrowComponent>
  );
}
