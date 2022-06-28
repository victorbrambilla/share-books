import React, { useEffect } from 'react';
import axios from 'axios';
import { CreateInstituteModel } from '@/presentation/models/create-institute-model';
import { CreateInstituteSchema } from '@/validation/schemas/create-institute-schema';
import { Box, Button, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export const FormInstitute = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateInstituteModel>({
    resolver: yupResolver(CreateInstituteSchema),
  });

  const onSubmit = async (data: CreateInstituteModel) => {
    const d = {
      ...data,
      adminId: 3,
    };
    console.log(d);
    axios
      .post('/api/createInstitute', d)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    return;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',

        height: '100%',
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
        {...register('address')}
        fullWidth
        margin='normal'
        label='Endereço'
        type={'text'}
        error={errors.address ? true : false}
        helperText={errors.address && errors.address.message}
      />
      <TextField
        {...register('city')}
        fullWidth
        margin='normal'
        label='Cidade'
        type={'text'}
        error={errors.city ? true : false}
        helperText={errors.city && errors.city.message}
      />
      <TextField
        {...register('state')}
        fullWidth
        margin='normal'
        label='Estado'
        type={'text'}
        error={errors.state ? true : false}
        helperText={errors.state && errors.state.message}
      />
      <TextField
        {...register('zip')}
        fullWidth
        margin='normal'
        label='Cep'
        type={'text'}
        error={errors.zip ? true : false}
        helperText={errors.zip && errors.zip.message}
      />
      <TextField
        {...register('description')}
        fullWidth
        margin='normal'
        label='Descrição'
        type={'text'}
        error={errors.description ? true : false}
        helperText={errors.description && errors.description.message}
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
    </Box>
  );
};
