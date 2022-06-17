import React, { useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { signIn } from 'next-auth/react';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { toastConfig } from '../../libs/toast/Toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/validation/schemas/login-schema';
import { LoginModel } from '@/presentation/models/login-model';

interface IProps {
  handleSetIsSignOut: (isSignOut: boolean) => void;
}

interface Ilogin {
  error: string | undefined;
  status: number;
  ok: boolean;
  url: string | null;
}

export const SigninComponent = ({ handleSetIsSignOut }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginModel>({ resolver: yupResolver(loginSchema) });

  const onSubmit = async (data: LoginModel) => {
    const id = toast.loading('Carregando...', toastConfig);
    const res = (await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    })) as unknown as Ilogin;

    if (res.ok) {
      toast.update(id, {
        render: 'Autorizado',
        type: 'success',
        isLoading: false,
      });
    } else {
      toast.update(id, {
        render: 'Credenciais inválidas!',
        type: 'error',
        isLoading: false,
      });
    }
    return;
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
          {...register('email')}
          autoComplete='email'
          fullWidth
          margin='normal'
          label='E-mail'
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
        <Button fullWidth type='submit' variant='contained'>
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
