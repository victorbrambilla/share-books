import React from 'react';
import { Box, Typography } from '@mui/material';
import { NextPage } from 'next';

export const Institutes: NextPage = () => {
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
        <Typography fontSize={'22px'} fontWeight={'bold'}>
          Institutes
        </Typography>
        <Typography
          color={'#f35713'}
          fontSize={'18px'}
          fontWeight={'bold'}
          sx={{ cursor: 'pointer' }}
          variant='subtitle1'
        >
          See all
        </Typography>
      </Box>
    </Box>
  );
};
