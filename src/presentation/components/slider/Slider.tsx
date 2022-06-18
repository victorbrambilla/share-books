import React, { MouseEventHandler } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import type { Props as ReactHorizontalScrollingProps } from 'react-horizontal-scrolling-menu';
import { LeftArrow } from './LeftArrow';
import { RightArrow } from './RightArrow';
import { Box } from '@mui/material';

type Props = Omit<ReactHorizontalScrollingProps, 'LeftArrow' | 'RightArrow'> & {
  dragStop: MouseEventHandler<HTMLDivElement>;
};
export const Slider = ({
  dragStop,
  children,
  onMouseMove,
  onMouseDown,
  onMouseUp,
}: Props) => {
  return (
    <div onMouseLeave={dragStop} className='horizontal-scroll-container'>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {children}
      </ScrollMenu>
    </div>
  );
};
