import { ArrowBack } from '@mui/icons-material';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';

interface Iprops {
  handleSign: (value: boolean) => void;
}

export const SignupComponent = ({ handleSign }: Iprops) => {
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
        height: '100%',
      }}
    >
      <IconButton
        sx={{
          float: 'left',
          color: 'secondary',
        }}
        onClick={() => {
          handleSign(false);
        }}
      >
        <ArrowBack fontSize='large' />
      </IconButton>

      <Typography color={'secondary'} variant='h2'>
        Register
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
          onChange={(e) => {
            setName(e.target.value);
          }}
          fullWidth
          margin='normal'
          label='Name'
          type={'text'}
        />
        <TextField
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
        <TextField
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          fullWidth
          margin='normal'
          label='Confirm Password'
          type={'email'}
        />
        <TextField
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          fullWidth
          margin='normal'
          label='Username'
          type={'text'}
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
          Register
        </Button>
      </Box>
    </Box>
  );
};
