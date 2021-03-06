import Image from 'next/image';
import React from 'react';
import bannerImg from '@/public/images/Reading book-pana.svg';
import { Box, Button, Typography } from '@mui/material';
import { ModalLogin } from '../modalLogin/ModalLogin';
import { useSession } from 'next-auth/react';

export const Banner = () => {
  const { data: session } = useSession();
  return (
    <Box
      sx={{
        height: '400px',
        backgroundColor: 'rgb(241 195 189 / 43%);',
        padding: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width: 768px)': {
          flexDirection: 'column-reverse',
          height: 'auto',
        },
      }}
    >
      <Box
        sx={{
          width: '40%',
          '@media (max-width: 768px)': {
            width: '100%',
          },
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
        {session ? (
          <Button color='secondary' variant='contained'>
            Adicionar livros
          </Button>
        ) : (
          <ModalLogin isLogin={false} />
        )}
      </Box>
      <Box>
        <Image width={400} height={400} src={bannerImg}></Image>
      </Box>
    </Box>
  );
};
