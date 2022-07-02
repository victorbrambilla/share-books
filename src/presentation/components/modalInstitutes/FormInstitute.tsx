import React, { useEffect } from 'react';
import axios from 'axios';
import { CreateInstituteModel } from '@/presentation/models/create-institute-model';
import { CreateInstituteSchema } from '@/validation/schemas/create-institute-schema';
import { Box, Button, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { toastConfig } from '@/presentation/libs/toast/Toast';
import { useSession } from 'next-auth/react';
import { InstituteModel } from '@/domain/models';
import { useRefresh } from '@/presentation/hooks/use-refresh';

interface IProps {
  dataInstitute: InstituteModel | null;
}

export const FormInstitute = ({ dataInstitute }: IProps) => {
  const { data: session } = useSession();
  const { refreshData } = useRefresh();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateInstituteModel>({
    resolver: yupResolver(CreateInstituteSchema),
  });

  useEffect(() => {
    if (dataInstitute) {
      reset(dataInstitute);
    }
  }, [dataInstitute]);

  const onSubmit = async (data: CreateInstituteModel) => {
    const id = toast.loading('Carregando...', toastConfig);
    if (dataInstitute) {
      axios
        .put(`/api/updateInstitute`, data)
        .then(() => {
          refreshData();
          toast.update(id, {
            render: 'Alterado com sucesso!',
            type: 'success',
            isLoading: false,
          });
        })
        .catch(() => {
          toast.update(id, {
            render: 'Erro ao alterar!',
            type: 'error',
            isLoading: false,
          });
        });
    } else {
      const d = {
        ...data,
        adminId: session?.user.id,
      };
      axios
        .post('/api/createInstitute', d)
        .then((res) => {
          console.log(res);
          toast.update(id, {
            render: 'Autorizado',
            type: 'success',
            isLoading: false,
          });
        })
        .catch((err) => {
          if (err.response.data.message === 'Institute already exists') {
            console.log(err.response.data.message);
            toast.update(id, {
              render: 'Instituto já existe!',
              type: 'error',
              isLoading: false,
            });
          }
        });
    }

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
        {dataInstitute ? 'Atualizar' : 'Criar'}
      </Button>
    </Box>
  );
};
