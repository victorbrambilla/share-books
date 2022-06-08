import axios from 'axios';
import React from 'react';
import { ArrowBack } from '@mui/icons-material';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';

interface IProps {
  handleSetIsSignOut: (isSignOut: boolean) => void;
}

export const SignupComponent = ({ handleSetIsSignOut }: IProps) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [userName, setUserName] = React.useState('');

  const handleSubmit = async () => {
    console.log(email, password);
    axios
      .post('/api/signup', { name, email, password, userName })
      .then((res) => {
        console.log(res);
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
          onChange={(e) => {
            setName(e.target.value);
          }}
          fullWidth
          margin='normal'
          label='Nome'
          type={'text'}
        />
        <TextField
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
        <TextField
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          fullWidth
          margin='normal'
          label='Usuário'
          type={'text'}
        />

        <Button
          sx={{
            color: 'secondary',
          }}
          variant='contained'
          onClick={handleSubmit}
          fullWidth
        >
          Registrar
        </Button>
        <Button
          sx={{
            marginTop: '12px',
          }}
          color='secondary'
          variant='contained'
          onClick={() => {
            handleSetIsSignOut(false);
          }}
          fullWidth
        >
          Voltar
        </Button>
      </Box>
    </Box>
  );
};
