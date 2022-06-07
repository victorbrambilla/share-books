import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export default function Loading() {
  return (
    <Box
      sx={{
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
      }}
    >
      <CircularProgress size={50} />
    </Box>
  );
}
