import React, { useEffect, useState } from 'react';
import { BookModel } from '@/domain/models';
import { useRefresh } from '@/presentation/hooks/use-refresh';
import { toastConfig } from '@/presentation/libs/toast/Toast';
import { CreateBookModel } from '@/presentation/models/create-book-model';
import { CreateBookSchema } from '@/validation/schemas/create-book-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';

interface IProps {
  book: BookModel | null;
}

export const FormBook = ({ book }: IProps) => {
  const [InstituteId, setInstituteId] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateBookModel>({
    resolver: yupResolver(CreateBookSchema),
  });
  const { data: session } = useSession();
  const { refreshData } = useRefresh();

  useEffect(() => {
    if (book) {
      reset(book);
    }
    axios
      .get('/api/getInstituteByAdminId', {
        params: {
          adminId: session?.user.id,
        },
      })
      .then((res) => {
        setInstituteId(res.data.findInstitute.id);
      });
  }, []);

  const onSubmit = (data: CreateBookModel) => {
    const id = toast.loading('Carregando...', toastConfig);
    if (book) {
      axios
        .put(`/api/updateBook`, data)
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
      axios
        .post('/api/createBook', data)
        .then((res) => {
          refreshData();
          toast.update(id, {
            render: 'Livro Criado com sucesso!',
            type: 'success',
            isLoading: false,
          });
        })
        .catch((err) => {
          if (err.response.data.message === 'Book already exists') {
            console.log(err.response.data.message);
            toast.update(id, {
              render: 'Livro já existe!',
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
        {...register('edition')}
        fullWidth
        margin='normal'
        label='Edição'
        type={'text'}
        error={errors.edition ? true : false}
        helperText={errors.edition && errors.edition.message}
      />
      <TextField
        {...register('year')}
        fullWidth
        margin='normal'
        label='ano'
        type={'date'}
        error={errors.year ? true : false}
        helperText={errors.year && errors.year.message}
      />
      <TextField
        {...register('releaseDate')}
        fullWidth
        margin='normal'
        label='Data de Lançamento'
        type={'date'}
        error={errors.releaseDate ? true : false}
        helperText={errors.releaseDate && errors.releaseDate.message}
      />
      <TextField
        {...register('status')}
        fullWidth
        margin='normal'
        label='Status'
        type={'text'}
        error={errors.status ? true : false}
        helperText={errors.status && errors.status.message}
      />
      <TextField
        {...register('stock')}
        fullWidth
        margin='normal'
        label='Estoque'
        type={'text'}
        error={errors.stock ? true : false}
        helperText={errors.stock && errors.stock.message}
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
        {...register('instituteId')}
        fullWidth
        margin='normal'
        label='Instituto'
        type={'text'}
        value={InstituteId}
        error={errors.instituteId ? true : false}
        helperText={errors.instituteId && errors.instituteId.message}
      />
      <Button
        sx={{
          color: 'secondary',
        }}
        variant='contained'
        type='submit'
        fullWidth
      >
        {book ? 'Atualizar' : 'Criar'}
      </Button>
    </Box>
  );
};
