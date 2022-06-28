import axios from 'axios';
import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { toastConfig } from '@/presentation/libs/toast/Toast';
import { signupModel } from '@/presentation/models/signup-model';
import { signupSchema } from '@/validation/schemas/signup-schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface IProps {
  handleSetIsSignOut: (isSignOut: boolean) => void;
}

export const SignupComponent = ({ handleSetIsSignOut }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signupModel>({ resolver: yupResolver(signupSchema) });

  const onSubmit = async (data: signupModel) => {
    const id = toast.loading('Carregando...', toastConfig);
    axios
      .post('/api/signup', data)
      .then((res) => {
        toast.update(id, {
          render: 'Cadastrado com sucesso!',
          type: 'success',
          isLoading: false,
        });
        handleSetIsSignOut(false);
      })
      .catch((err) => {
        console.log(err.response.data);
        if (err.response.data.error === 'User already exists') {
          toast.update(id, {
            render: 'Usuário já existe!',
            type: 'error',
            isLoading: false,
          });
        } else {
          toast.update(id, {
            render: 'Erro ao cadastrar usuário!',
            type: 'error',
            isLoading: false,
          });
        }
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
        component='form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          {...register('name')}
          fullWidth
          margin='normal'
          label='Nome'
          type={'text'}
          error={errors.name ? true : false}
          helperText={errors.name && errors.name.message}
        />
        <TextField
          {...register('email')}
          fullWidth
          margin='normal'
          label='E-mail'
          type={'email'}
          error={errors.email ? true : false}
          helperText={errors.email && errors.email.message}
        />
        <TextField
          {...register('password')}
          fullWidth
          margin='normal'
          label='Senha'
          type={'password'}
          error={errors.password ? true : false}
          helperText={errors.password && errors.password.message}
        />
        <TextField
          {...register('userName')}
          fullWidth
          margin='normal'
          label='Usuário'
          type={'text'}
          error={errors.userName ? true : false}
          helperText={errors.userName && errors.userName.message}
        />

        <Button
          sx={{
            color: 'secondary',
          }}
          variant='contained'
          type='submit'
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
