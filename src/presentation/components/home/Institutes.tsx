import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Slider } from '../slider/Slider';
import { InstituteModel } from '@/domain/models';
import { useReactHorizontalScrollingDrag } from '@/presentation/hooks/use-react-horizontal-scrolling-drag';
import { InstituteCard } from '../instituteCard/InstituteCard';

interface IProps {
  institutes: InstituteModel[];
}
export function Institutes({ institutes }: IProps) {
  const { dragStart, dragStop, handleDrag } = useReactHorizontalScrollingDrag();

  return (
    <Box
      sx={{
        padding: '24px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography color={'secondary'} fontSize={'22px'} fontWeight={'bold'}>
          Institutos
        </Typography>
        <Typography
          color={'secondary'}
          fontSize={'18px'}
          fontWeight={'bold'}
          sx={{ cursor: 'pointer' }}
          variant='subtitle1'
        >
          Ver todos
        </Typography>
      </Box>
      <Box mt={2}>
        {institutes && (
          <Slider
            dragStop={dragStop}
            onMouseDown={() => dragStart}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
          >
            {institutes.map((institute: InstituteModel) => (
              <InstituteCard key={institute.id} institute={institute} />
            ))}
          </Slider>
        )}
      </Box>
    </Box>
  );
}
