import { Box, Button, TextField, Typography } from '@mui/material';

import { signIn } from 'next-auth/react';
import React from 'react';

interface IProps {
  handleSetIsSignOut: (isSignOut: boolean) => void;
}
export const SigninComponent = ({ handleSetIsSignOut }: IProps) => {
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
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          padding: '24px',
        }}
      >
        <TextField
          autoComplete='email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          fullWidth
          margin='normal'
          label='E-mail'
          type={'email'}
        />
        <TextField
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          fullWidth
          margin='normal'
          label='Senha'
          type={'password'}
        />
        <Button fullWidth variant='contained' onClick={handleSubmit}>
          Logar
        </Button>
        <Button
          sx={{
            marginTop: '12px',
          }}
          fullWidth
          color='secondary'
          variant='contained'
          onClick={() => {
            handleSetIsSignOut(true);
          }}
        >
          Registre-se
        </Button>
      </Box>
    </Box>
  );
};
