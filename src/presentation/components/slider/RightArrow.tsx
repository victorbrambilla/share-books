import React from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { ArrowForward } from '@mui/icons-material';
import { HorizontalScrollArrowComponent } from './ArrowComponent';

export const RightArrow = () => {
  const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } =
    React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);
  return (
    <HorizontalScrollArrowComponent
      disabled={disabled}
      onClick={() => scrollNext()}
    >
      <ArrowForward />
    </HorizontalScrollArrowComponent>
  );
};
