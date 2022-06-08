import { Box, Button, TextField, Typography } from '@mui/material';

import { signIn } from 'next-auth/react';
import React from 'react';

interface Iprops {
  handleSign: (value: boolean) => void;
}

export const SigninComponent = ({ handleSign }: Iprops) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async () => {
    const res = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password,
      callbackUrl: `${window.location.origin}/home`,
    });
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Typography color={'secondary'} variant='h2'>
        Login
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '500px',
        }}
      >
        <TextField
          autoComplete='email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          fullWidth
          margin='normal'
          label='Email'
          type={'email'}
        />
        <TextField
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          fullWidth
          margin='normal'
          label='Password'
          type={'password'}
        />
        <br />
        <br />
        <Button
          sx={{
            width: '30%',
            color: 'secondary',
          }}
          variant='contained'
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography color='secondary' marginY={1} textAlign={'center'}>
          Don't have account?
        </Typography>
        <Button
          sx={{
            color: 'secondary',
          }}
          variant='contained'
          onClick={() => {
            handleSign(true);
          }}
        >
          SignUp
        </Button>
      </Box>
    </Box>
  );
};
