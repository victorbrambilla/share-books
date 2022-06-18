import Image from 'next/image';
import React from 'react';
import bannerImg from '@/public/images/Reading book-pana.svg';
import { Box, Button, Typography } from '@mui/material';
import { NextPage } from 'next';
import { ModalLogin } from '../modalLogin/ModalLogin';

export const Banner: NextPage = () => {
  return (
    <Box
      sx={{
        height: '400px',
        backgroundColor: 'rgb(241 195 189 / 43%);',
        padding: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '40%',
        }}
      >
        <Typography variant='h5' fontWeight={'bold'}>
          {' '}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        <Typography variant='subtitle1'>
          {' '}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry m Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        <ModalLogin isLogin={false} />
      </Box>
      <Box>
        <Image width={400} height={400} src={bannerImg}></Image>
      </Box>
    </Box>
  );
};
